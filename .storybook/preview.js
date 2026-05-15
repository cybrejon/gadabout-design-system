import '../src/routes/layout.css';

/** @type { import('@storybook/sveltekit').Preview } */
const preview = {
	tags: ['autodocs'],
	parameters: {
		options: {
			storySort: {
				method: 'alphabetical',
				order: [
					'Welcome',
					'Atoms',
					['Forms', 'Navigation', 'Layout'],
					'Molecules',
					['Forms', 'Navigation', 'Layout']
				]
			}
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},

		a11y: {
			// 'todo' - show a11y violations in the test UI only
			// 'error' - fail CI on a11y violations
			// 'off' - skip a11y checks entirely
			test: 'todo'
		}
	}
};

export default preview;
