---
id: consume-off-data
title: Consuming Off-Chain Data
sidebar_position: 3
---

# Consuming Off-Chain Data

Pragma provides a websocket endpoint for accessing real-time off-chain data, crucial for developing decentralized applications (dApps) that require continuous updates. This off-chain data can be later published to compatible blockchains, such as [StarkEx](https://starkware.co/starkex/), for verification.

For detailed information on supported assets, please refer to our [Supported Assets](./Supported%20Assets.md) page.

## Connection

To start consuming data, connect to the **PragmAPI** websocket endpoint:

```
/node/v1/data/subscribe
```

Sending a request to this endpoint establishes a channel to receive real-time data updates every 500 milliseconds.

## Subscribing

By default, no asset pairs are subscribed. To subscribe to specific pairs, send a message formatted as follows:

```json
{
  "type": "subscribe",
  "pairs": ["BTC/USD", "ETH/USD:MARK"]
}
```

The server will confirm your subscription with a response like this:

```json
{
  "type": "subscribe",
  // the pairs you are currently subscribed to, here we were already
  // subscribed to SOL/USD
  "pairs": ["BTC/USD", "ETH/USD:MARK", "SOL/USD"]
}
```

We currently support two types of subscriptions:

#### Index prices

Median price for spot markets across supported exchanges.

**By default, subscriptions are for index prices**.

It means subscribing to a pair without specifying the type will subscribe to the index price. For example, to subscribe to the index price of BTC/USD, use `BTC/USD`.

#### Perpetual (Mark) Index prices

The perpetual index price is the median perp price across supported exchanges.

To subscribe to a specific mark price, append `:MARK` to the pair name. For example, to subscribe to the perpetual index price of ETH/USD, use `ETH/USD:MARK`.

**For assets quoted in a stablecoin, we compute as follow**:

1. Determine the median perp price of the asset quoted in the stablecoin.
2. Determine the median spot price of the stablecoin in USD.
3. Divide the median perp price by the median spot price of the stablecoin in USD.

**For assets quoted in USD**:

Determine the median perp price of the asset quoted in USD.

## Unsubscribing

To unsubscribe from specific pairs, send a message formatted as follows:

```json
{
  "type": "unsubscribe",
  "pairs": ["BTC/USD"]
}
```

The server will confirm your unsubscription with a response like this:

```json
{
  "type": "unsubscribe",
  // the pairs you are currently subscribed to
  "pairs": ["ETH/USD:MARK"]
}
```

## Response Format

Subscribed data will be provided in the following JSON format for each asset pair:

```json
{
  "global_asset_id": "0x12345",
  "median_price": "10000000000000001",
  "signed_prices": [
    {
      "oracle_asset_id": "0x12345000000000ABCDEF",
      "oracle_price": "1000000000000000000",
      "signing_key": "0x1234567890ABCDEF",
      "timestamp": "1234567"
    },
    {
      "oracle_asset_id": "0x12345000000000FEDCBA",
      "oracle_price": "1000000000000000002",
      "signing_key": "0xFEDCBA0987654321",
      "timestamp": "1234567"
    }
  ]
}
```

**Field Descriptions**:

- `global_asset_id`: Unique identifier for the asset.
- `median_price`: The median price of the asset.
- `signed_prices`: Array of price details from different oracles:
  - `oracle_asset_id`: Unique identifier from the oracle.
  - `oracle_price`: Price provided by the oracle.
  - `signing_key`: Key used by the oracle to sign the price.
  - `timestamp`: Time when the price was recorded.
