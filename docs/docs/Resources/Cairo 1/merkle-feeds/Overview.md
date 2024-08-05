---
id: what-are-merkle-feeds
title: What are Merkle Feeds
sidebar_position: 1
---

---

The Pragma Consumer SDK is a powerful tool that allows developers to interact with Pragma's Merkle Feed system.

This SDK enables you to fetch option prices and their associated Merkle proofs, which you can then use with the Pragma Oracle contract to access on-chain data.

## A Merkle Feed?

A Merkle Feed is an efficient way to publish and verify large amounts of data on-chain. In Pragma's case, we publish a Merkle root on-chain that represents a tree of option prices for a specific blockchain height. Users can then use our SDK to retrieve prices off-chain and verify their correctness on-chain, creating a secure and efficient "pull oracle" model.

## How It Works

*[Placeholder for an image explaining the Merkle Feed architecture]*

1. Pragma publishes a Merkle root on-chain containing option prices.
2. Users use the Consumer SDK to request specific price data.
3. The SDK fetches the data and provides a Merkle proof.
4. Users can verify this data on-chain using the Pragma Oracle contract.
