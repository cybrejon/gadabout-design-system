<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import RadioGroup from '../atoms/RadioGroup.svelte';
	import ContainerDecorator from '../utils/ContainerDecorator.svelte';

	const items = [
		{ value: 'option-1', label: 'Option 1' },
		{ value: 'option-2', label: 'Option 2' },
		{ value: 'option-3', label: 'Option 3', disabled: true },
		{ value: 'option-4', label: 'Option 4' }
	];

	const { Story } = defineMeta({
		title: 'Component/Atoms/Forms/RadioGroup',
		component: RadioGroup,
		tags: ['autodocs'],
		// @ts-expect-error: seems to be a bug => https://github.com/storybookjs/storybook/issues/29951
		decorators: [() => ContainerDecorator]
	});
</script>

<Story
	name="Vertical"
	args={{
		items,
		value: 'option-1',
		orientation: 'vertical'
	}}
/>

<Story
	name="Horizontal"
	args={{
		items,
		value: 'option-1',
		orientation: 'horizontal'
	}}
/>
