<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { within, expect } from '@storybook/test';

	import Card from '$lib/components/Card.svelte';

	import TitleSvx from '$lib/content/title.svx';
	import BodySvx from '$lib/content/body.svx';

	const { Story } = defineMeta({
		title: 'Content/Body',
		component: Card,
		tags: ['autodocs'],
		argTypes: {
			classExtra: {
				description: 'Extra classes to add to the card',
				control: 'text'
			},
			side: {
				description:
					'Side of the card where the image is placed. If you change this, you will need to refresh the component.',
				control: { type: 'select' },
				options: ['left', 'right', 'center']
			},
			// Unnecessary for this story
			title: { table: { disable: true } },
			text: { table: { disable: true } },
			children: { table: { disable: true } }
		}
	});
</script>

<Story
	name="Context"
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const letterTitle = canvas.getByRole('heading', { name: /example/iu });
		await expect(letterTitle).toBeInTheDocument();

		const letterContent = canvas.queryByText(/lorem ipsum/iu);
		await expect(letterContent).toBeInTheDocument();
	}}
	args={{}}
>
	{#snippet children(args)}
		<Card {...args}>
			<h1 class="mb-6 mt-1 text-2xl">
				<TitleSvx></TitleSvx>
			</h1>
			<BodySvx></BodySvx>
		</Card>
	{/snippet}
</Story>

<Story
	name="Context title"
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const letterTitle = canvas.getByRole('heading', { name: /example/iu, level: 1 });
		await expect(letterTitle).toBeInTheDocument();

		const letterContent = canvas.queryByText(/lorem ipsum/iu);
		await expect(letterContent).not.toBeInTheDocument();
	}}
	args={{}}
>
	{#snippet children(args)}
		<Card {...args}>
			<h1 class="mb-6 mt-1 text-2xl">
				<TitleSvx></TitleSvx>
			</h1>
		</Card>
	{/snippet}
</Story>

<Story
	name="Context body"
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const letterTitle = canvas.queryByRole('heading');
		await expect(letterTitle).not.toBeInTheDocument();

		const letterContent = canvas.getByRole('paragraph');
		await expect(letterContent).toBeInTheDocument();
	}}
	args={{}}
>
	{#snippet children(args)}
		<Card {...args}>
			<BodySvx></BodySvx>
		</Card>
	{/snippet}
</Story>

<Story
	name="No context"
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const letterTitle = canvas.queryByRole('heading');
		await expect(letterTitle).not.toBeInTheDocument();

		const letterContent = canvas.queryByRole('paragraph');
		await expect(letterContent).not.toBeInTheDocument();
	}}
	args={{}}
>
	{#snippet children(args)}
		<Card {...args} />
	{/snippet}
</Story>
