<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { within, expect } from '@storybook/test';

	import Card from '$lib/components/Card.svelte';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'UI/Card',
		component: Card,
		tags: ['autodocs'],
		argTypes: {
			classExtra: { control: 'text' },
			title: { control: 'text' },
			text: { control: 'text' },
			side: {
				control: { type: 'select' },
				options: ['left', 'right', 'center', 'none']
			},
			children: { control: 'text' }
		},
		args: {
			title: 'Example title',
			text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, numquam! Rerum atque minus ipsam, quia mollitia dignissimos, maxime quibusdam odio reiciendis amet sint iste velit facere cumq laboriosam libero voluptatibus.`
		}
	});
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story
	name="Default"
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const letterTitle = canvas.getByRole('heading', { name: /Example title/i });
		await expect(letterTitle).toBeInTheDocument();

		const letterContent = canvas.queryByText(/Lorem ipsum/iu);
		await expect(letterContent).toBeInTheDocument();
	}}
	args={{}}
>
	{#snippet children(args)}
		<Card {...args}>
			<h1 class="mb-6 mt-1 text-2xl">Example title</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, numquam! Rerum atque minus
				ipsam, quia mollitia dignissimos, maxime quibusdam odio reiciendis amet sint iste velit
				facere cumque, laboriosam libero voluptatibus.
			</p>
		</Card>
	{/snippet}
</Story>

<Story
	name="Children"
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const letterTitle = canvas.getByRole('heading', { name: /Example title/i });
		await expect(letterTitle).toBeInTheDocument();

		const letterContent = canvas.queryByText(/Lorem ipsum/iu);
		await expect(letterContent).toBeInTheDocument();
	}}
	args={{}}
>
	{#snippet children(args)}
		<Card {...args} />
	{/snippet}
</Story>

<Story
	name="Left"
	args={{
		side: 'left'
	}}
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		
		const container = canvas.getByRole('div');
		expect(container).toHaveClass('text-left');
	}}
>
	{#snippet children(args)}
		<Card {...args} />
	{/snippet}
</Story>

<Story
	name="Right"
	args={{
		title: 'Example',
		text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, numquam! Rerum atque minus ipsam, quia mollitia dignissimos, maxime quibusdam odio reiciendis amet sint iste velit facere cumq laboriosam libero voluptatibus.`,
		side: 'right'
	}}
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const container = canvas.getByRole('div');
		expect(container).toHaveClass('text-right');
	}}
>
	{#snippet children(args)}
		<Card {...args} />
	{/snippet}
</Story>

<Story
	name="Center"
	args={{
		title: 'Example',
		text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, numquam! Rerum atque minus ipsam, quia mollitia dignissimos, maxime quibusdam odio reiciendis amet sint iste velit facere cumq laboriosam libero voluptatibus.`,
		side: 'center'
	}}
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const container = canvas.getByRole('div');
		expect(container).toHaveClass('text-center');
	}}
>
	{#snippet children(args)}
		<Card {...args} />
	{/snippet}
</Story>
