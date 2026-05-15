<script>
	import Label from './Label.svelte';

	let {
		value = $bindable(''),
		id = crypto.randomUUID(),
		label = '',
		label_bottom = '',
		placeholder = 'Enter text...',
		invalid = false,
		rows = 5,
		cols = 53,
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
		<textarea
			{id}
			bind:value
			{placeholder}
			{rows}
			{cols}
			class={[
				'block w-full rounded-xl border-2 p-3 text-sm outline-3 outline-offset-0 outline-transparent transition-colors placeholder:text-sm focus-visible:ring-transparent',
				invalid
					? 'border-destructive/70 bg-destructive/5 text-destructive saturate-80 placeholder:text-destructive focus-visible:outline-destructive/20 focus-visible:saturate-100'
					: 'border bg-card placeholder:text-foreground-alt focus-visible:border-primary/50 focus-visible:outline-primary/10',
				className
			]}
			{...rest}
		></textarea>
		{#if label_bottom}
			<Label for={id} class="font-light opacity-70">
				{label_bottom}
			</Label>
		{/if}
	</div>
</div>
