<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Pill from '../atoms/Pill.svelte';
	import ContainerDecorator from '../utils/ContainerDecorator.svelte';

	const { Story } = defineMeta({
		title: 'Component/Atoms/Navigation/Pill',
		component: Pill,
		tags: ['autodocs'],
		// @ts-expect-error: seems to be a bug => https://github.com/storybookjs/storybook/issues/29951
		decorators: [() => ContainerDecorator]
	});
</script>

<Story
	name="Normal"
	args={{
		variant: 'normal',
		href: '/'
	}}
>
	Pill (or "Chip")
</Story>

<Story
	name="Ghost"
	args={{
		variant: 'ghost',
		href: '/'
	}}
>
	Pill (or "Chip")
</Story>

<Story
	name="Outline"
	args={{
		variant: 'outline',
		href: '/'
	}}
>
	Pill (or "Chip")
</Story>

<Story
	name="Destructive"
	args={{
		variant: 'destructive',
		href: '/'
	}}
>
	Pill (or "Chip")
</Story>
