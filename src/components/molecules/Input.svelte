<script>
	import Label from '../atoms/Label.svelte';

	let {
		value = $bindable(''),
		placeholder = 'Enter text',
		label = '',
		label_bottom = '',
		icon,
		type = 'text',
		invalid = false,
		id = crypto.randomUUID(),
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
						? 'border-destructive/70 bg-destructive/5 text-destructive saturate-80 placeholder:text-destructive focus-visible:outline-destructive/20 focus-visible:saturate-100'
						: 'focus: border bg-card placeholder:text-foreground-alt focus-visible:border-primary/50 focus-visible:outline-primary/10',
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
