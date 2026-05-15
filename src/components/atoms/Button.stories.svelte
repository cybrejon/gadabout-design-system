<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Button from './Button.svelte';
	import ContainerDecorator from '../utils/ContainerDecorator.svelte';

	const { Story } = defineMeta({
		title: 'Component/Atoms/Forms/Button',
		component: Button,
		tags: ['autodocs'],
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
