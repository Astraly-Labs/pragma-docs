---
id: architecture
title: Architecture
sidebar_position: 2
---

---

The V1 of the Pragma Oracle consists of three smart contracts, that each play a role in making the oracle easy to use and robust.

  <div>
  <img width="100%" height="100%" src="/img/flowchart/flowchart-2.webp" alt="flowchart contracts" />
  </div>

The first is the Publisher Registry, which is the most static. This is designed to be updated extremely infrequently because its state should be permanent (each publisher and their address). This is currently an ownable contract but will become permissionless as Pragma decentralizes.

The second is the Oracle implementation and its proxy, which are also designed to be updated only as frequently as absolutely necessary. This is the contract which protocols use, and the one to which publishers publish. In the background, it coordinates the Publisher Registry and the Oracle contract implementation(s). The implementation contains the logic for storing and aggregating specific key/value data streams.

## Aggregation

<div><img width="100%" height="100%" src="/img/flowchart/publishers.webp" alt="flowchart publisher" border="0"/></div>

Our system incorporates multiple publishers, each responsible for providing data from various sources. To determine the price for a given source, we consider the prices submitted by all these publishers. Our approach involves conducting an initial on-chain aggregation based on the median of these prices. This median value then becomes the established price for that particular source.

This aggregation process is triggered when one of the aggregation functions, as outlined in the 'Consuming Data' section, is called. During this process, users have the flexibility to choose their preferred method of aggregation for the sources. This choice allows them to tailor the final price calculation according to their specific needs or criteria. By utilizing this method of aggregation, we enhance the security of the final price determination, making it less vulnerable to manipulation, as it incorporates a broad and balanced range of data from multiple publishers.

## Explore

We have a fully-fledged explorer available on our [website](https://www.pragma.build/assets).
There you can explore what's happening on and off-chain, who is providing data etc.
If there is any other information you would like to see displayed over there, let us know!

## Security

Our contracts have thoroughly been peer-reviewed by multiple actors in the starknet ecosystem.
They have also undergone a full audit by Nethermind which you can find the report [here](https://github.com/NethermindEth/PublicAuditReports/blob/2b073f2c136cc4e8afe2e135c1be03699b2a7515/NM0147-FINAL_PRAGMA.pdf).

In case you find bugs in our contracts, we have a bug bounty program in place with ImmuneFi, or you can contact us directly at <matthias@pragma.build>

## Deployed Contracts

On Starknet, the contracts are currently deployed at the following addresses:

| Contract           | Testnet                                                                                                              | Mainnet                                                                                                               |
| ------------------ | -------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Publisher Registry | [Sepolia](https://sepolia.voyager.online/contract/0x1b08e27ab436cd491631156da5f3aa7ff04aee1e6ca925eb2ca84397c22b74d) | [Mainnet](https://voyager.online/contract/0x24a55b928496ef83468fdb9a5430fe031ac386b8f62f5c2eb7dd20ef7237415)          |
| Oracle             | [Sepolia](https://sepolia.voyager.online/contract/0x36031daa264c24520b11d93af622c848b2499b66b41d611bac95e13cfca131a) | [Mainnet](https://voyager.online/contract/0x2a85bd616f912537c50a49a4076db02c00b29b2cdc8a197ce92ed1837fa875b#overview) |