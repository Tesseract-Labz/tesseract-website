---
sidebar_position: 1
---

# Facilitator Introduction

The **Tesseract facilitator** is a facilitator according to the [z402](/docs/z402/introduction.md) protocol hosted by Tesseract focused on cutting-edge features and privacy. Let's understand what it can do for you and how it works.

## Why z402 and not x402

x402 is a protocol that enables payments in HTTP requests, the protocol relies on the blockchain and inherits its speed, while z402 works similarly to x402 but with **zero** blockchain-induced delay, it allows for truly instantaneous transactions and it's more secure and decentralized because it runs on audited smart contracts.
z402 is an extension of x402, meaning it has all its features and you can use z402 software and don't experience problems while using the x402 ecosystem.

:::note
z402 doesn't aim to replace x402, but rather to improve it and extend its functionalities. We're working we the x402 team to bring you one feature rich protocol, stay tuned! In the meantime, you can enjoy z402's cutting edge features with Tesseract.
:::

You can discover the why z402 is awesome and its technical details in the [dedicated docs](/docs/z402/introduction.md).

## Why the facilitator

The z402 is a payment protocol that connects two users: the buyer and the seller. In order to follow the protocol the users must use a **z402 client**.

A facilitator is not a client but a software that handles much of the blockchain and protocol specific complexity, so that clients are easier and faster to develop.

It's possible to build a full client using a facilitator and a client SDK, or building it from scratch handling the entire protocol. Moreover a facilitator can be self-hosted or cloud-hosted, the **Tesseract facilitator** is a cloud-hosted facilitator managed by Tesseract with care to reliability and privacy. Since our code is completely open source, you can host it yourself if you wish.

Here is an overview of the available implementation options for developing a z402 client.

| Client Implementation         | Degree of control | Price                    | Maintenance cost                        |
| ----------------------------- | ----------------- | ------------------------ | --------------------------------------- |
| From scratch                  | Full control      | Free                     | Highest (you own all updates and fixes) |
| Self-hosted facilitator + SDK | Higher control    | Free                     | Medium (server upkeep, monitoring)      |
| Tesseract facilitator + SDK   | High control      | < 0.01\$ per transaction | Lowest (Tesseract handles operations)   |

## How it works

A z402 facilitator is a x402 facilitator with some extra features, see the [x402 docs](https://x402.gitbook.io/x402/core-concepts/facilitator) to understand how a x402 facilitator works.

A z402 facilitator has two operative modes:

- **x-mode**: it uses the exact specification of x402, ensuring compatibility.
- **z-mode**: it adds the ability to execute zero seconds delay transactions.

Check the [z402 protocol description](/docs/z402/introduction.md#The-z402-protocol) to know more about these modes.

## Supported networks

At the moment we support the following networks:

- Ethereum: there is no x402 facilitator supporting Ethereum, since Ethereum block time is long (12 seconds) this makes sense only with z402.
- XRP: there is no x402 facilitator supporting XRP, enjoy 0 delay transactions with XRP!
- Solana: faster than any other x402 facilitator and with low gas fees thanks to Solana
- TON: there is no x402 facilitator supporting Ethereum, enjoy instant transactions in TON as well!
- Polkadot: Coming soon!
