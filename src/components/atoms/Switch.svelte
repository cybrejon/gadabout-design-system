<script>
	import { Switch, Label, useId } from 'bits-ui';

	/**
	 * @typedef {Object} Props
	 * @property {string} [id] - The unique identifier for the switch.
	 * @property {boolean} [checked] - The checked state of the switch.
	 * @property {HTMLElement | null} [ref] - The reference to the switch element.
	 * @property {HTMLElement | null} [labelRef] - The reference to the label element.
	 * @property {string} [labelText] - The text label for the switch.
	 * @property {string} [class] - Additional CSS classes for the root element.
	 */

	/** @type {Props} */
	let {
		id = useId(),
		checked = $bindable(false),
		ref = $bindable(null),
		labelRef = $bindable(null),
		labelText,
		class: className = '',
		...restProps
	} = $props();
</script>

<div class="group inline-flex cursor-pointer flex-nowrap items-center gap-2">
	<Switch.Root
		{id}
		bind:checked
		bind:ref
		{...restProps}
		class="inline-flex h-4.5 w-8 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-border {className}"
	>
		<Switch.Thumb
			class="pointer-events-none block h-3.5 w-3.5 rounded-full bg-white shadow-md ring-0 transition-transform data-[state=checked]:translate-x-3.5 data-[state=unchecked]:translate-x-0"
		/>
	</Switch.Root>
	{#if labelText}
		<Label.Root
			for={id}
			bind:ref={labelRef}
			class="cursor-pointer text-sm font-medium transition-colors select-none group-hover:text-secondary"
		>
			{labelText}
		</Label.Root>
	{/if}
</div>
