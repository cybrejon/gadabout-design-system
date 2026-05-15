<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		class?: string;
	}

	let { children, class: className = '' }: Props = $props();
</script>

<div class="rounded-2xl border border-[1.75px] bg-card p-5 {className}">
	{@render children()}
</div>
