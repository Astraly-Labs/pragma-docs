---
id: getting-started
title: Getting Started
sidebar_position: 2
---

## Key Features

* Easy-to-use Rust SDK
* Supports both mainnet and testnet environments
* Flexible block selection for data retrieval

## Usage

To start using the Pragma Consumer SDK in your Rust project:

### 1. Add the SDK to your Cargo.toml:

```toml
[dependencies]
pragma-consumer = "0.1.0"
```


### 2. Initialize the Consumer in your code:

```rust
let consumer = PragmaConsumerBuilder::new()
    .on_mainnet()
    .with_http(api_config)
    .await
    .unwrap();
```

### 3. Fetch Merkle Feed data

```rust
let instrument = instrument!("BTC-16AUG24-52000-P");
let result = consumer
    .get_merkle_feed_calldata(&instrument, None)
    .await
    .unwrap();
```

### 4. Use the returned data with the Pragma Oracle contract.

TODO.

## Next steps

Check out our examples to see the SDK in action and learn more about integrating Pragma's Merkle Feeds into your project.
For more detailed technical information, please refer to our full documentation.

