<script lang="ts">
	import { Label } from 'bits-ui';
	import type { Snippet } from 'svelte';
	interface Props {
		children: Snippet;
		class?: string;
		for?: string;
	}
	let { children, class: className = '', for: for_attribute }: Props = $props();
</script>

<Label.Root
	for={for_attribute}
	class="text-xs font-semibold tracking-wide text-foreground-alt {className}"
>
	{@render children()}
</Label.Root>
