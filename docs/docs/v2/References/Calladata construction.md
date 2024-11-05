---
id: calldata-construction
title: Calldata construction
sidebar_position: 1
---

---


### Build an update calldata

This section outlines the **calldata** format requirements for valid updates. The complete calldata can be constructed by concatenating all bytes in the specified order below.


| Field                     |  Size             | Recommended value |
|---------------------------|:-------------------:|:-------------------:|
| Major version             |  uint8            |  1                |
| Minor version             |  uint8            |  0                |
| Trailing Header Size      |  uint8            |  0                |
| Hyperlane message length  |   uint16          |  length          |

Then, comes the **hyperlane message**: 

| Field                     |  Size             | Recommended value |
|---------------------------|:-----------------:|:-----------------:|
| Hyperlane version         |  uint8            |  1                |
| Signatures                | Signatures         |   -               |
| Nonce                      |  uint32           |  -                |
| Emitter chain id          |   uint32          | [chain id ](/v2/Price%20Feeds/supported-assets-chains) |
| Emitter address           | bytes32(starknet address) |  -        |
| Payload                   | Payload           |       -           |

**Signatures** are packed encoded, starting with a single byte indicating the total number of signatures(uint8). Each signature then consists of:

 - one-byte index (mapping the signature to its corresponding validator in the Hyperlane contract)
 - 32-byte r-component
 - 32-byte s-component
 - one-byte v-component

Finally the **payload**: 

| Field                     |  Size             | Recommended value |
|---------------------------|:-------------------:|:---------------:|
| Merkle tree hook address  | bytes32           |   -               |
| Checkpoint root           |  bytes32          |   -               |
| Checkpoint index          | uint32            |   -               |
| Message id                | uint256           |  -                |
| Num updates               |  uint8            |  -                |
| Update Size               |  uint16           |  length          |
| Proof length              |   uint16          |  length          |
| Proof                     | -                 |  -                |
| Update data               | UpdateData        | -                 |
| Feed id                   | bytes32           |   -               | 
| Publish time              | uint64            |  -            |

**UpdateData** represents the packed encoding `abi.encodePacked` of the desired feed type, which could be SpotMedian, TWAP, Options, Perpetuals, or other supported types.
For applications, the process of building calldata is simplified; it can be retrieving through the `get_calldata` theoros endpoint. 