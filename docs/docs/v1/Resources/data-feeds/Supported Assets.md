---
id: supported-assets
title: Supported Assets
sidebar_position: 2
---

---

Pragma supports specific pairs that are listed and traded by our data partners. We also support a broader concept of currencies (each pair is a price of the quote currency in terms of the base currency). For pairs not listed, their price can be deduced by "hoping" using pairs that are listed, e.g. we can combine ETH/USD and BTC/USD to get a ETH/BTC feed.

Please read the [risk section](./risks) and contact us before integrating.

## Asset Pairs

The following asset pairs are officially supported by Pragma. More are added every week, so just reach out on [Twitter](https://twitter.com/PragmaOracle) or [Discord](https://discord.com/invite/M9aRZtZHU7) if you have a specific one you need.

The `pair_id` is calculated by utf-8 encoding the uppercased string (e.g. `str_to_felt("BTC/USD")`) and used to refer to specific feeds on-chain.

### Spot

| Ticker     | Pair Id                  | Decimals | Mainnet | Risk |
| ---------- | ------------------------ | -------- | ------- | ---- |
| BTC/USD    | 18669995996566340        | 8        | ✅      | L    |
| ETH/USD    | 19514442401534788        | 8        | ✅      | L    |
| WBTC/USD   | 6287680677296296772      | 8        | ✅      | M    |
| WBTC/BTC   | 6287680677295051843      | 8        | ✅      | M    |
| BTC/EUR    | 18669995995518290        | 8        | ✅      | L    |
| WSTETH/USD | 412383036120118613857092 | 8        | ✅      | M    |
| LORDS/USD  | 1407668255603079598916   | 8        | ✅      | H    |
| UNI/USD    | 24011449254105924        | 8        | ✅      | M    |
| STRK/USD   | 6004514686061859652      | 8        | ✅      | L    |
| ZEND/USD   | 6504691291565413188      | 8        | ✅      | H    |
| NSTR/USD   | 5643947469983535940      | 8        | ✅      | H    |
| EKUBO/USD  | 1278253658919688033092   | 8        | ✅      | H    |
| XSTRK/USD  | 1629317993172502401860   | 8        | ✅      | H    |
| KSTRK/USD  | 1389510320214278230852   | 8        | ✅      | H    |
| SSTRK/USD  | 1537084272803954643780   | 8        | ✅      | H    |
| BROTHER/USDPLUS  | 344361035359747530676741291142567251   | 18        | ✅      | H    |

### Future

| Ticker   | Pair Id             | Decimals | Mainnet | Risk |
| -------- | ------------------- | -------- | ------- | ---- |
| BTC/USD  | 18669995996566340   | 8        | ✅      | D    |
| ETH/USD  | 19514442401534788   | 8        | ✅      | D    |
| BTC/USDT | 4779518975120983124 | 6        | ✅      | D    |
| ETH/USDT | 4995697254792905812 | 6        | ✅      | D    |

### Stablecoins

| Ticker   | Pair Id             | Decimals | Mainnet | Risk |
| -------- | ------------------- | -------- | ------- | ---- |
| USDT/USD | 6148333044652921668 | 6        | ✅      | L    |
| DAI/USD  | 19212080998863684   | 8        | ✅      | M    |
| USDC/USD | 6148332971638477636 | 6        | ✅      | L    |
| LUSD/USD | 5500394072219931460 | 8        | ✅      | H    |

## Currencies & Rebasing

If you want the price of one asset that Pragma lists in the price of another asset also listed (e.g. the price of BTC/ETH), you can simply get the result by calling the `get_data_with_USD_hop` endpoint. In that case, the result will have as many decimals as the base asset you are requesting, e.g. for BTC/ETH it would be 18 decimals because the base unit of ETH is wei where 10^18 wei = 1 ETH.

### Abstract Currencies

Abstract currencies are not tracking a specific token but rather a broader concept or fiat currency. E.g. there is a difference between the ETH/USD price in the abstract and the ETH/USDC price that can be had in a specific AMM pool.

:::note

USDPLUS is exactly the same as USD but with 18 decimals to account for assets with very low price such as memecoins.

:::

| Currency | Currency Id | Decimals | Mainnet | Risk |
| -------- | ----------- | -------- | ------- | ---- |
| USD      | 5591876     | 8        | ✅      | L    |
| USDPLUS      | 24016925890467155     | 18        | ✅      | M    |
| BTC      | 4346947     | 8        | ✅      | L    |
| EUR      | 4543826     | 8        | ✅      | M    |
| FIXEDRESERVED      | 5568670494291182059991831299396     | 18        | ✅      | L    |

### Concrete Currencies

These are specific tokens that exist as on-chain representations.

| Currency | Currency Id | Decimals | Starknet address Mainnet                                           | Ethereum address Mainnet                   | Starknet address Testnet                                           |
| -------- | ----------- | -------- | ------------------------------------------------------------------ | ------------------------------------------ | ------------------------------------------------------------------ |
| BTC      | 4346947     | 8        | 0x03fe2b97c1fd336e750087d68b9b867997fd64a2661ff3ca5a7c771641e8e7ac | 0x2260fac5e5542a773aa44fbcfedf7c193bc2c599 | 0x12d537dc323c439dc65c976fad242d5610d27cfb5f31689a0a319b8be7f3d56  |
| ETH      | 4543560     | 18       | 0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7 | 0x0000000000000000000000000000000000000000 | 0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7 |
| USDC     | 1431520323  | 6        | 0x053c91253bc9682c04929ca02ed00b3e423f6710d2ee7e0d5ebb06f3ecf368a8 | 0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48 | 0x001d5b64feabc8ac7c839753994f469704c6fabdd45c8fe6d26ed57b5eb79057 |
| USDT     | 1431520340  | 6        | 0x068f5c6a61780768455de69077e07e89787839bf8166decfbf92b645209c0fb8 | 0xdac17f958d2ee523a2206206994597c13d831ec7 | 0x386e8d061177f19b3b485c20e31137e6f6bc497cc635ccdfcab96fadf5add6a  |
| DAI      | 4473161     | 18       | 0x001108cdbe5d82737b9057590adaf97d34e74b5452f0628161d237746b6fe69e | 0x6B175474E89094C44Da98b954EedeAC495271d0F | 0x0278f24c3e74cbf7a375ec099df306289beb0605a346277d200b791a7f811a19 |


### Fixed Price

We have introduced a fixed price pair `FIXEDRESERVED/USD` for consumers who want to have a fixed rate of 1$.
Since this price is not directly available through the live data retrieval function (`get_data`), you must retrieve the price using the `calculate_twap` method from the `summary_stats` contract.
To implement the fixed price, you can use the following Cairo code. The resulting fixed price will have **18 decimals**.


```rust
use starknet::{ContractAddress, contract_address_const};
use pragma_lib::abi::{
    ISummaryStatsABIDispatcher, ISummaryStatsABIDispatcherTrait
};
use pragma_lib::types::{AggregationMode, DataType};


fn get_fixed_price() -> u128 {
    // Summary stats contract address
    let SUMMARY_STATS_ADDRESS: ContractAddress = contract_address_const::<0x49eefafae944d07744d07cc72a5bf14728a6fb463c3eae5bca13552f5d455fd>();

    // Pair id 
    let pair_id = 23917257655180781648846825458055798674244;  // 'FIXEDRESERVED/USD' as felt
    let start_time = 1734533205; // NOT TO BE MODIFIED, corresponds to the timestamp where we set the checkpoint
    let end_tick = starknet::get_block_timestamp();
    let time = end_tick - start_time;
    let summary_dispatcher = ISummaryStatsABIDispatcher { contract_address: SUMMARY_STATS_ADDRESS å};
    let (fixed_price, _) = summary_dispatcher.calculate_twap(
        DataType::SpotEntry(pair_id),
        AggregationMode::Median,
        time, // duration
        start_time, // beginning of the twap
    );
    return fixed_price; // Will return the fixed price with 18 decimals
}
```