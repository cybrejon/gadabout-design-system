<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import TextArea from './TextArea.svelte';
	import ContainerDecorator from '../utils/ContainerDecorator.svelte';

	const { Story } = defineMeta({
		title: 'Component/Atoms/Forms/TextArea',
		component: TextArea,
		parameters: {
			docs: {
				controls: {
					exclude: ['placeholder']
				}
			}
		},
		tags: ['autodocs'],
		// @ts-expect-error: seems to be a bug => https://github.com/storybookjs/storybook/issues/29951
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
