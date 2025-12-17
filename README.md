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

High priority:

- Add more info on z402 costs and performances in the into post
- Update the docs with an actual quickstart
- Add example projects repo links

Medium priority:

- Improve page accessibility: consider color blindness, etc
- Improve navbar by adding a call to action button, with a button that says "Get Started" or "Ship Now" or "Deploy", in any case it should redirect to the developer quickstart
- Add to the docs a section on batched payments/withdraws
  Low priority:

- Use an actual icon package in the Why Section (and also elsewhere) and fix repeated icons for multiple entires
- Understand how to truly integrate Docusaurus
- Add a "Core Values" page or blog post
- Consider adding an mcp server, <https://www.mintlify.com/> has one, that's a killer feature
- There's a bug in the mesh. If two nodes have the same x or y the edge between them is not shown.
