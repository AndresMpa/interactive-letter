<script lang="ts">
	interface Props {
		/** The background color of the image */
		backgroundColor?: string;
		/** The size of the image */
		size?: 'large' | 'medium' | 'small';
		/** The alt text of the image */
		altText?: string;
		/** The source of the image */
		src: string;
	}

	const sizeMap = $state({
		small: 32,
		medium: 64,
		large: 128
	});

	const { backgroundColor, size, src, altText = 'Avatar' }: Props = $props();

	let computedSize = size ? sizeMap[size] : sizeMap.large;
	let imageError = $state(false);
</script>

{#if !imageError}
	<figure class="relative flex items-center justify-center overflow-hidden rounded-full">
		<img
			src={`${src}`}
			alt={`${altText}`}
			style:width={`${computedSize}px`}
			style:height={`${computedSize}px`}
			class={[
				'm-5 aspect-square rounded-full p-1',
				`${backgroundColor ? backgroundColor : ''}`,
				`size-${computedSize}`
			].join(' ')}
			onerror={() => (imageError = true)}
		/>
	</figure>
{:else}
	<span class="absolute text-sm">
		{altText}
	</span>
{/if}
