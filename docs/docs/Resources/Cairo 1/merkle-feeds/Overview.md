---
id: what-are-merkle-feeds
title: What are Merkle Feeds
sidebar_position: 1
---

---

Built in collaboration with [DOPP](https://www.dopp.finance/). Merkle feeds are the most efficient way to get complex financial instruments updated on-demand on Starknet.

The Pragma Consumer SDK is a powerful tool that allows developers to interact with Pragma's Merkle Feed system.
This SDK enables you to fetch option prices and their associated Merkle proofs, which you can then use with the Pragma Oracle contract to access on-chain data.

## A Merkle Feed?

A Merkle Feed is an efficient way to publish and verify large amounts of data on-chain. In Pragma's case, we publish a Merkle root on-chain that represents a tree of option prices for a specific blockchain height. Users can then use our SDK to retrieve prices off-chain and verify their correctness on-chain, creating a secure and efficient "pull oracle" model.

## How It Works

*[Placeholder for an image explaining the Merkle Feed architecture]*

1. Merkle roots are pushed on-chain by Pragma *every* block. The merkle trees are built with data from [Deribit](https://www.deribit.com/) the leading platform for options trading.
2. Data and merkle proofs can be retrieved through REST and WebSocket endpoints or through a rust crate we provide.
3. Data is updated on-demand on-chain upon successful verification of the merkle proof.
