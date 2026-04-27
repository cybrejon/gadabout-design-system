<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Progress from '../atoms/Progress.svelte';
	import ContainerDecorator from '../utils/ContainerDecorator.svelte';

	const { Story } = defineMeta({
		title: 'Component/Atoms/Forms/Progress',
		component: Progress,
		tags: ['autodocs'],
		// @ts-expect-error: seems to be a bug => https://github.com/storybookjs/storybook/issues/29951
		decorators: [() => ContainerDecorator]
	});

	const progress_value = 90;
</script>

<Story
	name="Main"
	args={{
		label: 'Loading...',
		valueLabel: `${progress_value}%`,
		value: 90
	}}
/>
