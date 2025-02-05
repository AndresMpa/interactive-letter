<div align="center">

# Interactive letter

![Preview collection for images for people to check on this before the just click on the new tab shortcut](https://raw.githubusercontent.com/AndresMpa/interactive-letter/refs/heads/main/.doc/assets/preview.png)

</div>

Looking for a 0 config for small stupid gift for your \<INSERT HERE HUMAN RELATIONSHIP /\>? Try Interactive Letter the no-completely-driven-by-loveliness easies way to make a stupid gift for your \<INSERT HERE HUMAN RELATIONSHIP /\> project!

### Build with

<div align=center>

<p>

![Sarcastic love](https://img.shields.io/badge/-Sarcastic_love-black?style=for-the-badge&logo=undertale)
![Svelte](https://img.shields.io/badge/-Svelte-black?style=for-the-badge&logo=Svelte)
![Storybook](https://img.shields.io/badge/-Storybook-black?style=for-the-badge&logo=Storybook)
![Tailwindcss](https://img.shields.io/badge/-Tailwindcss-black?style=for-the-badge&logo=Tailwindcss)
![Chromatic](https://img.shields.io/badge/-Chromatic-black?style=for-the-badge&logo=Chromatic)
![Prettier](https://img.shields.io/badge/-Prettier-black?style=for-the-badge&logo=Prettier)
![.env](https://img.shields.io/badge/-DotEnv-black?style=for-the-badge&logo=dotenv)

</p>

> For a serious technical documentation check the [./doc folder](https://github.com/AndresMpa/interactive-letter/tree/main/.doc)

</div>

## Description

Build on Svelte to avoid as much as possible thinking due to its foolproof syntax, this repo host a simple letter for devs to make gifts, it runs under [`sv`](https://github.com/sveltejs/cli) but its construction doesn't matter to you!. To deploy yours, simply download or fork this repo, replace its setting on the [body.mdx](./src/lib/content/body.svx) and [title.mdx](./src//lib/content/title.svx) files and that's it (You might want to check this [link](https://mdxjs.com/docs/)), thanks to Svelte adapter the next step is to deploy it on your favorite (Obviously Netlify) cloud SaaS

> NOTE: Images for [background](./src/lib/assets/background.webp) and [profile's avatar](./src//lib/assets/avatar.webp) were optimized with [squoosh](https://squoosh.app/) if your images are not `.webp` use it to change that extensions of your images, then replace those files

## Developing (If you're a crazy parrot looking for malware)

Try `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
# To install(?) dependencies at package.json
pnpm i

# To start the development server
pnpm dev

# or start the server and open the app in a new browser tab
pnpm dev -- --open
```

## Building

To create a production version of your app:

```bash
# To check what ever you wanted to change
pnpm preview

# If you finished checking on this source code for some reason you wanted to check(?)
pnpm build
```
