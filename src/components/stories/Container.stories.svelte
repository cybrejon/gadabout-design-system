<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Container from '../atoms/Container.svelte';
	import ContainerDecorator from '../utils/ContainerDecorator.svelte';

	const { Story } = defineMeta({
		title: 'Component/Atoms/Layout/Container',
		component: Container,
		tags: ['autodocs'],
		// @ts-expect-error: seems to be a bug => https://github.com/storybookjs/storybook/issues/29951
		decorators: [() => ContainerDecorator]
	});
</script>

<Story name="Main">Container</Story>
