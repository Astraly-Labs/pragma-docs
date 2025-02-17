---
id: risks
title: Risks
sidebar_position: 4
---

---

Pragma offers pricing for a wide range of assets, both onchain and offchain, for developers to utilize in their applications. When integrating, developers should be aware of the varying risk levels associated with different feeds. Additionally, by integrating Pragma, you agree to our [terms and conditions](https://www.pragma.build/terms).

## Market Risks

Our data publishers carefully select and use the best liquidity sources for each supported asset. However, inherent risks beyond the control of data publishers can affect pricing due to market manipulation. This is particularly true for long-tail assets where liquidity is provided by only a few actors, making market manipulation easier if they cease operations. Market manipulation can also occur with more established assets.

Developers integrating with Pragma should thoroughly understand these risks and conduct back-testing of every integration using Pragma's available historical data. To assist in this process, we've developed a risk assessment system for each asset supported by the oracle. While this system is for informational purposes only, it should be used in conjunction with thorough testing before implementation.

Our market risk system categorizes assets into the following risk levels:

- (L) Low risk: Assets with a high number of publishers and a high number of different sources. The volume is high, and the probabilities of market manipulation are low as a result.
- (M) Moderate risk: These assets may possess characteristics that complicate accurate valuation or expose them to potential fluctuations, which could be problematic in certain scenarios. Although the feed structure is robust and decentralized, these assets carry heightened market-related risks. The concentration of liquidity in a single source or shifting market dynamics may contribute to this moderate level of risk.
- (H) High risk: This asset typically displays an increased intensity of risk factors described in the "Moderate risk" category, or presents unique challenges that render its market price less predictable or stable. By utilizing an High risk data feed, you confirm your awareness of the associated risks and accept full responsibility for monitoring and managing these risks independently.
- (D) Depreciating: You shouldn't use this feed that we're depreciating.

Check the risks of the assets we're supporting on the integration page.

## Integration risks

We're passionate about Pragma and eager to assist you with integrating our oracle. However, it's crucial to have a thorough process for evaluating the security of the integration. All code must be rigorously tested and audited, particularly:

- The imports used to integrate the oracle
- The code that interacts with the oracle
- The logic that leverages the oracle's data

We'd be happy to introduce you to top-tier auditors who can help ensure the security and reliability of your integration. This step is essential for maintaining the integrity of your project and maximizing the benefits of using Pragma.
