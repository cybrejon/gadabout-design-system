<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Container from './Container.svelte';
	import ContainerDecorator from '../utils/ContainerDecorator.svelte';

	const { Story } = defineMeta({
		title: 'Component/Atoms/Layout/Container',
		component: Container,
		tags: ['autodocs'],
		decorators: [() => ContainerDecorator]
	});
</script>

<Story name="Main">Container</Story>
