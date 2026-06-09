<script>
	import { Popover } from 'bits-ui';
	import { scale } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	/**
	 * @typedef {Object} Props
	 * @property {boolean} [open] - Whether the popover is open.
	 * @property {import('svelte').Snippet} trigger - The trigger element to open the popover.
	 * @property {import('svelte').Snippet} [title] - Optional title for the popover.
	 * @property {import('svelte').Snippet} [description] - Optional description for the popover.
	 * @property {import('svelte').Snippet} [children] - The main content area of the popover.
	 * @property {import('bits-ui').PopoverContentProps} [contentProps] - Additional props for the popover content.
	 * @property {string} [class] - Additional CSS classes for the popover content.
	 * @property {boolean} [showArrow] - Whether to show the arrow pointing to the trigger.
	 * @property {() => void} [onOpenChange] - Callback for when the open state changes.
	 */

	/** @type {Props} */
	let {
		open = $bindable(false),
		trigger,
		title,
		description,
		children,
		contentProps,
		class: className = '',
		showArrow = true,
		onOpenChange
	} = $props();
</script>

<Popover.Root bind:open {onOpenChange}>
	{#if trigger}
		<Popover.Trigger asChild>
			{#snippet child({ props })}
				<div {...props} class="inline-block">
					{@render trigger()}
				</div>
			{/snippet}
		</Popover.Trigger>
	{/if}

	<Popover.Portal>
		<Popover.Content
			{...contentProps}
			transition={scale}
			transitionConfig={{ duration: 150, start: 0.95, easing: cubicOut }}
			class="z-50 w-72 rounded-xl border border-border bg-card shadow-xl outline-none focus:outline-none {className}"
		>
			{#if title || description}
				<div class="border-b border-b-border p-4">
					{#if title}
						<h4 class="leading-none font-medium">
							{@render title()}
						</h4>
					{/if}
					{#if description}
						<p class="mt-1.5 text-xs text-foreground-alt">
							{@render description()}
						</p>
					{/if}
				</div>
			{/if}
			<div class="p-4">
				{@render children?.()}
			</div>
			{#if showArrow}
				<Popover.Arrow class="fill-card stroke-border stroke-1" />
			{/if}
		</Popover.Content>
	</Popover.Portal>
</Popover.Root>
