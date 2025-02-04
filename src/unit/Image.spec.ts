// @vitest-environment jsdom

// @vitest-environment jsdom

import { render, screen, cleanup } from '@testing-library/svelte';
import { describe, test, expect } from 'vitest';

import Image from '$lib/components/Image.svelte';

describe('Image Component', () => {
	test('Renders the image with the correct src and alt attributes', () => {
		const src =
			'https://fastly.picsum.photos/id/799/200/300.jpg?hmac=q6DulPHgFwTpoeoXzeVRLJ7-2cd-K69VyeJoIpUM5eg';
		const altText = 'Background Image';

		render(Image, { props: { src, altText } });

		const img = screen.getByRole('img', { name: altText });

		expect(img).toBeTruthy();
		expect(img?.getAttribute('src')).toBe(src);
		expect(img?.getAttribute('alt')).toBe(altText);

		cleanup();
	});

	test('Uses the right background color according to TailwindCSS classes', () => {
		const src =
			'https://fastly.picsum.photos/id/799/200/300.jpg?hmac=q6DulPHgFwTpoeoXzeVRLJ7-2cd-K69VyeJoIpUM5eg';
		const altText = 'Background Image';
		const backgroundColor = 'bg-red-500';

		render(Image, { props: { src, altText, backgroundColor } });

		const img = screen.getByRole('img', { name: altText });

		expect(img).toBeTruthy();
		expect(img?.getAttribute('class')).toContain(backgroundColor);

		cleanup();
	});

	test('Applies correct size class based on size prop', () => {
		const src =
			'https://fastly.picsum.photos/id/799/200/300.jpg?hmac=q6DulPHgFwTpoeoXzeVRLJ7-2cd-K69VyeJoIpUM5eg';
		const altText = 'Background Image';

		const sizes = [
			{ size: 'background', expectedSize: 'aspect-4/3' },
			{ size: 'thumbnail', expectedSize: 'aspect-1/1' }
		] as const;
		let img;

		sizes.forEach(({ size, expectedSize }) => {
			render(Image, { props: { src, altText, size } });

			img = screen.getByRole('figure');

			expect(img?.getAttribute('class')).toContain(expectedSize);

			cleanup(); // Ensure a fresh render
		});
	});

	test('Displays alt text when image fails to load', async () => {
		render(Image, { props: { src: 'invalid-url.png', altText: 'Fallback Text' } });

		const img = screen.getByRole('img');

		// Simulate an image loading error
		await img.dispatchEvent(new Event('error'));

		const fallbackText = screen.getByText('Fallback Text');
		expect(fallbackText).toBeTruthy();

		cleanup();
	});
});
