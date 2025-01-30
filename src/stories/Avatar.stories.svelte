<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Avatar from '$lib/components/Avatar.svelte';
	import avatar from '$lib/assets/avatar.webp';

	const { Story } = defineMeta({
		title: 'UI/Avatar',
		component: Avatar,
		tags: ['autodocs'],
		argTypes: {
			backgroundColor: { control: 'color' },
			size: {
				control: { type: 'select' },
				options: ['large', 'medium', 'small']
			},
			altText: { control: 'text' },
			src: { control: 'text' }
		},
		args: {
			altText: 'Avatar',
			src: avatar
		}
	});
</script>

<Story name="Large" args={{ size: 'large' }} />
<Story name="Medium" args={{ size: 'medium' }} />
<Story name="Small" args={{ size: 'small' }} />
<Story name="No image" args={{ src: '', altText: 'No image found' }} />