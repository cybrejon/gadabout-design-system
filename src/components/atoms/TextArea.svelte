<script lang="ts">
	import Label from './Label.svelte';

	interface TextAreaSize {
		rows?: number;
		cols?: number;
	}

	interface Props {
		value?: string;
		placeholder?: string;
		id?: string;
		name?: string;
		size?: TextAreaSize;
		label?: string;
		label_bottom?: string;
		class?: string;
	}

	let {
		value = '',
		id,
		name,
		size = { rows: 5, cols: 53 },
		label = 'Label',
		label_bottom = '',
		placeholder = 'Placeholder',
		class: className
	}: Props = $props();
</script>

<div class="flex flex-col gap-1">
	{#if label}
		<Label for={name}>{label}</Label>
	{/if}

	<div>
		<textarea
			{placeholder}
			form={id}
			class="rounded-xl border border-2 bg-card p-3 text-sm text-foreground outline-3 outline-offset-0 outline-transparent placeholder:text-foreground-alt focus-visible:border-primary/50 focus-visible:ring-transparent focus-visible:outline-primary/10 {className}"
			{id}
			{name}
			rows={size.rows}
			cols={size.cols}>{value}</textarea
		>

		{#if label_bottom}
			<Label class="opacity-70" for={name}>{label_bottom}</Label>
		{/if}
	</div>
</div>
