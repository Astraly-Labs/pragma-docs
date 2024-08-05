---
id: getting-started
title: Getting Started
sidebar_position: 2
---

## Key Features

* Easy-to-use Rust SDK
* Supports both mainnet and testnet environments
* Flexible block selection for data retrieval

## Usage

To start using the Pragma Consumer SDK in your Rust project:

### 1. Add the SDK to your Cargo.toml:

```toml
[dependencies]
pragma-consumer = "0.1.0"
```


### 2. Initialize the Consumer in your code:

```rust
let api_config = ApiConfig {
    base_url: PragmaBaseUrl::Prod,
    api_key: "your_api_key".into(),
};

let consumer = PragmaConsumerBuilder::new()
    .on_mainnet()
    .with_http(api_config)
    .await?;
```

### 3. Fetch Merkle Feed data

```rust
let instrument = instrument!("BTC-16AUG24-52000-P");
let result = consumer
    .get_merkle_feed_calldata(&instrument, None)
    .await?;
```

### 4. Use the returned data with the Pragma Oracle contract.

If you are just trying to get started with our Options Data Feed, see this self-contained code snippet here. You can find the full Oracle interface specification is available [here](https://github.com/Astraly-Labs/pragma-oracle/blob/main/src/compute_engines/summary_stats/summary_stats.cairo).

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
// `data` and `proof` are retrieved off-chain, see the previous section.
update_options_feed_data(data, array![000, 111].span());

```

## Next steps

Check out our [examples](https://github.com/astraly-labs/pragma-node/tree/main/pragma-consumer/examples) to see the SDK in action and learn more about integrating Pragma's Merkle Feeds into your project.

For more detailed technical information, please refer to our [full documentation](https://github.com/astraly-labs/pragma-node/tree/main/pragma-consumer).
