<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Letter from '$lib/pages/Letter.svelte';

	const { Story } = defineMeta({
		title: 'Page/Letter',
		component: Letter,
		tags: ['autodocs']
	});
</script>

<Story name="Main page"></Story>
