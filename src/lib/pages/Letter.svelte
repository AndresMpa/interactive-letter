<script lang="ts">
	import Avatar from '$lib/components/Avatar.svelte';
	import Image from '$lib/components/Image.svelte';
	import Card from '$lib/components/Card.svelte';

	import background from '$lib/assets/background.webp';
	import avatar from '$lib/assets/avatar.webp';

	import BodySvx from '$lib/content/body.svx';
	import TitleSvx from '$lib/content/title.svx';
</script>

<Image src={`${background}`} altText="Test image" />

<div class="relative mx-auto w-9/12">
	<Card classExtra="bg-red-200 rounded-b-lg pt-14">
		<div class="text-center">
			<h1 class="mb-6 mt-1 text-2xl">
				<TitleSvx></TitleSvx>
			</h1>
			<BodySvx></BodySvx>
		</div>
	</Card>

	<div class="absolute left-1/2 top-8 -translate-x-1/2 -translate-y-28">
		<Avatar src={`${avatar}`} altText="Test avatar" backgroundColor="bg-red-200" />
	</div>
</div>
