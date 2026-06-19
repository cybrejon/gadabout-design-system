<script>
	import { useId } from 'bits-ui';
	import Label from '../atoms/Label.svelte';

	/**
	 * @typedef {Object} Props
	 * @property {string} [value] - The value of the input field.
	 * @property {string} [placeholder] - The placeholder text.
	 * @property {string} [label] - The label for the input field.
	 * @property {string} [label_bottom] - The label to display below the input field.
	 * @property {string} [icon] - An optional icon class to display inside the input field.
	 * @property {import('svelte/elements').HTMLInputTypeAttribute} [type] - The type of input field.
	 * @property {boolean} [invalid] - Whether the input field is in an invalid state.
	 * @property {string} [id] - The unique identifier for the input field.
	 * @property {string} [class] - Additional CSS classes.
	 * @property {import('svelte/elements').HTMLInputAttributes} [rest] - Any other props to pass to the underlying input element.
	 */

	/** @type {Props} */
	let {
		value = $bindable(''),
		placeholder = 'Enter text',
		label = '',
		label_bottom = '',
		icon,
		type = 'text',
		invalid = false,
		id = useId(),
		class: className,
		...rest
	} = $props();
</script>

<div class="flex flex-col gap-1">
	{#if label}
		<Label for={id}>
			{label}
		</Label>
	{/if}

	<div>
		<div class="relative">
			{#if icon}
				<span class="absolute top-2.75 left-3.5 w-4 {icon} pointer-events-none text-foreground/50"
				></span>
			{/if}
			<input
				{id}
				{type}
				bind:value
				{placeholder}
				class={[
					'w-full rounded-xl border-2 py-2 text-sm outline-3 outline-offset-0 outline-transparent transition-colors placeholder:text-sm focus-visible:ring-transparent',
					icon ? 'pr-2 pl-9' : 'px-3',
					invalid
						? 'border-destructive/20 bg-destructive/5 text-destructive saturate-80 placeholder:text-destructive focus-visible:border-destructive/70 focus-visible:outline-destructive/20 focus-visible:saturate-100'
						: 'border bg-card placeholder:text-foreground-alt focus-visible:border-primary/50 focus-visible:outline-primary/10',
					className
				]}
				{...rest}
			/>
		</div>

		{#if label_bottom}
			<Label for={id} class="font-light opacity-70">
				{label_bottom}
			</Label>
		{/if}
	</div>
</div>
