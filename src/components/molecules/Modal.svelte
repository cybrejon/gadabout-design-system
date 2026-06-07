<script>
	import { Dialog } from 'bits-ui';
	import { fade, scale } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import Button from '../atoms/Button.svelte';

	/**
	 * @typedef {Object} Props
	 * @property {boolean} [open] - Whether the modal is open.
	 * @property {import('svelte').Snippet} trigger - The trigger element to open the modal.
	 * @property {import('svelte').Snippet} title - The modal title.
	 * @property {import('svelte').Snippet} [description] - The modal description.
	 * @property {import('svelte').Snippet} [children] - The main content of the modal.
	 * @property {import('svelte').Snippet} [footer] - The footer content of the modal.
	 * @property {boolean} [closeOnOutsideClick] - Whether to close the modal when clicking outside.
	 * @property {boolean} [closeOnEscape] - Whether to close the modal when pressing escape.
	 * @property {string} [class] - Additional CSS classes for the modal content.
	 * @property {() => void} [onOpenChange] - Callback for when the open state changes.
	 */

	/** @type {Props} */
	let {
		open = $bindable(false),
		trigger,
		title,
		description,
		children,
		footer,
		closeOnOutsideClick = true,
		closeOnEscape = true,
		class: className = '',
		onOpenChange
	} = $props();
</script>

<Dialog.Root bind:open {onOpenChange}>
	{#if trigger}
		<Dialog.Trigger asChild>
			{@render trigger()}
		</Dialog.Trigger>
	{/if}

	<Dialog.Portal>
		<Dialog.Overlay
			transition={fade}
			transitionConfig={{ duration: 200, easing: cubicOut }}
			class="fixed inset-0 z-50 bg-black/40 backdrop-blur-[2px]"
		/>
		<Dialog.Content
			transition={scale}
			transitionConfig={{ duration: 200, start: 0.95, easing: cubicOut }}
			{closeOnOutsideClick}
			{closeOnEscape}
			class="fixed top-1/2 left-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-xl border bg-card shadow-xl outline-none {className}"
		>
			<div class="flex items-center justify-between border-b border-b-border p-4">
				<Dialog.Title class="tracking-tight text-foreground">
					{@render title()}
				</Dialog.Title>

				<Dialog.Close asChild>
					{#snippet child({ props })}
						<Button {...props} class="text-foreground-alt" variant="outline alt" size="sm">
							<span class="icon-[lucide--x]"></span>
							<span class="sr-only">Close</span>
						</Button>
					{/snippet}
				</Dialog.Close>
			</div>

			<div class="flex flex-col flex-nowrap gap-y-4 px-4 py-3">
				{#if description}
					<Dialog.Description class="text-sm text-foreground-alt">
						{@render description()}
					</Dialog.Description>
				{/if}
				<div>
					{@render children?.()}
				</div>
			</div>

			{#if footer}
				<div class="flex flex-row-reverse items-center gap-3 px-4 py-3">
					{@render footer()}
				</div>
			{/if}
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
