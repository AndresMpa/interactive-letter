# Interactive Letter doc

This projects aims to be a simple web for couples or anything like that, for making gifts, the idea behind is to make a copy to be deployed on a Could SaaS such as Netlify, Vercel or any of the supported [adapter by Svelte](https://svelte.dev/docs/kit/adapters), this projects aims to be a zero-config love-card, that's why you should be able to config the most relevant content on the content.json file, the recommended options to check if your content was rendered as you wanted is to use the development server integrated here using the CLI as the main README.md says, this projects is kind of a joke with a serious architecture behind it, but it was though for devs without experience on deployments, people how really want to make a gift for their couples or someone who wants to make a cute gift without wasting a bunch of time building an entire page by him/herself.

## Tech stack

- Dev server: [Vite](https://vite.dev/)
- Framework: [Svelte](https://svelte.dev/)
- Animations provider: [Lottiefiles](https://lottiefiles.com/es/)
- Components testing: [Vitest](https://vitest.dev/)
- Visual testing tool: [Chromatic](https://www.chromatic.com/)
- E2E testing tool: [Playwright](https://playwright.dev/)
- Visual communication between dev and design [Storybook](https://storybook.js.org/)
- Adapter for deployment process: [Netlify](https://svelte.dev/docs/kit/adapter-netlify)

## Useful doc

#### Storybook not working

Just follow this: [https://github.com/storybookjs/storybook/issues/14688#issuecomment-2160929822](https://github.com/storybookjs/storybook/issues/14688#issuecomment-2160929822)

#### Tailwind on Storybook

To have the theme switching on Storybook for TailwindCSS there's an entry about [Storybook without TS for minimum config](https://storybook.js.org/recipes/tailwindcss#2-provide-tailwind-to-stories) there's also [an entry on its repo](https://github.com/storybookjs/storybook/blob/main/code/addons/themes/docs/api.md) about it it's useful for other tool such as Vuetify among others, in short what you need to do to make TailwindCSS works it's simply add the main file for TailwindCSS imports inside a file called preview:

```javascript
// ./storybook/preview.[ts/js]

import '../src/app.css';
```

To install the addon for theming just exec:

```bash
pnpm exec storybook add @storybook/addon-themes
```

Then you need to configure the addon on the preview.[ts/js] file, it works under a decorator:

```javascript
// ./storybook/preview.[ts/js]
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import '../src/app.css';

// Other configurations

export const decorators = [
	withThemeByDataAttribute({
		themes: {
			light: 'light',
			dark: 'dark'
		},
		defaultTheme: 'light',
		attributeName: 'data-mode'
	})
];
```

#### a11y (Accessibility) on Storybook

Accessibility features comes from the a11y addon from story book, its configuration can be found [here](https://storybook.js.org/docs/writing-tests/accessibility-testing#accessibility-checks-with-a11y-addon) the default configurations and some ways to customize the a11y addon con be found at the [axe-core](https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#api-name-axeconfigure). To install the addon just exec

```bash
pnpm exec storybook add @storybook/addon-a11y
```

#### MDX (SVX) on Svelte

To have markdown inside Svelte you need a [module called mdsvex](https://mdsvex.pngwn.io/docs#mdsvex-1) then you must configure it as follows:

```javascript
//svelte.config.js
// ...
import { mdsvex } from "mdsvex";

const mdsvexConfig = { extensions: ['.svelte.md', '.md', '.svx'] };

const config = {
	extensions: ['.svelte', '.html', ...mdsvexConfig.extensions],
	preprocess: [
		// ...
		mdsvex(mdsvexConfig)
		// ...
	],
```

The most important section there is `mdsvexConfig` which are the supported extension by `mdsvex`, then the `config` section comes from the usual `svelte.config.js` file as says the integration section in the [integration entry](https://svelte.dev/docs/kit/integrations#vitePreprocess) once the config work correctly you would be able to make this:

```javascript
//App.svelte

<script lang="ts">
	import fileSvx from '$lib/content/file.svx';
</script>

<FileSvx></FileSvx>
```

```file.svx
Some text in markdown
```

The `App.svelte` file will render the content inside `file.svx`

## Extra tools I'm not using

- https://storybook.js.org/addons/@nx/storybook
- https://storybook.js.org/addons/@alexgorbatchev/storybook-addon-localstorage
- https://storybook.js.org/addons/storybook-addon-playwright
- https://storybook.js.org/addons/@storybook/addon-toolbars
- https://storybook.js.org/addons/storybook-addon-apollo-client
- https://storybook.js.org/addons/storybook-addon-next-router
- https://storybook.js.org/addons/@dreamworld/addon-redux
- https://storybook.js.org/addons/@storybook/addon-graphql
- https://storybook.js.org/addons/@kickstartds/storybook-addon-jsonschema
- https://storybook.js.org/addons/msw-storybook-addon-msw-v1-fork
- https://storybook.js.org/addons/storybook-addon-breakpoints
