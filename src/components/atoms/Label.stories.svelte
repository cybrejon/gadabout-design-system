<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Label from './Label.svelte';
	import ContainerDecorator from '../utils/ContainerDecorator.svelte';

	const { Story } = defineMeta({
		title: 'Component/Atoms/Forms/Label',
		component: Label,
		tags: ['autodocs'],
		decorators: [() => ContainerDecorator]
	});
</script>

<Story name="Normal">
	<span>Label</span>
</Story>
