---
id: build-your-feed-id
title: Build your feed id 
sidebar_position: 2
---

---

# Build Your Feed ID

To use Pragma V2, you first need to construct your feed ID based on the specific data you require. The feed ID is a packed encoding of the asset class, feed type, feed variant, and pair ID.

## Asset Class

The first two bytes of the feed ID represent the asset class. Below is a list of available asset classes. More will be added based on demand.

| Asset Class | Encoding |
|-------------|----------|
| CRYPTO      | 0x0000   |

## Feed Type

The following byte is reserved for the feed type. Currently, only SPOT is supported, but additional feed types are planned.

| Feed Type          | Encoding |
|--------------------|----------|
| SPOT               | 0x00     |
| TWAP               | 0x01     |
| REALIZED VOLATILITY| 0x02     |
| OPTIONS            | 0x03     |
| PERP               | 0x04     |

## Feed Type Variant

The next byte specifies the feed type variant.

| Feed Type Variant | Encoding |
|-------------------|----------|
| UNIQUE            | 0x00     |

## Pair ID

Below is the list of available ticker pairs, along with their pair ID, decimals, mainnet availability, and risk level.

| Ticker     | Pair ID                 | Decimals | Mainnet | Risk |
|------------|--------------------------|----------|---------|------|
| BTC/USD    | 0x4220a04d5043c4         | 8        | ✅      | L    |
| ETH/USD    | 0x454e5f9a0a2c24         | 8        | ✅      | L    |
| WBTC/USD   | 0x572f26b85070a4e4       | 8        | ✅      | M    |
| WBTC/BTC   | 0x572f26b850542743       | 8        | ✅      | M    |
| BTC/EUR    | 0x42209c98c4d6d2         | 8        | ✅      | L    |
| WSTETH/USD | 0x59b5ad29d7e28e80e4484  | 8        | ✅      | M    |
| LORDS/USD  | 0x4f080d2de3cfebdbe4c    | 8        | ✅      | H    |
| UNI/USD    | 0x5544b51e220f54         | 8        | ✅      | M    |
| STRK/USD   | 0x537b7d79bbab0c64       | 8        | ✅      | L    |
| ZEND/USD   | 0x5a5565c82ebcf69c       | 8        | ✅      | H    |
| NSTR/USD   | 0x4e67c5a3a95b9c14       | 8        | ✅      | H    |
| EKUBO/USD  | 0x477a0c2f264f56ce94     | 8        | ✅      | H    |
| USDT/USD   | 0x55691d82482b9414       | 6        | ✅      | L    |
| DAI/USD    | 0x44322ef3fbf2d4         | 8        | ✅      | M    |
| USDC/USD   | 0x55691d7069d067f4       | 6        | ✅      | L    |
| LUSD/USD   | 0x4c820c85d853c504       | 8        | ✅      | H    |

## Example

To retrieve the SPOT MEDIAN UNIQUE feed for BTC/USD, the corresponding feed ID would be:  
`0x000000000000000000000000000000000000000000000000004220a04d5043c4`