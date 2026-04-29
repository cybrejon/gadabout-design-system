<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		icon?: Snippet;
		title?: string;
		text?: string;
	}

	let { icon, title = 'PRIMARY FOCUS', text = 'Technical Compliance' }: Props = $props();
</script>

<div class="flex min-w-40 flex-col gap-1 rounded-lg p-2 ring ring-border">
	<div class="flex items-center gap-1 text-xxs text-foreground-alt">
		{#if icon}
			{@render icon()}
		{/if}
		<p class="mt-0.5 font-medium">{title.toUpperCase()}</p>
	</div>
	<p class="text-xs">{text}</p>
</div>
