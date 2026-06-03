<script>
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} children - The content to be rendered inside the decorator.
	 */

	/** @type {Props} */
	let { children } = $props();
</script>

<div class="flex flex-col items-center justify-center gap-12">
	{@render children()}
</div>
