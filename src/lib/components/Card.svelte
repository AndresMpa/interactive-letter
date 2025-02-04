<script lang="ts">
	interface Props {
		/** The side of the card */
		side?: 'left' | 'right' | 'center';
		/** Extra classes to add to the card */
		classExtra?: string;
		/** The title of the card */
		title?: string;
		/** The text of the card */
		text?: (() => any) | string;
		/** An optional slot for additional or custom content */
		children?: () => any;
	}

	const sideMap = $state({
		left: 'text-left',
		right: 'text-right',
		center: 'text-center',
		undefined: ''
	});

	const { side = 'center', classExtra, title, text, children }: Props = $props();

	let computedSide = side ? sideMap[side] : sideMap.undefined;
</script>

<main class={`${classExtra ? classExtra : ''}`}>
	<div
		class={[`mx-auto rounded-lg p-6 shadow-lg`, `${computedSide ? computedSide : ''}`].join(' ')}
		role="presentation"
	>
		{#if title}
			<h1 class="mb-6 mt-1 text-2xl">
				{title}
			</h1>
		{/if}
		{#if text}
			{#if typeof text === 'string'}
				<p>{text}</p>
			{:else}
				{@render text()}
			{/if}
		{/if}
		{#if children && !title && !text}
			{@render children()}
		{/if}
	</div>
</main>
