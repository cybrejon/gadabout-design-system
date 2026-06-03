<script>
	import { Label } from 'bits-ui';

	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} children - The content to be rendered inside the label.
	 * @property {string} [class] - Additional CSS classes.
	 * @property {string} [for] - The ID of the form element the label is associated with.
	 * @property {HTMLElement | null} [el] - Reference to the label element.
	 */

	/** @type {Props} */
	let { children, class: className = '', for: for_attribute, el = $bindable(null) } = $props();
</script>

<Label.Root
	bind:ref={el}
	for={for_attribute}
	class="text-xs font-semibold tracking-wide text-foreground-alt {className}"
>
	{@render children()}
</Label.Root>
