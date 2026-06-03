<!-- full disclosure: the entire radiogroup component codebase and documentation contains ai assisted work -->

<script>
	import { RadioGroup, Label, useId } from 'bits-ui';

	/**
	 * @typedef {Object} RadioItem
	 * @property {string} value - The value of the radio item.
	 * @property {string} label - The display label for the radio item.
	 * @property {boolean} [disabled] - Whether the radio item is disabled.
	 */

	/**
	 * @typedef {Object} Props
	 * @property {string} [value] - The currently selected value.
	 * @property {HTMLElement | null} [ref] - Reference to the radio group element.
	 * @property {RadioItem[]} items - The list of radio items to render.
	 * @property {'vertical' | 'horizontal'} [orientation] - The layout orientation of the radio group.
	 * @property {string} [class] - Additional CSS classes.
	 * @property {import('bits-ui').RadioGroupRootProps} [restProps] - Any other props to pass to the underlying radio group element.
	 */

	/** @type {Props} */
	let {
		value = $bindable(''),
		ref = $bindable(null),
		items,
		orientation = 'vertical',
		class: className,
		...restProps
	} = $props();
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
