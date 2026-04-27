<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Button from '../atoms/Button.svelte';
	import ContainerDecorator from '../utils/ContainerDecorator.svelte';

	const { Story } = defineMeta({
		title: 'Component/Atoms/Forms/Button',
		component: Button,
		tags: ['autodocs'],
		// @ts-expect-error: seems to be a bug => https://github.com/storybookjs/storybook/issues/29951
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
	name="Destructive"
	args={{
		variant: 'destructive'
	}}
>
	Button
</Story>
