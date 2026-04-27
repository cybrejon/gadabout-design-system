<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Label from '../atoms/Label.svelte';
	import ContainerDecorator from '../utils/ContainerDecorator.svelte';

	const { Story } = defineMeta({
		title: 'Component/Atoms/Forms/Label',
		component: Label,
		tags: ['autodocs'],
		// @ts-expect-error: seems to be a bug => https://github.com/storybookjs/storybook/issues/29951
		decorators: [() => ContainerDecorator]
	});
</script>

<Story name="Normal">
	<span>Label</span>
</Story>
