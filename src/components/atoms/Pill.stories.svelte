<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Pill from './Pill.svelte';
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

<Story name="CustomColor" asChild>
	<div class="flex items-center gap-2">
		<Pill class="bg-yellow-500">Yellow</Pill>
		<Pill class="bg-purple-500">Purple</Pill>
		<Pill class="bg-blue-500">Blue</Pill>
	</div>
</Story>
