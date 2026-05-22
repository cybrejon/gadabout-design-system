<script>
	import { Label } from 'bits-ui';

	let { children, class: className = '', for: for_attribute, el = $bindable(null) } = $props();
</script>

<Label.Root
	bind:ref={el}
	for={for_attribute}
	class="text-xs font-semibold tracking-wide text-foreground-alt {className}"
>
	{@render children()}
</Label.Root>
