<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import ContainerDecorator from '../utils/ContainerDecorator.svelte';
	import Spinner from './Spinner.svelte';

	const { Story } = defineMeta({
		title: 'Component/Atoms/Feedback/Spinner',
		component: Spinner,
		decorators: [() => ContainerDecorator]
	});
</script>

<Story name="Small" args={{ size: 'sm' }} />

<Story name="Medium" args={{ size: 'md' }} />

<Story name="Large" args={{ size: 'lg' }} />

<Story
	name="Custom Color"
	args={{
		size: 'md',
		class: 'text-primary'
	}}
/>

<Story
	name="Secondary Color"
	args={{
		size: 'md',
		class: 'text-secondary'
	}}
/>
