<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Checkbox from './Checkbox.svelte';
	import ContainerDecorator from '../utils/ContainerDecorator.svelte';

	const { Story } = defineMeta({
		title: 'Component/Atoms/Forms/Checkbox',
		component: Checkbox,
		tags: ['autodocs'],
		// @ts-expect-error: seems to be a bug => https://github.com/storybookjs/storybook/issues/29951
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
