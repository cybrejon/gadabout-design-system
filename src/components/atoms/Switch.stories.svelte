<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Switch from './Switch.svelte';
	import ContainerDecorator from '../utils/ContainerDecorator.svelte';

	const { Story } = defineMeta({
		title: 'Component/Atoms/Forms/Switch',
		component: Switch,
		tags: ['autodocs'],
		decorators: [() => ContainerDecorator]
	});
</script>

<Story
	name="Default"
	args={{
		labelText: 'Toggle feature'
	}}
/>

<Story
	name="Checked"
	args={{
		checked: true,
		labelText: 'Toggle feature'
	}}
/>

<Story
	name="Disabled"
	args={{
		disabled: true,
		labelText: 'Disabled setting'
	}}
/>
