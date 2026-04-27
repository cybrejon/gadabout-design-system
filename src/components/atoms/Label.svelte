<script lang="ts">
	import { Label } from 'bits-ui';
	import type { Snippet } from 'svelte';
	interface Props {
		children: Snippet;
		class?: string;
	}
	let { children, class: className }: Props = $props();
</script>

<Label.Root class="text-xs font-semibold tracking-wide text-foreground-alt {className}">
	{@render children()}
</Label.Root>
