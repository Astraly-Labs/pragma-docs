---
id: publishing-data
title: Publishing Data
sidebar_position: 3
---

---

_Estimated Time_: A few hours to a day depending on your underlying data infrastructure.

_SDK Version_: This walkthrough is only valid for the SDK versions `>=2.0.0`.

### 1. Account Setup

We highly recommend using keystores instead of plain private keys for security.

```bash
starkli signer keystore new /path/to/key.json
```

```bash
export STARKNET_KEYSTORE="/path/to/key.json"
```

```bash
starkli account oz init /path/to/account.json
```

```bash
starkli account deploy /path/to/account.json
```

For more info you can look up here [starkli](https://book.starkli.rs/tutorials/starkli-101#starkli-101).

:::note

Once you have your account deployed, send it to us for registration.

:::

#### 2. Publish on API

Install the SDK in your virtual environment

```bash
pip install pragma-sdk
```

If you're willing to publish on the [Pragma API](https://blog.pragma.build/pragma-empowers-starknet-sequencer-with-the-launch-of-the-api/) :

You will have to specify an `API_KEY` and an `API_URL`.
Currently the only way to get an API key is for us to give it to you, so please let us know if you need it!

There are 2 environments :

- dev: `https://api.dev.pragma.build/node` (default)
- prod: `https://api.prod.pragma.build/node`

```python
import asyncio
import logging
import os
import time
from typing import List

from pragma_sdk.common.types.pair import Pair
from pragma_sdk.common.types.entry import Entry, SpotEntry, FutureEntry
from pragma_sdk.onchain.client import PragmaOnChainClient


logger = logging.getLogger(__name__)

# You can fetch your data using any strategy or libraries you want
def fetch_entries(pairs: List[Pair], *args, **kwargs) -> List[Entry]:
    entries: List[Entry] = []

    for pair in pairs:
        entries.append(
            SpotEntry(
                timestamp=int(time.time()),
                source="MY_SOURCE",
                publisher="MY_PUBLISHER",
                pair_id=pair.id,
                price=10 * 10 ** pair.decimals(),  # shifted 10 ** decimals
                volume=0,
            )
        )
        entries.append(
            FutureEntry(
                timestamp=int(time.time()),
                source="MY_SOURCE",
                publisher="MY_PUBLISHER",
                pair_id=pair.id,
                price=10 * 10 ** pair.decimals(),  # shifted 10 ** decimals
                expiry_timestamp=1693275381,  # Set to 0 for perpetual contracts
                volume=0,
            )
        )

    return entries


async def publish_all(pairs: List[Pair]):
    # We get the keystore password and address of the account deployed in step 1.
    keystore_password = int(os.environ.get("PUBLISHER_KEYSTORE_PASSWORD"), 0)
    publisher_address = int(os.environ.get("PUBLISHER_ADDRESS"), 0)

    publisher_client = PragmaAPIClient(
        account_private_key=("path/to/keystore", keystore_password),
        account_contract_address=PUBLISHER_ADDRESS,
        api_url=API_URL, # dev or prod url
        api_key=API_KEY, # the api key that you received
    )

    # Use your own custom logic
    _entries = fetch_entries(pairs)
    await publisher_client.publish_entries(_entries)

    logger.info("Publishing the following entries:")
    for entry in _entries:
        logger.info(entry, logger=logger)


PAIRS_TO_PUBLISH = [
    Pair.from_tickers("ETH", "USD"),
    Pair.from_tickers("BTC", "USD"),
    Pair.from_tickers("WBTC", "USD"),
    ... # more pairs
]

if __name__ == "__main__":
    asyncio.run(publish_all(PAIRS_TO_PUBLISH))

```

:::warning

To publish on the API, same as onchain you will need to be whitelisted.
We have a secure system where you will have a master key and an active publishing key that lets you rotate the active key in case it's compromised.

:::

### 3. Deploy

You can deploy it as you wish, we support latency as low as 200ms. It will depend on the number of entries you are publishing.

Also, please follow the list of supported assets as possible.

Thank you for building with Pragma 🧩


### Troubleshooting

To display more logs, you can add the following snippet to your script.

```python
# Configure logging at the start of your script
logging.basicConfig(
    level=logging.DEBUG,  # Set to DEBUG to see all debug messages
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)

# If you want to only see debug logs from the pragma_sdk
logging.getLogger("pragma_sdk").setLevel(logging.DEBUG)
```