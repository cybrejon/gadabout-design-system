<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import ContainerDecorator from '../utils/ContainerDecorator.svelte';
	import Button from './Button.svelte';
	import Logo from './Logo.svelte';

	const { Story } = defineMeta({
		title: 'Component/Atoms/Forms/Button',
		component: Button,
		decorators: [() => ContainerDecorator]
	});
</script>

<Story
	name="Normal"
	args={{
		variant: 'normal'
	}}
>
	Button
</Story>

<Story
	name="Ghost"
	args={{
		variant: 'ghost'
	}}
>
	Button
</Story>

<Story
	name="Outline"
	args={{
		variant: 'outline'
	}}
>
	Button
</Story>

<Story
	name="Outline Alternative"
	args={{
		variant: 'outline alt'
	}}
>
	Button
</Story>

<Story
	name="Destructive"
	args={{
		variant: 'destructive'
	}}
>
	Button
</Story>

<Story
	name="Text"
	args={{
		variant: 'text'
	}}
>
	Button
</Story>

<Story
	name="Small"
	args={{
		size: 'sm'
	}}
>
	Button
</Story>

<Story
	name="Text Medium"
	args={{
		size: 'text md',
		variant: 'text'
	}}
>
	Button
</Story>

<Story
	name="Text Small"
	args={{
		size: 'text sm',
		variant: 'text'
	}}
>
	Button
</Story>

<Story name="Sidebar">
	{#snippet template()}
		<div class="sidebar flex w-60 flex-col flex-nowrap rounded-[17px] border p-1">
			<Logo class="w-40 py-4 pl-2" />
			<Button size="sidebar">Dashboard</Button>
			<Button size="sidebar" variant="ghost">Reports</Button>
			<Button size="sidebar" variant="ghost">Setting</Button>
		</div>
	{/snippet}
</Story>
