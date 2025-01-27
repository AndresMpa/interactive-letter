import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	// Toggle dark-mode based on .dark class or data-mode="dark"
	darkMode: ['class', '[data-mode="dark"]'],

	theme: {
		extend: {}
	},

	plugins: [typography]
} satisfies Config;
