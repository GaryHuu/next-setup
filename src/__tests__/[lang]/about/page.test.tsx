import Home from '@/app/[lang]/page';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

// Mock the getDictionary function
vi.mock('@/lib/dictionary', async () => {
	// Define your mock data here
	const mockData = {
		page: {
			home: {
				title: 'Mocked Title',
				description: 'Mocked Description',
			},
		},
	};

	// Return the mocked getDictionary function
	return {
		getDictionary: async () => mockData,
	};
});

describe('Home Page', () => {
	it('renders correctly with the given language', async () => {
		// Act
		render(await Home({ params: { lang: 'en' } }));

		// Find the h1 element with the text "Mocked Title"
		const titleElement = await screen.findByText('Mocked Title 1');

		// Assert that the h1 element is in the document
		expect(titleElement).toBeDefined();
	});
});
