---
id: Overview
title: Optimistic oracle ? 
sidebar_position: 1
---



An optimistic oracle is a decentralized mechanism in blockchain and Web3 systems that allows for the rapid inclusion of off-chain data or computation results on-chain, without immediate verification. It operates on the principle of "optimistic" trust, assuming submitted data is correct unless challenged within a specified time frame. If unchallenged, the data is considered valid; if disputed, it undergoes a verification process.  

This approach significantly reduces the latency and cost associated with bringing external information on-chain, as it only requires full verification in cases of disagreement.  

Optimistic oracles are particularly useful for complex computations, large datasets, or frequently updated information, enabling more efficient and scalable blockchain applications while maintaining a high degree of trust and security.

### Pragma's optimisitic oracle 

---

You can find [here](https://github.com/astraly-labs/Optimistic-Oracle/tree/main) Pragma's first implementation of the Optimistic oracle on Starknet, following UMA's general interface. 

Our OO works by making a truth claim about the world, stating that something has happened or is true. Once asserted, the assertion enters a challenge period wherein someone can disagree with the assertion by disputing it. If no one disputes it during the challenge window, the statement is taken as true. In case there is a dispute, the data verification mechanism intervenes.


### General process

#### Step 1: Assertion Submission
An Asserter submits a bonded assertion about a real-world state. This assertion includes:

- **Identifier**: The specific price identifier being asserted  
- **Timestamp**: When the asserted fact occurred  
- **Claim**: Additional contextual information about the assertion  
- **Currency**: The ERC20 token used for rewards and fees (must be DVM-approved)  
- **Bond**: The stake amount backing the assertion's accuracy  

#### Step 2: Dispute Window
A predefined "liveness period" begins, during which Disputers can challenge the assertion.

Disputers may use their own off-chain price feeds and methodologies to verify the assertion.
If no disputes occur within this period, the assertion is presumed correct.


#### Step 3: Dispute Resolution
**If disputed:**

The assertion is forwarded to the Data Verification Mechanism for arbitration.

**If undisputed:**

The assertion is treated as valid after the liveness period ends.

**<u>Note: </u>**
 
 For the current implementation, the resolution is initiated by a set **<u>trusted entities</u>**. 