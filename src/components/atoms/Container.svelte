<script>
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} children - The content to be rendered inside the container.
	 * @property {string} [class] - Additional CSS classes.
	 */

	/** @type {Props} */
	let { children, class: className = '' } = $props();
</script>

<div class="rounded-2xl border bg-card p-5 {className}">
	{@render children()}
</div>
