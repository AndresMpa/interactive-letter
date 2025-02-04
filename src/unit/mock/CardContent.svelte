<script lang="ts">
	import Card from '$lib/components/Card.svelte';

	interface Props {
		headingContent: string;
		headingClass: string;
		paragraphContent: string;
		paragraphClass: string;
	}

	const { headingContent, headingClass, paragraphContent, paragraphClass }: Props = $props();
</script>

<Card>
	<article>
		<h1 class={headingClass}>{headingContent}</h1>
		<p class={paragraphClass}>{paragraphContent}</p>
	</article>
</Card>
