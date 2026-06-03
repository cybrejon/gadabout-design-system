<script>
	import { Progress, useId } from 'bits-ui';

	/**
	 * @typedef {Object} Props
	 * @property {number} [max] - The maximum value of the progress bar.
	 * @property {number | null} [value] - The current value of the progress bar.
	 * @property {number} [min] - The minimum value of the progress bar.
	 * @property {string} [label] - The label for the progress bar.
	 * @property {string} [valueLabel] - The label for the current value.
	 * @property {'normal' | 'sm'} [size] - The size of the progress bar.
	 * @property {import('bits-ui').ProgressRootProps} [restProps] - Any other props to pass to the underlying progress element.
	 */

	/** @type {Props} */
	let {
		max = 100,
		value = 0,
		min = 0,
		label,
		valueLabel,
		size = 'normal',
		...restProps
	} = $props();

	const labelId = useId();
</script>

<div class="flex w-full flex-col gap-2">
	{#if label}
		<div class="flex items-center justify-between text-sm font-medium">
			<span id={labelId}> {label} </span>
			<span>{valueLabel}</span>
		</div>
	{/if}
	<Progress.Root
		{...restProps}
		class="shadow-mini-inset relative {size === 'normal'
			? 'h-3.75'
			: 'h-2.5'} w-full overflow-hidden rounded-full bg-primary/10 ring-1 ring-primary/20"
		aria-labelledby={labelId}
		aria-valuetext={valueLabel}
		{value}
		{min}
		{max}
	>
		<div
			class="shadow-mini-inset h-full w-full flex-1 rounded-full bg-primary"
			style={`transform: translateX(-${100 - (100 * (value ?? 0)) / 100}%)`}
		></div>
	</Progress.Root>
</div>
