<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Accordion from './Accordion.svelte';
	import ContainerDecorator from '../utils/ContainerDecorator.svelte';

	const { Story } = defineMeta({
		title: 'Component/Molecules/Cards/Accordion',
		component: Accordion,
		tags: ['autodocs'],
		decorators: [() => ContainerDecorator]
	});

	const sampleItems = [
		{
			id: 'item-1',
			title: 'What is The Gadabout.ai Design System?',
			content:
				'Gadabout.ai DS is a comprehensive Svelte 5 and Tailwind CSS v4 design system built with Bits UI primitives. It focuses on premium design aesthetics, accessibility, and high performance.'
		},
		{
			id: 'item-2',
			title: 'How do I install the design system?',
			content:
				'You can install it by cloning the repository and running npm install. All dependencies, including Tailwind CSS v4 and Bits UI, will be installed automatically.'
		},
		{
			id: 'item-3',
			title: 'Is it accessible?',
			content:
				'Yes! Gadabout.ai DS is built on top of Bits UI, which conforms to the WAI-ARIA design patterns. It supports keyboard navigation, screen reader accessibility, and proper ARIA states out of the box.'
		}
	];

	const sampleItemsWithDisabled = [
		...sampleItems,
		{
			id: 'item-4',
			title: 'Disabled Section (Read-only)',
			content: 'This section cannot be opened because it is disabled.',
			disabled: true
		}
	];
</script>

<Story name="Bordered">
	{#snippet template()}
		<div class="w-full max-w-lg">
			<Accordion items={sampleItems} variant="bordered" type="single" />
		</div>
	{/snippet}
</Story>

<Story name="Separated">
	{#snippet template()}
		<div class="w-full max-w-lg">
			<Accordion items={sampleItems} variant="separated" type="single" />
		</div>
	{/snippet}
</Story>

<Story name="Ghost">
	{#snippet template()}
		<div class="w-full max-w-lg">
			<Accordion items={sampleItems} variant="ghost" type="single" />
		</div>
	{/snippet}
</Story>

<Story name="Multiple">
	{#snippet template()}
		<div class="w-full max-w-lg">
			<Accordion items={sampleItems} variant="separated" type="multiple" />
		</div>
	{/snippet}
</Story>

<Story name="Disabled">
	{#snippet template()}
		<div class="w-full max-w-lg">
			<Accordion items={sampleItemsWithDisabled} variant="bordered" type="single" />
		</div>
	{/snippet}
</Story>

<Story name="Custom">
	{#snippet template()}
		<div class="w-full max-w-lg">
			<Accordion items={sampleItems} variant="separated" type="single">
				{#snippet titleSnippet(item)}
					<div class="flex items-center gap-3">
						{#if item.id === 'item-1'}
							<span class="icon-[lucide--sparkles] text-lg text-accent"></span>
						{:else if item.id === 'item-2'}
							<span class="icon-[lucide--download] text-lg text-secondary"></span>
						{:else}
							<span class="icon-[lucide--shield-check] text-lg text-primary"></span>
						{/if}
						<span class="font-bold text-foreground">{item.title}</span>
					</div>
				{/snippet}
				{#snippet contentSnippet(item)}
					<div class="rounded-lg border border-primary/10 bg-primary/5 p-4">
						<h5 class="mb-2 font-semibold text-primary">Detailed Response:</h5>
						<p class="text-foreground">{item.content}</p>
					</div>
				{/snippet}
			</Accordion>
		</div>
	{/snippet}
</Story>
