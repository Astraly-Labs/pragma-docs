---
id: Using Pragma's OO
title: Using Pragma's OO
sidebar_position: 2
--- 

---


### Get started 

To begin with, you can find the interface to interact with our contracts [here](https://github.com/astraly-labs/Optimistic-Oracle/blob/main/optimistic_oracle/src/contracts/interfaces.cairo).


### Structure

### `Assertion`

- `**escalation_manager_settings** ` - A structure containing the escalation manager settings.
- `**asserter**` -  Address of the asserter.
- `**assertion_time**` - Time of the assertion.
- `**settled**` -  True if the request is settled.
- `**currency**` - ERC20 token used to pay rewards and fees.
- `**expiration_time**` - Unix timestamp marking threshold when the assertion can no longer be disputed  
- `**settlement_resolution**` - Resolution of the assertion (false till resolved).
- `**domain_id**` - Optional domain that can be used to relate the assertion to others in the escalation_manager.
- `**identifier**` ; DVM identifier to use for price requests in the event of a dispute.
- `**bond**` - Amount of currency that the asserter has bonded.
- `**callback_recipient**` - Address that receives the callback.
- `**disputer**` -  Address of the disputer.



### Functions

### `assert_truth_with_default` 

Asserts a truth about the world, using the default currency and liveness (stored in the contract). The currency is the bond currency sent to the contract and held in escrow until the assertion is resolved. The liveness is the time allowed to dispute an assertion. It will be resolved at the end of this time. For this function to work, the caller is expected to provide a bond of final_fee/burned_bond_percentage of the default currency. You can get the minimum bond by calling the get_minimum_bond(default_currency) to retrieve the value.

#### Inputs

- `**claim**` - The truth being asserted.  
- `**asserter`- The account that will receive the bond at settlement time. Can be caller of this function, or another account wanted.   

#### Returns

- `**assertion_id***` - An unique identifier for this assertion   


### `assert_truth` 

In case you do not want to use the default stored configuration, you can call assert_truth and specify the entire configuration wanted. As in the previous function, the caller must approve this contract to spend at least the bond amount in the provided currency.

#### Inputs

- `**claim**` - The truth claim being asserted
- `**asserter**`- The account that will receive the bond at settlement time. Can be caller of this function, or another account wanted.   
- `**callback_recipient**` - If configured, this address will receive a function call `assertion_resolved_callback` at resolution or `assertion_disputed_callback` at dispute. The
recipient must implement these functions and not revert for the assertion not be blocked. 
- `**escalation_manager**` - If configured, this function will control escalation properties of the assertion. The asserter can then choose to arbitrate via DVM, discard assertion on dispute, or choose to validate disputes. Must implement the same callback functions as defined in `callback_recipient`.
-`**liveness**` - the time allowed to dispute an assertion, it will be resolved at the end of this time. 
- `**currency**`- bond currency sent to the contract and held in escrow until the assertion is resolved.
- `**identifier**` - identifier to use for price request. For prediction market, set it to "ASSERT_TRUTH"
- `**domain_id**`- optional domain that can be used to relate this assertion to others in the escalationManager. Set to 0 for now. 

##### Returns

`**assertion_id***` - An unique identifier for this assertion


### `settle_assertion` 

Resolves the assertion. If the assertion has not be disputed, the resolution is true and the asserter receive the bond. If the assertion has been disputed, TO COMPLETE...... 

#### Inputs
- `**assertion_id**` - unique identifier for the assertion to resolve.

### `settle_and_get_assertion_result`

Settles the assertion and returns the result.

#### Inputs
- `**assertion_id**` - unique identifier for the assertion to resolve.

#### Returns 
-`**resolution_result**` - a boolean on the resolution of the assertion



### `get_assertion_result`

Fetches the resolution of a specific assertion and returns it. If the assertion has not been settled reverts. 

#### Inputs
- `**assertion_id**` - unique identifier for the assertion to fetch.

#### Returns 
-`**resolution_result**` - a boolean on the resolution of the assertion


### `get_assertion` 

Retrieve the specific information regarding an assertion and returns it 

#### Inputs
- `**assertion_id**` - unique identifier for the assertion to fetch.

#### Returns 
- `**assertion**`- information about the assertion


### `dispute_assertion`

Disputes an assertion. The caller must approve this contract to spend at least bond amount of currency for the associated assertion.

#### Inputs
- `**assertion_id**` - unique identifier for the assertion to dispute.
- `**disputer**` - receives bonds back at settlement.


