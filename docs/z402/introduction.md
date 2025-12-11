# z402 Introduction

Let me introduce you [x402](https://www.x402.org/) and its enhanced variant **z402**!

## What is x402

x402 is _An open protocol for internet-native payments_: it enables HTTP endpoints to request a payment to be accessed, the name comes from the long unused [HTTP 402 status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/402).
x402 leverages blockchain technology and it's blockchain agnostic, meaning it can run on different blockchains. An x402 payment speed is also related to the blockchain that's using, in fact its speed is **capped by the speed of the blockchain**, z402 aims to solve this problem.

## What is z402

In one sentence, z402 can be described as _x402 but with **zero** seconds blockchain-induced delay_, it allows for truly instantaneous transactions and it's more secure and decentralized because it runs on audited smart contracts.
z402 is an extension of x402, z402 supports all the features of x402 and adds some more, moreover it's fully compatible with the x402 ecosystem, so you can use z402 software and run seamlessly both z402 and x402 applications.

## The z402 protocol

The z402 protocol can operate in two modes:

- x-mode: it operates the same as x402 would
- z-mode: it operates differently from x402, allowing for zero delay payments

A client can express the intention of operating under the z-mode by adding a `mode` field in any request they make and response they give and setting it to `z`. If the field is set to `x` or it's missing then the operation is in x-mode, this ensures compatibility with the x402 protocol.

### z-mode

:::note
In this description there are some cryptographic details that are not mentioned, for example we're completely omitting signatures, you can find all the technical details in the whitepaper.

Also these details can be abstracted from the user using the client SDK, you can also check its implementation for more.
:::

In z-mode, we have these actors:

- buyer and their client
- seller and their client
- seller server: the server that delivers the service of the seller at an endpoint, for example, `/example-service`
- facilitator (optional)
- smart contract implementing the z402 protocol, or for short, smart contract

In z-mode, the actors operate this way:

- (Optional) Discovery phase: the buyer calls the endpoint `/example-service` of the seller server and they get an HTTP response with error code `402 - Payment Required`. This status means that the user has to call again that endpoint with a payment proof.

  This phase is the same as in x-mode.

- Authorization phase: The buyer is authorizing the seller to be payed up to a certain "authorized amount" in the future, as they execute tasks for them, up to a deadline, after the deadline the remaining amount is returned to the buyer. The buyer client prepares a payload containing the following:
  - network: the blockchain used for the payment
  - (Optional) contract: the address of the smart contract, usually there's a default for this. Some facilitators may have a whitelist/blacklist of smart contracts.
  - recipient: the blockchain address of the seller
  - authorized amount: the max amount the user is willing to spend in services from that specific seller
  - deadline: the deadline up to which the amount can be spent

  The buyer client can call the `/authorize` facilitator endpoint or they can interact directly with the smart contract. This phase is missing in x-mode.

- Payment phase: the buyer calls the seller server's endpoint `/example-endpoint` with a payment proof containing the following:
  - network: the blockchain used for the payment
  - (Optional) contract: the address of the smart contract used for the payment
  - recipient: the blockchain address of the seller
  - payment amount: the amount to pay the seller for a specific service, that is always less or equal to the authorized amount minus the sum of all previous payments
  - nonce: unique identifier of the payment, generated randomly

  This phase is present also in x-mode but with a different payload.

- Verification phase: The seller server can immediately verify if the payment is valid, completely off-chain, this is why the payments are instant. The sellers needs to have a local registry of the amounts spent by the buyer, optionally, they can call the `/verify` facilitator endpoint and send the payment payload they got, the facilitator can handle it for them.

  This phase is present also in x-mode but it's different, the verification is just of the payload format, you have no guarantee that the transaction will be settled, with z402 you do.

- Response phase: the seller server can return the resource to the buyer, as requested. This phase can be repeated multiple times along with the Verification phase with no delay due to the blockchain, de facto creating instant transactions.

  This phase is present also in x-mode but it can be done only after the Settlement phase.

- Settlement phase: the seller server can settle the transactions (also more than one per time) by directly interacting with the blockchain or by calling the `/settle` facilitator endpoint. The seller can settle them at any time and in parallel to execution, without compromising UX.

  This phase is present also in x-mode but it works differently (it doesn't use smart contracts for example).
