<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Input from './Input.svelte';
	import ContainerDecorator from '../utils/ContainerDecorator.svelte';

	const { Story } = defineMeta({
		title: 'Component/Atoms/Forms/Input',
		component: Input,
		parameters: {
			docs: {
				controls: {
					exclude: ['placeholder']
				}
			}
		},
		tags: ['autodocs'],
		decorators: [() => ContainerDecorator]
	});
</script>

<Story
	name="Normal"
	args={{
		placeholder: 'placeholder'
	}}
/>

<Story
	name="Label"
	args={{
		placeholder: 'placeholder',
		label: 'Label'
	}}
/>

<Story
	name="Icon"
	args={{
		placeholder: 'Search',
		icon: 'icon-[lucide--search]'
	}}
/>

<Story
	name="CombinedLabels"
	args={{
		placeholder: 'placeholder',
		label: 'Label',
		label_bottom: 'Bottom label'
	}}
/>

<Story
	name="Invalid"
	args={{
		invalid: true,
		placeholder: 'invalid value'
	}}
/>
