<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Dropdown from '../molecules/Dropdown.svelte';
	import ContainerDecorator from '../utils/ContainerDecorator.svelte';

	const { Story } = defineMeta({
		title: 'Component/Molecules/Navigation/Dropdown',
		component: Dropdown,
		tags: ['autodocs'],
		// @ts-expect-error: seems to be a bug => https://github.com/storybookjs/storybook/issues/29951
		decorators: [() => ContainerDecorator]
	});
</script>

<Story name="Main">
	{#snippet template()}
		<Dropdown
			items={[
				{
					name: 'Settings',
					callback: () => alert('settings')
				},
				{
					name: 'Sign-out',
					callback: () => alert('sign out')
				}
			]}
		>
			{#snippet icon()}
				<span class="icon-[lucide--ellipsis]"></span>
			{/snippet}
		</Dropdown>
	{/snippet}
</Story>
