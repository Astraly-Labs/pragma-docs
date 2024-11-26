---
id: supported-assets
title: Supported Assets
sidebar_position: 2
---

## Starkex Asset

The following asset pairs are officially supported by Pragma. More are added every week, so just reach out on [Twitter](https://twitter.com/PragmaOracle) or [Telegram](https://t.me/+Xri-uUMpWXI3ZmRk) if you have a specific one you need.

The `pair_id` is calculated by UTF-8 encoding the uppercased string (e.g., `str_to_felt("BTCUSD")`) and used to refer to specific feeds.

### Spot

| Ticker        | Starkex Pair Id          | Decimals | Risk |
| ------------- | ------------------------ | -------- | ---- |
| EUR/USD       | 455552555344             | 8        | M    |
| BTC/USD       | 425443555344             | 8        | L    |
| ETH/USD       | 455448555344             | 8        | L    |
| ETH/STRK      | 4554485354524B           | 8        | M    |
| SOL/USD       | 534F4C555344             | 8        | L    |
| BNB/USD       | 424E42555344             | 8        | M    |
| LTC/USD       | 4C5443555344             | 8        | M    |
| LINK/USD      | 4C494E4B555344           | 8        | M    |
| AVAX/USD      | 41564158555344           | 8        | M    |
| MATIC/USD     | 4D41544943555344         | 8        | M    |
| XRP/USD       | 585250555344             | 8        | M    |
| DOGE/USD      | 444F4745555344           | 8        | M    |
| 1000PEPE/USD  | 3130303050455045555344   | 8        | M    |
| AAVE/USD      | 41415645555344           | 8        | M    |
| TRX/USD       | 545258555344             | 8        | M    |
| SUI/USD       | 535549555344             | 8        | M    |
| WIF/USD       | 574946555344             | 8        | M    |
| TIA/USD       | 544941555344             | 8        | M    |
| TON/USD       | 544F4E555344             | 8        | M    |
| LDO/USD       | 4C444F555344             | 8        | M    |
| ARB/USD       | 415242555344             | 8        | M    |
| OP/USD        | 4F50555344               | 8        | M    |
| ORDI/USD      | 4F524449555344           | 8        | M    |
| JTO/USD       | 4A544F555344             | 8        | M    |
| JUP/USD       | 4A5550555344             | 8        | M    |
| UNI/USD       | 554E49555344             | 8        | M    |
| OKB/USD       | 4F4B42555344             | 8        | M    |
| ATOM/USD      | 41544F4D555344           | 8        | M    |
| NEAR/USD      | 4E454152555344           | 8        | M    |
| 1000SATS/USD  | 3130303053415453555344   | 8        | M    |
| ONDO/USD      | 4F4E444F555344           | 8        | M    |
| STRK/USD      | 5354524B555344           | 8        | M    |
| BCH/USD       | 424348555344             | 8        | M    |
| WBTC/USD      | 574254435553440          | 8        | M    |
| WSTETH/USD    | 57535445544855534440     | 8        | M    |
| STETH/USD     | 535445544855534440       | 8        | M    |
| NSTR/USD      | 4E535452555344           | 8        | M    |
| LORDS/USD     | 4C4F524453555344         | 8        | M    |
| ZEND/USD      | 5A454E44555344           | 8        | M    |
| EKUBO/USD     | 454B55424F555344         | 8        | M    |
| SHIB/USD      | 53484942555344           | 8        | M    |
| CRV/USD       | 435256555344             | 8        | M    |
| BROTHER/USD   | 42524F54484552555344     | 8        | M    |
| POPCAT/USD    | 504F50434154555344       | 8        | M    |
| SEI/USD       | 534549555344             | 8        | M    |
| FTM/USD       | 46544D555344             | 8        | M    |
| GOAT/USD      | 474F4154555344           | 8        | M    |
| MOODENG/USD   | 4D4F4F44454E47555344     | 8        | M    |
| BONK/USD      | 424F4E4B555344           | 8        | M    |

### Perpetuals

| Ticker        | Starkex Pair Id          | Decimals | Risk |
| ------------- | ------------------------ | -------- | ---- |
| BTC/USDT      | 42544355534454           | 6        | L    |
| ETH/USDT      | 45544855534454           | 6        | L    |
| SOL/USDT      | 534F4C55534454           | 6        | L    |
| BNB/USDT      | 424E4255534454           | 6        | M    |
| LTC/USDT      | 4C544355534454           | 6        | M    |
| LINK/USDT     | 4C494E4B55534454         | 6        | M    |
| AVAX/USDT     | 4156415855534454         | 6        | M    |
| MATIC/USDT    | 4D4154494355534454       | 6        | M    |
| XRP/USDT      | 58525055534454           | 6        | M    |
| DOGE/USDT     | 444F474555534454         | 6        | M    |
| 1000PEPE/USDT | 313030305045504555534454 | 6        | M    |
| AAVE/USDT     | 4141564555534454         | 6        | M    |
| TRX/USDT      | 54525855534454           | 6        | M    |
| SUI/USDT      | 53554955534454           | 6        | M    |
| WIF/USDT      | 57494655534454           | 6        | M    |
| TIA/USDT      | 54494155534454           | 6        | M    |
| TON/USDT      | 544F4E55534454           | 6        | M    |
| LDO/USDT      | 4C444F55534454           | 6        | M    |
| ARB/USDT      | 41524255534454           | 6        | M    |
| OP/USDT       | 4F5055534454             | 6        | M    |
| ORDI/USDT     | 4F52444955534454         | 6        | M    |
| JTO/USDT      | 4A544F55534454           | 6        | M    |
| JUP/USDT      | 4A555055534454           | 6        | M    |
| UNI/USDT      | 554E4955534454           | 6        | M    |
| OKB/USDT      | 4F4B4255534454           | 6        | M    |
| ATOM/USDT     | 41544F4D55534454         | 6        | M    |
| NEAR/USDT     | 4E45415255534454         | 6        | M    |
| 1000SATS/USDT | 313030305341545355534454 | 6        | M    |
| ONDO/USDT     | 4F4E444F55534454         | 6        | M    |
| STRK/USDT     | 5354524B55534454         | 6        | M    |
| BCH/USDT      | 42434855534454           | 6        | M    |
| SHIB/USDT     | 5348494255534454         | 6        | M    |
| CRV/USDT      | 43525655534454           | 6        | M    |
| POPCAT/USDT   | 504F5043415455534454     | 6        | M    |
| SEI/USDT      | 53454955534454           | 6        | M    |
| FTM/USDT      | 46544D55534454           | 6        | M    |
| GOAT/USDT     | 474F415455534454         | 6        | M    |
| MOODENG/USDT  | 4D4F4F44454E4755534454   | 6        | M    |
| BONK/USDT     | 424F4E4B55534454         | 6        | M    |

### Stablecoins

| Ticker   | Starkex Pair Id | Decimals | Risk |
| -------- | --------------- | -------- | ---- |
| USDT/USD | 55534454555344  | 6        | L    |
| DAI/USD  | 444149555344    | 8        | M    |
| USDC/USD | 55534443555344  | 6        | L    |
| LUSD/USD | 4C555344555344  | 8        | H    |

---

**Notes:**

- **Starkex Pair Id Calculation:** The `Starkex Pair Id` is calculated by converting the uppercased ticker (without the `/`) to its hexadecimal representation. For example, `BTCUSD` becomes `425443555344`.

- **Risk Levels:**
  - **L** (Low): Highly liquid assets with stable market conditions.
  - **M** (Medium): Moderately liquid assets with some market volatility.
  - **H** (High): Less liquid assets with higher market volatility.

- **Decimals:** The `Decimals` column indicates the number of decimal places used for price precision.

---
