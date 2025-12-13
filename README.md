# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Ideas/TODOs

Sections:

- The button "Get Started" should maybe be "Ship Now" or "Deploy", in any case it should redirect to the developer quickstart

Docs:

- Add to the docs a section on batched payments/withdraws

### Fixes

- Refactor the wording to not only consider AI agents, but also other things, there are some examples on <https://www.x402.org/>. I mean, probably the best thing would be of having a website for z402 and a website for Tesseract focusing on AI.
- Add the fact that the z402 has no fees as a protocol (x402 says the same)
- Improve navbar by adding a call to action button
- Understand how to truly integrate Docusaurus
- Use an actual icon package in the Why Section (and also elsewhere)
- Add a "Core Values" page or blog post
- Fix "Universal"/"Open Source" entries in the why section, they have the same icon, also you talk about open source later, maybe it's redundant to have it also here
- Remove the pepsi logo and use your own
- Consider migrating the docs to <https://www.mintlify.com/>, it has an integrated mcp server, that's a killer feature
- There's a bug in the mesh. If two nodes have the same x or y the edge between them is not shown.
