---
id: evm-integration
title: EVM integration
sidebar_position: 1
---

---

## Integrate Pragma to your contract

### Overview

The Pragma oracle contract provides various data feeds including spot median prices, TWAPs, realized volatility, options data, and perpetuals data. This guide will help you integrate these data feeds into your smart contracts.

### Prerequisites

 - `Solidity ^0.8.0`
 - The address of the deployed Pragma oracle contract (you can find the list of deployed contracts [here](/v2/Price%20Feeds/Deployments))

### Integration steps

#### Integration through Pragma Solidity SDK

The easiest way to fetch prices from Pragma contracts is through the **Pragma Solidity SDK**, by interacting with the `Pragma.sol` interface.
You can also check out the full Solidity API documentation for the Solidity SDK.

Here is the installation steps for forge and hardhat/truffle.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="forge" label="Forge">

  ```bash
  # Install Foundry (Forge)
  curl -L https://foundry.paradigm.xyz | bash
  foundryup

  # Install the Solidity SDK for Forge
  forge install @pragmaoracle/solidity-sdk
  ```

  </TabItem>
  
  <TabItem value="hardhat-truffle" label="Hardhat/Truffle">

  ```bash
  # Install Hardhat (or Truffle) globally
  npm install --save-dev hardhat

  # OR

  npm install -g truffle

  # Install the Solidity SDK for Hardhat or Truffle
  npm install @pragmaoracle/solidity-sdk
  ```

  </TabItem>
</Tabs>


Once installed, you can use this code snippet for your integration: 
```solidity
pragma solidity ^0.8.0;
 
import "@pragmaoracle/solidity-sdk/src/interfaces/IPragma.sol";
import "@pragmaoracle/solidity-sdk/src/interfaces/PragmaStructs.sol";
 
contract YourContract {
  IPragma oracle;
 
  /**
   * @param pragmaContract The address of the Pragma contract
   */
  constructor(address pragmaContract) {
    // The IPragam interface from the sdk provides the methods to interact with the Pragma contract.
    oracle = IPragma(pragmaContract);
  }
 
  /**
     * This method is an example of how to interact with the Pragma contract to fetch Spot Median updates. You can check the documentation to 
     * find the available feeds.
     * @param priceUpdate The encoded data to update the contract with the latest price
     */
  function yourFunction(bytes[] calldata priceUpdate) public payable {
    // Submit a priceUpdate to the Pragma contract to update the on-chain price.
    // Updating the price requires paying the fee returned by getUpdateFee.
    uint fee = oracle.getUpdateFee(priceUpdate);
    oracle.updateDataFeeds{ value: fee }(priceUpdate);
 
    // Read the current price from a price feed if it is less than 60 seconds old.
    // Each price feed (e.g., Spot Median ETH/USD) is identified by a unique identifier id.
    bytes32 id = bytes32(abi.encodePacked(bytes7(0x4554482f555344))); // ETH/USD packed as 32 bytes
    SpotMedian memory data_feed = oracle.getSpotMedianNoOlderThan(id, 60);
  }

}

```
Let's detail the operations done by the snippet above.
Firstly we instantiate a `IPragma` interface from the solidity SDK, linked to a Pragma contract, passed in the constructor.  
Then we call `IPragma.getUpdateFee` to determine the fee charged to update the price.  
After calling `IPragma.updateDataFeeds` to update the price, paying the previous fee,  we call `IPragma.getSpotMedianNoOlderThan` to read the current spot median price for the given feed id providing an acceptable staleness for the data to be fetched. 
You can find [here](/v2/Price%20Feeds/supported-assets-chains) the list of available feeds. 


#### Integration by copying the Pragma interface

Alternatively, you can copy the `IPragma.sol` interface  and `PragmaStructs.sol` inside your repository, and generate an instance using a deployed Pragma contract.

```solidity
import {IPragma} from "./interfaces/IPragma.sol";
import PragmaStructs from "./interfaces/PragmaStructs.sol";
```

The rest remains the same as described above.



### Available feeds

You can now use various methods to fetch data from the Pragma oracle. Here are the main functions:

-  **getSpotMedianNoOlderThan**(bytes32 id, uint256 age)
-  **getTwapNoOlderThan**(bytes32 id, uint256 age)
-  **getRealizedVolatilityNoOlderThan**(bytes32 id, uint256 age)
-  **getOptionsNoOlderThan**(bytes32 id, uint256 age)
-  **getPerpNoOlderThan**(bytes32 id, uint256 age)


### Build an update calldata

This section outlines the **calldata** format requirements for valid updates. The complete calldata can be constructed by concatenating all bytes in the specified order below.


| Field                     |  Size             | Recommended value |
|---------------------------|:-------------------:|:-------------------:|
| Major version             |  uint8            |  1                |
| Minor version             |  uint8            |  0                |
| Trailing Header Size      |  uint8            |  0                |
| Hyperlane message length  |   uint16          |  .length          |

Then, comes the **hyperlane message**: 

| Field                     |  Size             | Recommended value |
|---------------------------|:-----------------:|:-----------------:|
| Hyperlane version         |  uint8            |  1                |
| Signatures                | Signatures         |   -               |
| Nonce                      |  uint32           |  -                |
| Block timestamp           |   uint64          | block.timestamp   |
| Emitter chain id          |   uint32          | [chain id ](/v2/Price%20Feeds/supported-assets-chains) |
| Emitter address           | bytes32(starknet address) |  -        |
| Payload                   | Payload           |       -           |

**Signatures** are packed encoded, starting with a single byte indicating the total number of signatures. Each signature then consists of:

 - one-byte index (mapping the signature to its corresponding validator in the Hyperlane contract)
 - 32-byte r-component
 - 32-byte s-component
 - one-byte v-component

Finally the **payload**: 

| Field                     |  Size             | Recommended value |
|---------------------------|:-------------------:|:---------------:|
| Checkpoint root           |  bytes32          |   -               |
| Num updates               |  uint8            |  -                |
| Update Size               |  uint16           |  .length          |
| Proof length              |   uint16          |  .length          |
| Proof                     | -                 |  -                |
| Update data               | UpdateData        | -                 |
| Feed id                   | bytes32           |   -               | 
| Block timestamp           | uint64            | block.timestamp   |

**UpdateData** represents the packed encoding `abi.encodePacked` of the desired feed type, which could be SpotMedian, TWAP, Options, Perpetuals, or other supported types.
For applications, the process of building calldata is simplified; it can be retrieving through the `get_calldata` theoros endpoint. 