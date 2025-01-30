import { withThemeByDataAttribute } from '@storybook/addon-themes';
import type { Preview } from '@storybook/svelte';
import theme from './theme';
import '../src/app.css';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},
		docs: {
			theme: theme
		}
	},
	globals: {
		a11y: {
			// Optional flag to prevent the automatic check
			manual: true
		}
	}
};

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

export default preview;
