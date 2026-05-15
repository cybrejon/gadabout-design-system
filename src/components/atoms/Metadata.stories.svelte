<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Metadata from './Metadata.svelte';
	import ContainerDecorator from '../utils/ContainerDecorator.svelte';

	const { Story } = defineMeta({
		title: 'Component/Atoms/Layout/Metadata',
		component: Metadata,
		tags: ['autodocs'],
		decorators: [() => ContainerDecorator]
	});
</script>

<Story
	name="Main"
	args={{
		label: 'SOURCE',
		text: 'Google Search'
	}}
/>

<Story name="Icon" asChild>
	<Metadata label="SOURCE" text="Google Search">
		{#snippet icon()}
			<span class="icon-[lucide--link]"></span>
		{/snippet}
	</Metadata>
</Story>
