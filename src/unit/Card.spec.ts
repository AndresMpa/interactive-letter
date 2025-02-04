// @vitest-environment jsdom

import { render, screen, cleanup } from '@testing-library/svelte';
import { describe, test, expect } from 'vitest';

import Card from '$lib/components/Card.svelte';
import CardContent from './mock/CardContent.svelte';
import { log } from 'console';

describe('Card Component', () => {
	test('Renders the card with the correct title and content', () => {
		const title = 'Card Title';
		const text = 'Card Content';

		render(Card, { props: { title, text } });

		const cardTitle = screen.getByRole('heading', { name: title });

		expect(cardTitle).toBeTruthy();
		expect(cardTitle.textContent).toContain(title);

		const cardText = screen.getByRole('paragraph');

		expect(cardText).toBeTruthy();
		expect(cardText.textContent).toContain(text);

		cleanup();
	});

	test('Renders the card with the correct extra classes', () => {
		const title = 'Card Title';
		const text = 'Card Content';
		const classExtra = 'bg-red-500';

		render(Card, { props: { title, text, classExtra } });

		const card = screen.getByRole('main');

		expect(card).toBeTruthy();
		expect(card.getAttribute('class')).toContain(classExtra);

		cleanup();
	});

	test('Renders the card with the proper class according to side specification', () => {
		const title = 'Card Title';
		const text = 'Card Content';

		const sides = [
			{ side: 'left', expectedSide: 'text-left' },
			{ side: 'right', expectedSide: 'text-right' },
			{ side: 'center', expectedSide: 'text-center' },
			{ side: undefined, expectedSide: '' }
		] as const;
		let card;

		sides.forEach(({ side, expectedSide }) => {
			render(Card, { props: { title, text, side } });

			card = screen.getByRole('presentation');

			expect(card).toBeTruthy();
			expect(card.getAttribute('class')).toContain(expectedSide);

			cleanup(); // Ensure a fresh render
		});
	});

	test('Renders children content when no title or text is provided, but children', () => {
		const headingContent = 'This is a custom slot!';
		const headingClass = 'bg-red-50';
		const paragraphContent = 'With some content';
		const paragraphClass = 'text-blue-500';

		render(CardContent, { props: {  
         headingContent, headingClass, paragraphClass, paragraphContent  
        } });

		const children = screen.getByRole('article');

		expect(children).toBeTruthy();

		const heading = screen.getByRole('heading');

		expect(heading).toBeTruthy();
		expect(heading.textContent).toContain(headingContent);
		expect(heading.getAttribute('class')).toContain(headingClass);

		const paragraph = screen.getByRole('paragraph');

		expect(paragraph).toBeTruthy();
		expect(paragraph.textContent).toContain(paragraphContent);
		expect(paragraph.getAttribute('class')).toContain(paragraphClass);

		cleanup();
	});
});
