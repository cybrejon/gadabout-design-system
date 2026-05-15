<script>
	import { Label } from 'bits-ui';
	let { children, class: className = '', for: for_attribute } = $props();
</script>

<Label.Root
	for={for_attribute}
	class="text-xs font-semibold tracking-wide text-foreground-alt {className}"
>
	{@render children()}
</Label.Root>
