<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import background from '$lib/assets/background.webp';
	import Image from '$lib/components/Image.svelte';

	const { Story } = defineMeta({
		title: 'UI/Image',
		component: Image,
		tags: ['autodocs'],
		argTypes: {
			backgroundColor: { control: 'color' },
			size: {
				control: { type: 'select' },
				options: ['background', 'thumbnail']
			},
			altText: { control: 'text' },
			src: { control: 'text' }
		},
		args: {
			src: background
		}
	});
</script>

<Story name="Background" args={{ size: 'background' }} />
<Story name="Thumbnail" args={{ size: 'thumbnail' }} />
<Story name="No image" args={{ src: '', altText: 'No image found' }} />
