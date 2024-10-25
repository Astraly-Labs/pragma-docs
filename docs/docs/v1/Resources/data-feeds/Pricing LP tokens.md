---
id: pricing-lp-tokens
title: Pricing LP tokens
sidebar_position: 3
---

---

:::info Recently Added
This feature was added in the latest release
:::


In partnership with 🌹 [Nostra](https://nostra.finance/), we recently launched new pricers for liquidity pools.


## Pricing

After registering a liquidity pool, the system automatically monitors:
- Total supply of LP tokens
- Token reserves for both assets in the pool

These values are periodically queried from the pool contract. When you call the `get_data_entries` function with the pool address, the system:
1. Calculates the median values over the last 30 minutes for both total supply and reserves
2. Computes the LP token price using these median values
The formula used to compute the LP price is the following: 

<div>
  <img width="100%" height="100%" src="/img/flowchart/LP_price_formula.webp" alt="flowchart contracts" />
</div>

## Integration

Below is an simple code snippet which details the process to retrieve a LP price for a given registered pool contract.


```rust
use pragma_lib::abi::{IPragmaABIDispatcher, IPragmaABIDispatcherTrait};
use pragma_lib::types::{AggregationMode, DataType, PragmaPricesResponse};
use starknet::ContractAddress;
use starknet::contract_address::contract_address_const;

// felt252 conversion of a given pool address. The pool must be registered first.
const POOL_ADDRESS: felt252 = 740078551671935829004187031909236611599308432587586965379905724271919270269; 

fn get_lp_price(oracle_address: ContractAddress, asset : DataType) -> u128  {
    let oracle_dispatcher = IPragmaABIDispatcher{contract_address : oracle_address};
    let output : PragmaPricesResponse= oracle_dispatcher.get_data_entries(asset).get(0);
    return output.price;
}

// USAGE
let oracle_address : ContractAddress = contract_address_const::<0x06df335982dddce41008e4c03f2546fa27276567b5274c7d0c1262f3c2b5d167>();
let price = get_lp_price(oracle_address, DataType::GenericEntry(POOL_ADDRESS));
```

## Supported Pools

| Name      | Address                                                            | Decimals | Mainnet | Type  | Risk |
| --------- | ------------------------------------------------------------------ | -------- | ------- | ----- | ---- |
| USDC/USDT | 0x00c318445d5a5096e2ad086452d5c97f65a9d28cafe343345e0fa70da0841295 | 18       | ✅       | Degen | L    |
| STRK/ETH  | 0x01a2de9f2895ac4e6cb80c11ecc07ce8062a4ae883f64cb2b1dc6724b85e897d | 18       | ✅       | Degen | L    |
| STRK/USDC | 0x042543c7d220465bd3f8f42314b51f4f3a61d58de3770523b281da61dbf27c8a | 18       | ✅       | Degen | L    |
| ETH/USDC  | 0x05e03162008d76cf645fe53c6c13a7a5fce745e8991c6ffe94400d60e44c210a | 18       | ✅       | Degen | L    |
| WBTC/ETH  | 0x01583919ffd78e87fa28fdf6b6a805fe3ddf52f754a63721dcd4c258211129a6 | 18       | ✅       | Degen | L    |
