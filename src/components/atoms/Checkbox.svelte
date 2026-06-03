<script>
	import { Checkbox, Label, useId } from 'bits-ui';

	/**
	 * @typedef {Object} Props
	 * @property {string} [id] - The unique identifier for the checkbox.
	 * @property {boolean | "indeterminate"} [checked] - The checked state of the checkbox.
	 * @property {HTMLElement | null} [ref] - The reference to the checkbox element.
	 * @property {HTMLElement | null} [labelRef] - The reference to the label element.
	 * @property {string} [labelText] - The text label for the checkbox.
	 */

	/** @type {Props} */
	let {
		id = useId(),
		checked = $bindable(false),
		ref = $bindable(null),
		labelRef = $bindable(null),
		labelText,
		...restProps
	} = $props();
</script>

<div class="group inline-flex cursor-pointer flex-nowrap items-center justify-center gap-2">
	<Checkbox.Root
		{id}
		bind:checked
		bind:ref
		{...restProps}
		class="flex cursor-pointer items-center justify-center"
	>
		{#snippet children({ checked, indeterminate })}
			{#if indeterminate}
				<div class="flex h-5 w-5 items-center justify-center rounded-md bg-primary p-1">
					<span class="icon-[lucide--minus] text-xl text-primary-foreground"></span>
				</div>
			{:else if checked}
				<div class="flex h-5 w-5 items-center justify-center rounded-md bg-primary p-1">
					<span class="icon-[lucide--check] text-xl text-primary-foreground"></span>
				</div>
			{:else}
				<div
					class="flex h-5 w-5 items-center justify-center rounded-md p-1 inset-ring-2 group-hover:text-secondary"
				>
					<span class="icon-[lucide--check] text-xl text-primary-foreground opacity-0"></span>
				</div>
			{/if}
		{/snippet}
	</Checkbox.Root>
	<Label.Root for={id} bind:ref={labelRef} class="mt-1 cursor-pointer font-medium">
		{labelText}
	</Label.Root>
</div>
