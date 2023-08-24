---
id: Consumming Data Feed
title: Consumming Data Feed
sidebar_position: 1
---

---

You can get started with Pragma in just a few minutes. This guide will walk you through the process of consuming data from Pragma's oracle network.
Here is the code for getting the price of BTC/USD using the Pragma oracle.



```rust
use pragma::oracle::oracle::{IOracleABIDispatcher, IOracleABIDispatcherTrait};
use pragma::entry::structs::{AggregationMode, DataType, PragmaPricesResponse};
use starknet::ContractAddress;
use starknet::contract_address::contract_address_const;



const KEY :felt252 = 18669995996566340; // felt252 conversion of "BTC/USD", can also write const KEY : felt252 = 'BTC/USD';

fn get_asset_price_median(oracle_address: ContractAddress, asset : DataType) -> u256  { 
    let oracle_dispatcher = IOracleABIDispatcher{contract_address : oracle_address};
    let output : PragmaPricesResponse= oracle_dispatcher.get_data(asset, AggregationMode::Median(()));
    return output.price;
}

//USAGE

let oracle_address : ContractAddress = contract_address_const::<0x000000000000000000000>();
let price = get_asset_price_median(oracle_address, DataType::SpotEntry(KEY));


```

Let's break down the code above:

```rust
use pragma::oracle::oracle::{IOracleABIDispatcher, IOracleABIDispatcherTrait};
```

This line imports the dispatcher corresponding to the oracle contract interface and its associated trait. The dispatcher enables the invocation of interface-defined functions. For deeper insights into the dispatcher and its trait, consult the [cairo book](https://book.cairo-lang.org/ch99-02-02-contract-dispatcher-library-dispatcher-and-system-calls.html).


```rust 
use pragma::entry::structs::{AggregationMode, DataType, PragmaPricesResponse};
```

Allows the imports of the required structures/enums for executing the function call. These three are the main structures/enums used in most functions of the Pragma oracle contract. The `AggregationMode` enum is used to specify the aggregation mode of the data, the `DataType` enum is used to specify the type of data to be retrieved, and the `PragmaPricesResponse` structure is used to store the response to the function call.

```rust
enum DataType {
    SpotEntry: felt252,
    FutureEntry: (felt252, u64),
    GenericEntry: felt252,
}

struct PragmaPricesResponse {
    price: u256,
    decimals: u32,
    last_updated_timestamp: u64,
    num_sources_aggregated: u32,
    expiration_timestamp: Option<u64>,
}

#[derive(Serde, Drop, Copy)]
enum AggregationMode {
    Median: (),
    Mean: (),
}
```

Then we enter the key for which we want to retreive the data feeds. The key is a felt252, and can be converted from a string using the `felt252` conversion. The key is used to identify the data feed we want to retrieve. In this case, we are retrieving the price of BTC/USD.

```rust
const KEY : felt252 = 'BTC/USD';
```

Then we define the function that will be used to retrieve the data. The function takes as input the address of the oracle contract(see [here](./docs/Resources/Cairo%201/data-feeds/consuming-data) for the contract address), and the data type of the data feed we want to retrieve. The function returns the price of the data feed.

```rust
fn get_asset_price_median(oracle_address: ContractAddress, asset : DataType) -> u256  { 
    let oracle_dispatcher = IOracleABIDispatcher{contract_address : oracle_address};
    let output : PragmaPricesResponse= oracle_dispatcher.get_data(asset, AggregationMode::Median(()));
    return output.price;
}
```

