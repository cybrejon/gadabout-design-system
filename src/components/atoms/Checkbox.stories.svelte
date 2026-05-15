<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Checkbox from './Checkbox.svelte';
	import ContainerDecorator from '../utils/ContainerDecorator.svelte';

	const { Story } = defineMeta({
		title: 'Component/Atoms/Forms/Checkbox',
		component: Checkbox,
		tags: ['autodocs'],
		decorators: [() => ContainerDecorator]
	});
</script>

<Story
	name="Normal"
	args={{
		labelText: 'Checkbox'
	}}
/>

<Story
	name="Indeterminate"
	args={{
		indeterminate: true,
		labelText: 'Checkbox'
	}}
/>
