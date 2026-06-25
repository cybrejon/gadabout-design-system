<script>
	import { toast } from '../../lib/toast.svelte';
	import Button from './Button.svelte';
	import ToastTooltip from './Tooltip.svelte';
	import { Tooltip } from 'bits-ui';
	import { fly } from 'svelte/transition';

	/**
	 * @typedef {Object} ToastAction
	 * @property {string} label - The label for the action button.
	 * @property {Function} onClick - The callback function to execute when the button is clicked.
	 */

	/**
	 * @typedef {Object} Props
	 * @property {string} id - Unique identifier for the toast.
	 * @property {string} [title] - The title of the toast.
	 * @property {string} [description] - The description of the toast.
	 * @property {'default' | 'success' | 'error' | 'warning' | 'info'} [type] - The type of toast, which determines its styling.
	 * @property {ToastAction} [action] - An optional action button to display in the toast.
	 */

	/** @type {Props} */
	let { id, title, description, type = 'default', action } = $props();

	const typeStyles = {
		default: 'bg-card border text-card-foreground',
		success: 'bg-card border text-card-foreground',
		error: 'bg-card border text-card-foreground',
		warning: 'bg-card border text-card-foreground',
		info: 'bg-card border text-card-foreground'
	};
</script>

<div
	transition:fly={{ y: 20, duration: 300 }}
	class="flex w-full max-w-sm items-center justify-between overflow-hidden rounded-xl border p-4 shadow-[0_12px_10px_rgba(0,0,0,.05)] {typeStyles[
		type
	]}"
	role="alert"
	aria-live="assertive"
>
	<div class="flex flex-nowrap items-center gap-4 pl-1">
		{#if type === 'success'}
			<span class="icon-[lucide--check] text-accent"></span>
		{:else if type === 'error'}
			<span class="icon-[lucide--frown] text-destructive"></span>
		{:else if type === 'warning'}
			<span class="icon-[lucide--info]"></span>
		{:else if type === 'info'}
			<span class="icon-[lucide--lightbulb]"></span>
		{/if}
		<div class="flex flex-col gap-y-1 pr-4">
			{#if title}
				<span class={type === 'error' && 'text-destructive'}>
					<p class="text-sm leading-none font-semibold">{title}</p>
				</span>
			{/if}
			{#if description}
				<p class="text-muted-foreground text-xs">{description}</p>
			{/if}
		</div>
	</div>

	<div class="flex items-center gap-2">
		{#if action}
			<Button
				variant="outline"
				size="sm"
				onclick={() => {
					action.onClick();
					toast.dismiss(id);
				}}
			>
				{action.label}
			</Button>
		{/if}

		<Button onclick={() => toast.dismiss(id)} variant="text" size="text" aria-label="Close">
			<span class="icon-[lucide--x]"></span>
		</Button>
	</div>
</div>
