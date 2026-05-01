<!-- full disclosure: the entire radiogroup component codebase and documentation contains ai assisted work -->

<script lang="ts">
	import { RadioGroup, Label, type WithoutChildrenOrChild, useId } from 'bits-ui';

	type Item = {
		value: string;
		label: string;
		disabled?: boolean;
	};

	type Props = WithoutChildrenOrChild<RadioGroup.RootProps> & {
		items: Item[];
		class?: string;
	};

	let {
		value = $bindable(''),
		ref = $bindable(null),
		items,
		orientation = 'vertical',
		class: className,
		...restProps
	}: Props = $props();
</script>

<RadioGroup.Root
	bind:value
	bind:ref
	{orientation}
	class="flex {orientation === 'vertical' ? 'flex-col gap-3' : 'flex-row gap-6'} {className}"
	{...restProps}
>
	{#each items as item, i (i)}
		{@const id = useId()}
		<div class="group flex items-center gap-2">
			<RadioGroup.Item
				{id}
				value={item.value}
				disabled={item.disabled}
				class="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full outline-offset-2 transition-all focus-visible:outline-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-50"
			>
				{#snippet children({ checked })}
					{#if checked}
						<div class="flex h-5 w-5 items-center justify-center rounded-full bg-primary p-1.5">
							<div class="h-full w-full rounded-full bg-primary-foreground"></div>
						</div>
					{:else}
						<div
							class="h-5 w-5 rounded-full inset-ring-2 inset-ring-border transition-all group-hover:inset-ring-secondary"
						></div>
					{/if}
				{/snippet}
			</RadioGroup.Item>
			<Label.Root
				for={id}
				class="mt-0.5 cursor-pointer leading-none font-medium transition-colors group-hover:text-secondary {item.disabled
					? 'cursor-not-allowed opacity-50'
					: ''}"
			>
				{item.label}
			</Label.Root>
		</div>
	{/each}
</RadioGroup.Root>
