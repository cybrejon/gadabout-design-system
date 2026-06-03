<script>
	import { Tooltip } from 'bits-ui';
	import { fly } from 'svelte/transition';

	/**
	 * @typedef {Object} Props
	 * @property {boolean} [open] - The open state of the tooltip.
	 * @property {number} [delayDuration] - The duration in milliseconds before the tooltip opens.
	 * @property {import('svelte').Snippet} [children] - The content to be rendered inside the tooltip.
	 * @property {import('svelte').Snippet} trigger - The element that triggers the tooltip.
	 * @property {import('bits-ui').TooltipTriggerProps} [triggerProps] - Props to pass to the trigger element.
	 * @property {string} [class] - Additional CSS classes for the tooltip content.
	 * @property {import('bits-ui').TooltipRootProps} [restProps] - Any other props to pass to the underlying tooltip element.
	 */

	/** @type {Props} */
	let {
		open = $bindable(false),
		delayDuration = 400,
		children,
		trigger,
		triggerProps = {},
		class: className,
		...restProps
	} = $props();
</script>

<!--
 NOTE: The Tooltip component requires a `Tooltip.Provider` to be present
 higher up in the component tree (ideally in your root +layout.svelte).
 Without it, the Tooltip will not function correctly.
-->
<Tooltip.Root {delayDuration} bind:open {...restProps}>
	<Tooltip.Trigger
		class="inline-flex cursor-default items-center justify-center rounded-md outline-offset-2 transition-colors focus-visible:outline-2 focus-visible:outline-primary"
		{...triggerProps}
	>
		{@render trigger()}
	</Tooltip.Trigger>
	<Tooltip.Portal>
		<Tooltip.Content
			sideOffset={8}
			class="z-200 max-w-xs overflow-hidden rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground shadow-lg {className}"
		>
			<div in:fly={{ y: 4, duration: 200 }} out:fly={{ y: 4, duration: 150 }}>
				<Tooltip.Arrow class="text-primary" />
				{@render children?.()}
			</div>
		</Tooltip.Content>
	</Tooltip.Portal>
</Tooltip.Root>
