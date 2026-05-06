<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import InfoChip from './InfoChip.svelte';
	import ContainerDecorator from '../utils/ContainerDecorator.svelte';

	const { Story } = defineMeta({
		title: 'Component/Molecules/Cards/InfoChip',
		component: InfoChip,
		tags: ['autodocs'],
		// @ts-expect-error: seems to be a bug => https://github.com/storybookjs/storybook/issues/29951
		decorators: [() => ContainerDecorator]
	});
</script>

<Story name="Main" />

<Story name="Icon" asChild>
	<InfoChip>
		{#snippet icon()}
			<span class="icon-[lucide--focus]"></span>
		{/snippet}
	</InfoChip>
</Story>
