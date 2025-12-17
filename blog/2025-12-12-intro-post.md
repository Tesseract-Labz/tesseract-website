---
slug: building-the-internet-of-agents-with-z402
title: Building the Internet of Agents with z402
authors: frollo
tags: [internet of agents, z402, x402]
---

# Building the Internet of Agents with z402

AI agents are playing an increasingly important role in our lives, they're becoming always more capable and autonomous, the **Internet of Agents** is what will make them an organism that is greater than the sum of its parts.

<!-- truncate -->

## History and motivation

Each day millions of internet transactions are carried out, these transactions are done through different UIs and payment processors, there's no standard governing them. But why we would need it? Essentially a standard makes things easier, for developers and for users, moreover it creates a more fair environment, where there are no few "gatekeepers" companies handling the payments and can charge high fees, there's just the protocol and everybody can use it.

It's weird that such a universal human primitive like the payment is not encoded into the internet as a fundamental protocol, this wasn't supposed to be case, in fact, in 1997 in the [specification of HTTP/1.1](https://www.rfc-editor.org/rfc/rfc2068) a `402 - Payment Required` status code was added and kept for "later use". Still today, the 402 status code is considered non standard and there's no internet native payment protocol. But this is about to change.

### Requirements for an internet native payment protocol

We believe that an internet native protocol should have the following characteristics.

1. No protocol fees: the protocol itself should be free to use. There could be some fees due to the technology used to make the transaction possible tho (blockchain for instance).
2. No central control: the protocol shouldn't be controlled by any individual or organization with conflicts of interest.
3. Integrated with HTTP: the protocol should be implemented in HTTP using the 402 status code, as per the 1997's original spec.
4. Transactions have with no minimum (or very low): it must be possible to make subcent transactions.
5. Scalable: the payment protocol should be able to scale almost without limit, like the internet itself.
6. As fast as the internet: the payment protocol shouldn't introduce any delay due to the protocol itself. When making a transaction as an HTTP request, it should be immediately clear that the transaction is valid and there should be no need of triggering more network requests.

The first protocol to try tackle these problems was [x402](https://x402.org), created by Base; it satisfies (debatebly[^x402-decentralization]) all the requirements except the 5th and 6th: x402 is **not** as fast and as scalable as the internet, it is just as fast and as scalable as the underlining blockchain. We will later see how **z402** solved these problems, nevertheless, x402 enabled new interesting use cases, in particular the constitution an **Internet of Agents**.

## Internet of Agents architecture

The expression Internet of Agents (IoA) takes inspiration from the Internet of Things (IoT), that is a network of computers, typically sensors and low power devices, that communicate with each other and share data. The Internet of Agents is similar, it is a network of specialized agents (AIs or humans) that perform complex tasks autonomously by collaborating with each other and paying for the services/goods that they offer.

In such a system, you will have humans, AI and potentially other programs to purchase from each other: it's a new kind of economy where AI agents and humans can work together by selling services, on demand access to a content and more; in many situations it supersedes or complements the subscription model. For example, you could have an artist AI agent offering to generate an image for 0.0001\$ or a human asking for 0.10\$ to access an exclusive blog post instead of requiring a full subscription; you can unlock pay-per-use and micropayments natively, without the sellers and buyers having to set up API keys, without a minimum amount and with no funds lock in. More use cases are explored in the [dedicated section](#use-cases).

So, to build such an agent network, you need to equip it with the following:

- Discovery mechanism: agents need to find each other and know what services they offer
- Communication protocol: agents need to "speak the same language" to start, end and update tasks
- Payment protocol: agents need to pay for the tasks performed by other agents
- Reputation system (optional): a system to assign and retrieve a score to sellers based on the quality of the output they produce

Google's [A2A protocol](https://a2a-protocol.org/) seems the emerging protocol for the internet of agents: it offers [Agent Cards](https://a2a-protocol.org/latest/topics/agent-discovery/) for discovery, it has a communication protocol but no payment protocol nor reputation system. It is possible to extend A2A with [A2P](https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol), adding a payment protocol that is also compatible with x402 and z402. Finally, the [EIP 8004](https://eips.ethereum.org/EIPS/eip-8004) improves A2A discovery capabilities and adds a reputation system.

## z402

[z402](/docs/z402/introduction) is an **extension** of x402 that satisfies **all** the [requirements for an internet native payment protocol](#requirements-for-an-internet-native-payment-protocol), in particular it is as fast as the internet (no delay and no extra HTTP requests) and it scales almost limitlessly (transactions can be batched).
Broadly speaking, z402 uses a smart contract as escrow for the payments and releases the funds only if a valid cryptographic proof of payment is given, the full verification process is done off-chain, allowing to bypass the delay of the underlining blockchain and to perform instant transactions.

Another advantage of z402 is that, by design, it can support blockchains with longer block time like Ethereum, x402 can't support such a blockchain because it would make also x402 payments slow and nobody wants slow transactions, especially for AI agents.

You can read more how z402 works in the [z402 docs](/docs/z402/introduction).

### Use cases

Here is a (incomplete) list of use cases of z402, along with a comparison with existing services[^info-disclaimer]:

- **Pay-per-use**: the pay-per-use business model allows to offer on demand service with micropayments, but as of today, it is inherently flawed. This is because of the high fees payment processor take (around 3%) and because users are forced to lock their funds into the platform usually without the possibility to withdraw them, this creates more friction compared to seamlessly pay (no registration) for what you need, with no locked funds.
  - Cloud resources: a service using z402 could offer cloud resources usage, including GPU and CPU, per hour or per minute at a lower price than competition. Moreover, likely the customers might as well not be humans, but rather AI agents that need compute for their "survival".
  - AI services: OpenAI API users need to pay a minimum of 5\$ in credits, that expire after one year, with no refund of unused credits. An alternative service could leverage z402 to offer no lock in of funds, reducing lost funds and initial friction.
  - Access to a database: a service could use z402 to offer access to a database on demand for a micropayments, instead of asking for a subscription. AI agents can access and pay for only the data they need.
- **Agentic payments**: this is a new use case. Leveraging protocols like A2A and z402, it's possible to create a network of AI agents doing tasks and selling services, every task can be monetized seamlessly with z402.
  - Personal agent economy: for most people the smartphone is the gateway to many of their everyday activities, even though smartphone interfaces are built to be intuitive, they still require the user to "adapt" to the interface. From a UX perspective, AI devices, equipped with speech and video capabilities, are the ultimate interface, because they would work by simply asking them to do whatever pleases you. Personal agents will emerge, they are AI agents that know us well as our smartphone knows us today. Differently from your smartphone, an AI agent would be autonomous, so it could do actions on our behalf, including shopping, opening up a new set of use cases: ads for AI agents, personalized ads delivered through personal agents in the form of speech and more.
  - Agentic economy: AI agents can sell services and accumulate wealth, they can even invest that wealth to gain even more: all this autonomously. Agents can aggregate to offer complex services, de facto making their own companies and partnerships.. Of course, most AI agents will work for humans that programmed them or that have control over their funds.
- **High speed services**:
  - High frequency trading: we can unlock trading stocks on any blockchain thanks to z402 instant transactions
  - Highly requested API endpoints: API endpoints with thousands of requests per seconds can be monetized with no performance impact
  - High throughput agents: agents that make thousands of requests per second can deliver instantly, thanks to z402
- **On demand content with no minimum limit**: today a popular business model is the subscription business model, we believe it can be overtaken by an on demand business model where a user makes request for a specific content, not an estensive offering that they will never use, in some cases it might be appropriate for these models to coexist.
  - Streaming: Netflix's Standard subscription costs 17,99\$ a month. An alternative streaming service using z402 could offer to pay 0.25\$ to rent a single movie or even charge per minutes watched.
  - Content creator economy: content creators get mainly monetized through sponsoring, for creators with a smaller public this is difficult to achieve. A simple "tipping service" could be developed to integrate into existing social platforms and be set to have a low minimum (ex. 0.01\$), tipping small creators is now possible. Another notable case is the economy around exclusive, paywalled, content, offered by individual creators: services like OnlyFans charge 20% on all earnings and imposes a minimum PPV (pay per view) fee usually forcing creators to bundle multiple media; an alternative service using z402 could offer much lower rates and a low limit on PPV content (cents)
  - Paywalls: paywalls block access to content and unlock it after paying a subscription, an alternative paywall could use z402 to create a paywall that unlocks after a micropayment, this way customers don't need to subscribe to content they might never need.

### Operative modes

Since z402 is an extension of x402, it offers two operative modes:

- x-mode: a 100\% x402 compatible mode, following the same specs
- z-mode: what make z402 special, with instant payments, added scalability and lower fees on batched transactions

In short, we believe that z-mode is better than x-mode in most cases, but not in all. z-mode outperforms x-mode every time a buyer needs to perform multiple transactions with a seller, in this case you get instant transactions and the lowest blockchain fees, even in the case of a single transaction z-mode performs just as good as x-mode (they have the same speed), but the overhead of using a smart contract slightly increases the blockchain fees. So, it's smart to use x-mode for single-use non-repeated transactions, for all the rest use z-mode.

Choose z-mode every time, as buyer or seller, you need to do multiple transactions. For example, choose z-mode

- for the internet of agents: z-mode is perfect for AI agents because it can stand high frequency transactions with no delay added and the lowest blockchain fees
- as a buyer or seller, when you want instant transactions
- when you offer REST API usage as service
- when you offer database access as service
- when you offer AI inference, cloud storage, etc as service
- when you own a store
- when you want to use a blockchain network not supported by x402

Choose x-mode every time you are buying a service/good from a seller and you don't think you will buy again. For example, choose x-mode

- the first time you buy from a seller and you don't think you will buy again
- when you are buying access to a one-time use resource from a seller you didn't buy from before
- as a seller, when you want to be compatible with x402
- as a buyer, when the seller only supports x402

### Comparison with other payment methods

Let's compare z402 with other payment methods, including x402, Stipe and PayPal.

#### Pricing and speed[^info-disclaimer]

| Payment Method                                    | Typical Fees    | Valid payment          | Settlement                                          | Scalability               | Chargeback Risk     |
| ------------------------------------------------- | --------------- | ---------------------- | --------------------------------------------------- | ------------------------- | ------------------- |
| Credit Card                                       | $0.30 + 2.9%    | ~1s                    | Days (batch)                                        | 65k TPS                   | Yes, up to 120d     |
| PayPal                                            | ~3% + fixed fee | ~1s                    | Days                                                | Unknown                   | Yes                 |
| Stripe                                            | 2.9% + 0.30\$   | ~1s                    | 1-3 days                                            | >13k TPS                  | Yes                 |
| Stripe (Pay with Crypto)                          | \>1.5%          | ~1s                    | Depends on blockchain                               | Depends on blockchain     | No – not reversible |
| Ethereum L1                                       | 1–5\$ + gas     | 12 s                   | 1–2 min euristic, 13 min finality                   | 15–20 TPS                 | No – not reversible |
| x402 (Base Flashblocks)                           | \<0.001\$       | 200 ms[^base-finality] | 200 ms preconfirmation, 2s finality[^base-finality] | Hundreds to thousands TPS | No – not reversible |
| z402 (Base Flashblocks) (1k mean[^z402-batching]) | \<0.0001\$      | 0 ms                   | whenever you want[^z402-settlement]                 | TPS                       | No – not reversible |
| z402 (Ethereum) (1k mean[^z402-batching])         | \<0.001\$       | 0 ms                   | whenever you want[^z402-settlement]                 | Almost limitless          | No – not reversible |
| z402 (Solana) (1k mean[^z402-batching])           | \<0.0001\$      | 0 ms                   | whenever you want[^z402-settlement]                 | Almost limitless          | No – not reversible |

#### User experience

| Use case                                            | Legacy                                                                                                                                              | x402                                                                                                                                         | z402                                                                                                                                  |
| --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| AI agents payments                                  | Non existing                                                                                                                                        | <ol><li>Seemless integration</li><li>Payments speed depends on blockchain</li><li>Low fees</li></ol>                                         | <ol><li>Seemless integration</li><li>Payments are instant</li><li>Incredibly low fees</li><li>Lots of blockchains supported</li></ol> |
| Pay-per-use (ex. market research agent)             | <ol><li>Humans need to manually subscribe/buy credits to many API services</li><li>API keys setup required</li><li>API credits can expire</li></ol> | <ol><li>AI Agent pays for API services</li><li>No API key setup required</li><li>Payments speed depends on blockchain and low fees</li></ol> | <ol><li>Agent pays for API services</li><li>No API key setup required</li><li>Instant payments and lowest fees</li></ol>              |
| Pay-per-access (ex. human wants to read an article) | <ol><li>Account registration required to make a subscription</li><li>Monthly/yearly subscription required to unlock paywall</li></ol>               | <ol><li>Pay with wallet and unlock paywall</li><li>No registration required</li></ol>                                                        | <ol><li>Pay with wallet and unlock paywall</li><li>No registration required</li><li>Instant payments and lowest fees</li></ol>        |

## Conclusion

I hope this post gave you a bunch of good reasons to start using and building on z402. If you're a dev, head over to our [docs](/docs), see you out there!

[^x402-decentralization]:
    In some, fairly common, cases, x402 fails to be truly decentralized. For example if you run x402 on Base, Base infrastructure becomes a centralization point, because Base has only one sequencer (theirs), this causes [predictable pitfalls](https://coinfomania.com/base-l2-block-production-halt-centralization-risk/). This case is relevant since currently using x402 on Base with Flashblocks is the most used settings.
    In this case, the protocol is not failing by itself but in the way most people and agents, often unknowingly, use it.

[^info-disclaimer]: The reported information on external companies is to be intended as explanatory and not accurate nor complete as it is outside of Tesseract's control, it's reported for your convenience. The reported information is subject to change, you can verify independently our claims by heading over to the respective companies website, if you find any incorrectness don't hesitated to contact us or open a pull request.

[^z402-batching]: Since z402 works in such a way that the more transactions you batch, the less fees are due per transaction, the fees here reported are calculated as a mean of 1000 batched transactions. Read more in the [docs](/docs). <!-- TODO: add the correct link when you create the page -->

[^z402-settlement]: The settlement is done through the z402 smart contract, so users can know immediately if a payment is valid or not (i.e. if it will be settled or not), but the actual settlement time is chosen by the seller, the more they wait, the more they can batch transactions and save on blockchain fees. So, once the payment proof has been submitted, the settlement time is the settlement time of the blockchain (as for x402), the best strategy is to submit the payment proofs during execution or at later moment, this way the task execution is not delayed at all.

[^base-finality]: Base uses Flashblocks that splits a 2 seconds block into ten 200 milliseconds blocks, in the Flashblocks FAQ, they claim that it is very rare that a flashblock fails to be included in a final block, but it's possible, this even it's called reorg, so the actual finality is still 2 seconds. You can read more technical details, for example, [here](https://sheys.substack.com/p/the-truth-about-flashblocks-on-base).
