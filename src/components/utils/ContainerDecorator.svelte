<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="flex flex-col items-center justify-center gap-12">
	{@render children()}
</div>
