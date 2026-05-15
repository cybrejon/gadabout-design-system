<script>
	import Label from '../atoms/Label.svelte';

	let { label, text, icon } = $props();
</script>

<dl class="leading-5">
	<dd>
		<Label class="text-xxs font-semibold text-foreground-alt">
			{label.toUpperCase()}
		</Label>
	</dd>
	<dt class="flex items-center gap-2 text-sm">
		{#if icon}
			{@render icon()}
		{/if}
		<span class="pt-px">{text}</span>
	</dt>
</dl>
