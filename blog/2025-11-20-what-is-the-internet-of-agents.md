---
slug: what-is-the-internet-of-agents
title: What is the Internet of Agents
authors: frollo
tags: [internet of agents, z402, x402]
---

# What is the Internet of Agents

AI agents are playing an increasingly important role in our lives, they're becoming always more capable and autonomous, the **Internet of Agents** is what will make them an organism that is greater than the sum of its parts.

<!-- truncate -->

## History and motivation

Each day millions of internet transactions are carried out, these transactions are done through different UIs and payment processors, there's no standard governing them. But why we would need it? Essentially a standard makes things easier, for developers and for users, moreover it creates a more fair environment, where there are no few "gatekeepers" companies handling the payments and can charge high fees, there's just the protocol and everybody can use it.

It's weird that such a universal human primitive like the payment is not encoded into the internet as a fundamental protocol, this wasn't supposed to be case, in fact, in 1997 in the [specification of HTTP/1.1](https://www.rfc-editor.org/rfc/rfc2068) a `402 - Payment Required` status code was added and kept for "later use". Still today, the 402 status code is considered non standard and there's no internet native payment protocol. But this is about to change.

### Requirements for an internet native payment protocol

We believe that an internet native protocol should have the following characteristics:

1. No protocol fees: the protocol itself should be free to use. There could be some fees due to the technology used to make the transaction possible tho (blockchain for instance).
2. no central control: the protocol shouldn't controlled by any individual or organization with conflicts of interest.
3. integrated with HTTP: the protocol should be implemented in HTTP using the 402 status code, as per the 1997's original spec.
4. transactions have with no minimum (or very low): it must be possible to make subcent transactions.
5. just as fast as the internet: the payment protocol shouldn't introduce any delay due to the protocol itself. When making a transaction as an HTTP request, it should be immediately clear that the transaction is valid, without the need of triggering more network requests.

The first protocol to try tackle these problems was [x402](https://x402.org), it satisfies (debatebly[^1]) all the requirements, except the last: x402 is **not** as fast as the internet, it is as fast as the blockchain it uses. We will later see how **z402** solved the last problem, nevertheless, x402 enabled new interesting use cases, in particular the constitution an **Internet of Agents**.

## Internet of Agents architecture

The expression Internet of Agents (IoA) takes inspiration from the Internet of Things (IoT), that is a network of computers, typically sensors and low power devices, that communicate with each other and share data. The Internet of Agents is similar, it is a network of specialized agents (AIs or humans) that perform complex tasks autonomously by collaborating with each other and paying for the services/goods that they offer.

In such a system, you will have humans, AI and potentially other programs able to run the correct software to pay and build: it's a new kind of economy where AI agents and humans can work together by selling services, on demand access to a content, in many situations it supersedes the subscription model. For example, you could have an AI agent offering a to generate an image for 0.0001\$ or a human asking for 0.10\$ to access an exclusive blog post instead of requiring a full subscription; you can unlock pay-per-use and micropayments natively, without the sellers and buyers having to set up API keys, without a minimum amount and with no funds lock in. More use cases are explored in the [dedicated section](#use-cases).

So, to build such an agent network, you need to equip it with the following:

- Discovery mechanism: agents need to find each other and know what services they offer
- Communication protocol: agents need to have a common communication protocol to start, end and update tasks
- Payment protocol: agents need to pay for the tasks performed by other agents.
- Reputation system (optional): a system to assign and retrieve a score to sellers based on the quality of the output they produce.

Google's [A2A protocol](https://a2a-protocol.org/) seems the emerging protocol for the internet of agents: it offers [Agent Cards](https://a2a-protocol.org/latest/topics/agent-discovery/) for discovery, it has a communication protocol but no payment protocol nor reputation system. It is possible to extend A2A with [A2P](https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol), adding a payment protocol that is also compatible with x402 and z402. Finally, the [EIP 8004](https://eips.ethereum.org/EIPS/eip-8004) improves A2A discovery capabilities and adds a reputation system.

## z402

[z402](/docs/z402/introduction) is an **extension** of x402 that satisfies **all** the [requirements for an internet native payment protocol](#requirements-for-an-internet-native-payment-protocol), in particular it is as fast as the internet, that is doesn't add any delay to an HTTP request with an embedded payment and it doesn't require multiple HTTP requests to validate the payment.
Broadly speaking, z402 uses a smart contract as escrow for the payments and releases the funds only if a valid cryptographic proof of payment is given, the full verification process is done off-chain, allowing to bypass the delay of the underlining blockchain and to perform instant transactions. You can read more how it works in the [docs](/docs/z402/introduction).

### Use cases

Here is a (incomplete) list of use cases of z402, along with a comparison with existing services[^2]:

- On demand content with no minimum limit: Today a popular business model is the subscription business model, we believe it can be overtaken by an on demand business model where a user makes request for a specific content they need not an estensive offering that they will never use, these models might as well coexist.
  - Streaming: Netflix's Standard subscription costs 17,99\$ a month. An alternative streaming service using z402 could offer to pay 0.25\$ to rend a single movie or even charge per minutes watched.
  - Content creator economy: content creators get mainly monetizes through sponsoring, for creators with a smaller public this is difficult to achieve. A simple "tipping service" could be developed to integrate into existing social platforms and be set to have a low minimum (ex. 0.01\$), tipping small creators is now possible. Another notable case is the economy around exclusive, paywalled, content, offered by individual creators, services like OnlyFans charge 20% on all earnings and imposes a minimum PPV (pay per view) fee usually forcing creators to bundle multiple media, an alternative service using z402 could offer much lower rates and a low limit on PPV content (cents)
  - Paywalls: paywalls block access to content and unlock it after paying a subscription, an alternative paywall could use z402 to create a paywall that unlocks after a micropayment
- Pay-per-use: The pay-per-use business model allows to offer on demand service with micropayments, but as of today, it is inherently flawed. This is because of the high fees payment processor take (around 3%) and because users are forced to lock their funds into the platform usually without the possibility to withdraw them, this creates more friction compared to just seamlessly pay for what you need, with no undefined locking time.
  - Cloud resources: a service using z402 could offer cloud resources usage, including GPU and CPU, per hour or per minute at a lower price than competition. Moreover, likely the customers might as well not be humans, but rather AI agents that need compute for their "survival".
  - AI services: OpenAI API users need to pay a minimum of 5\$ in credits, that expire after one year, with no refund of unused credits. An alternative service could leverage z402 to offer no lock in of funds, reducing lost funds and initial friction.
  - Access to a database: a service could use z402 to offer access to a database on demand for a micropayments, instead of asking for a subscription. AI agents can access and pay for only the data they need.
- Agentic payments: This is a new use case. Leveraging protocols like A2A and z402, it's possible to create a network of AI agents doing tasks and selling services, every task can be monetizes seamlessly with z402.
  - Personal agent economy: for most people the smartphone is the gateway to many of their everyday activities, even tho the smartphone interfaces are built to be intuitive it still requires the user to "adapt" to the device. From a UX perspective, AI devices, equipped with speech and video capabilities, are the ultimate interface, because they would work by simply asking them to do whatever pleases you. This will eventually create "personal agents", that are AI agents that know us well as our smartphone knows us today. Differently from your smartphone, an AI agent would be autonomous, so it could do actions on our behalf, including shopping, this opens up a new set of use cases: ads for AI agents, personalized ads delivered through personal agents in the form of speech.
  - AI agent companies: AI agents can cooperate to offer complex services, then sharing the revenue.

### Comparison with other payment methods

Let's compare z402 with other payment methods, including x402, Stipe and PayPal.

#### Pricing and speed[^2]

| Payment Method                        | Typical Fees    | Valid payment | Settlement                        | Chargeback Risk     | Scalability               |
| ------------------------------------- | --------------- | ------------- | --------------------------------- | ------------------- | ------------------------- |
| Credit Card                           | $0.30 + 2.9%    | ~1s           | Days (batch)                      | Yes, up to 120d     | 65k TPS                   |
| PayPal                                | ~3% + fixed fee | ~1s           | Days                              | Yes                 | Unknown                   |
| Stripe                                | 2.9% + 0.30\$   | ~1s           | 1-3 days                          | Yes                 | >13k TPS                  |
| Stripe (Pay with Crypto)              | \>1.5%          | ~1s           | Depends on blockchain             | No – not reversible | Depends on blockchain     |
| Ethereum L1                           | 1–5\$ + gas     | 12 s          | 1–2 min euristic, 13 min finality | No – not reversible | 15–20 TPS                 |
| x402 (Base Flashblocks)               | \<0.001\$       | 200 ms        | 200 ms                            | No – not reversible | Hundreds to thousands TPS |
| z402 (Base Flashblocks) (1k mean[^3]) | \<0.0001\$      | 0 ms          | whenever you want[^4]             | No – not reversible | TPS                       |
| z402 (Ethereum) (1k mean[^3])         | \<0.001\$       | 0 ms          | whenever you want[^4]             | No – not reversible | Potentially limitless     |
| z402 (Solana) (1k mean[^3])           | \<0.0001\$      | 0 ms          | whenever you want[^4]             | No – not reversible | Potentially limitless     |

#### User experience

We compare the payment user experience for AI agent and for human agents.

| Use case           | Traditional Process (Stripe, PayPay, etc.) | x402                                            | z402 |
| ------------------ | ------------------------------------------ | ----------------------------------------------- | ---- |
| AI agents payments | Non existing                               | <ul><li>Fast payment</li><li>low fees</li></ul> |      |

[^1]: In some, fairly common, cases, x402 fails to be truly decentralized, so failing to satisfy the point 2 of [our list](#requirements-for-an-internet-native-payment-protocol). For example if you run x402 on Base using Flashblocks (currently the most used option, since x402 was made by Base), Base infrastructure becomes a centralization point. The protocol is not failing by itself but in the way most people, often unknowingly, use it. See the [comparison with x402](#comparison-with-other-payment-methods) for more.

[^2]: The reported information on external companies is to be intended as explanatory and not accurate as it is outside of Tesseract's control, it's reported for your convenience. The reported information is subject to change, you can verify independently our claims by heading over to the respective companies website, if you find any incorrectness don't hesitated to contact us or open a pull request.

[^3]: Since z402 works in such a way that the more transactions you batch, the less fees are due per transaction, the fees here reported are calculated as a mean of 1000 batched transactions. Read more in the [docs](/docs). <!-- TODO: add the correct link when you create the page -->

[^4]: The settlement is done through the z402 smart contract, so users can know immediately if a payment is valid or not (i.e. if it will be settled or not), but the actual settlement time is chosen by the seller, the more they wait, the more they can batch transactions and save on blockchain fees. So, once the payment proof has been submitted, the settlement time is the settlement time of the blockchain (as for x402).
