<script lang="ts">
	interface Props {
		value?: string;
		placeholder?: string;
		label?: string;
		label_bottom?: string;
		icon?: string;
		type?: string;
	}
	let {
		value = '',
		placeholder = 'Enter text',
		label = '',
		label_bottom = '',
		icon,
		type = 'text'
	}: Props = $props();
	import Label from './Label.svelte';
</script>

<div class="flex flex-col gap-1">
	{#if label}
		<Label>
			{label}
		</Label>
	{/if}
	{#if icon}
		<div class="relative">
			<span class="absolute top-3.75 left-4 {icon}"></span>
			<input
				class="rounded-xl border border-2 bg-card py-3 pr-4 pl-10 text-sm placeholder:text-sm placeholder:text-foreground-alt focus-visible:outline-primary"
				{type}
				bind:value
				{placeholder}
			/>
		</div>
	{:else}
		<input
			class="rounded-xl border border-2 bg-card px-4 py-3 text-sm placeholder:text-sm placeholder:text-foreground-alt focus-visible:outline-primary"
			{type}
			bind:value
			{placeholder}
		/>
	{/if}
	{#if label_bottom}
		<Label>
			{label_bottom}
		</Label>
	{/if}
</div>
