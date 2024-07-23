---
id: merkle-feeds
title: Merkle Feeds
sidebar_position: 6
---

## Merkle Feeds

Built in collaboration with [DOPP](https://www.dopp.finance/). Merkle feeds are the most efficient way to get complex financial instruments updated on-demand on Starknet.

The first use case being options instruments, the flow looks as followed:

1. Merkle roots are pushed on-chain by Pragma *every* block. The merkle trees are built with data from [Deribit](https://www.deribit.com/) the leading platform for options trading.
2. Data and merkle proofs can be retrieved through REST and WebSocket endpoints or through a rust crate we provide.
3. Data is updated on-demand on-chain upon successful verification of the merkle proof.


#### Sample Code

If you are just trying to get started with our TWAP feed, see this self-contained code snippet here. You can find the full Oracle interface specification is available [here](https://github.com/Astraly-Labs/pragma-oracle/blob/main/src/compute_engines/summary_stats/summary_stats.cairo).

```rust

use starknet::ContractAddress;
use pragma_lib::abi::{
    ISummaryStatsABIDispatcher, ISummaryStatsABIDispatcherTrait
};

const SUMMARY_STATS_ADDRESS : ContractAddress  = 0x00000000000000000000;
const OPTIONS_FEED_ID: felt252 = 'DERIBIT_OPTIONS';

fn update_options_feed_data(data: OptionsFeedData, proof: Span<felt252>) {
    let summary_dispatcher = ISummaryStatsABIDispatcher {   
        contract_address: SUMMARY_STATS_ADDRESS
    };
    summary_dispatcher.update_merkle_feed_data(
        OPTIONS_FEED_ID,
        data,
        proof,
    );
}

// USAGE
// `data` and `proof` are retrieved off-chain, see the offchain section.
update_options_feed_data(data, array![000, 111].span());

```

## Technical Specification

### Function: `calculate_twap`


#### Inputs



