<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import MyTooltip from './Tooltip.svelte';
	import Button from './Button.svelte';
	import { Tooltip } from 'bits-ui';
	import ContainerDecorator from '../utils/ContainerDecorator.svelte';

	const { Story } = defineMeta({
		title: 'Component/Atoms/Navigation/Tooltip',
		component: MyTooltip,
		tags: ['autodocs'],
		// @ts-expect-error: seems to be a bug => https://github.com/storybookjs/storybook/issues/29951
		decorators: [() => ContainerDecorator]
	});
</script>

<Story name="Normal" asChild>
	<Tooltip.Provider>
		<MyTooltip triggerProps={{ onclick: () => alert('Changes reset!') }}>
			{#snippet trigger()}
				<Button variant="text" size="text"><span class="icon-[lucide--rotate-ccw]"></span></Button>
			{/snippet}
			Reset changes
		</MyTooltip>
	</Tooltip.Provider>
</Story>
