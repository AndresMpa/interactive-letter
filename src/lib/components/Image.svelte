<script lang="ts">
	interface Props {
		/** The background color of the image */
		backgroundColor?: string;
		/** The size of the image */
		size?: 'background' | 'thumbnail';
		/** The alt text of the image */
		altText: string;
		/** The source of the image */
		src: string;
	}

	const sizeMap = $state({
		background: '4/3',
		thumbnail: '1/1 p-5 opacity-50'
	});

	const { backgroundColor, size, src, altText = 'Image not found' }: Props = $props();

	let computedSize = size ? sizeMap[size] : sizeMap.background;
	let imageError = $state(false);
</script>

{#if !imageError}
	<figure class={`aspect-${computedSize}`}>
		<img
			src={`${src}`}
			alt={`${altText}`}
			class={[
				'h-64 w-full object-cover object-[25%_75%]',
				`${backgroundColor ? backgroundColor : ''}`
			].join(' ')}
			onerror={() => (imageError = true)}
		/>
	</figure>
{:else}
	<span class="absolute text-sm">
		{altText}
	</span>
{/if}
