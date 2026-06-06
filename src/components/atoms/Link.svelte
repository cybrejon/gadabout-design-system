<script>
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children] - The link content.
	 * @property {string} [href] - The URL the link points to.
	 * @property {'hover' | 'ghost' | 'none'} [variant] - The visual style of the link.
	 * @property {string} [class] - Additional CSS classes.
	 * @property {import('svelte/elements').MouseEventHandler<HTMLAnchorElement>} [onclick] - Click event handler.
	 * @property {string} [target] - The target attribute for the link.
	 * @property {string} [rel] - The rel attribute for the link.
	 * @property {import('svelte/elements').HTMLAnchorAttributes} [restProps] - Any other props to pass to the anchor element.
	 */

	/** @type {Props} */
	let {
		children,
		href = '',
		variant = 'hover',
		class: className = '',
		onclick,
		target,
		rel,
		...restProps
	} = $props();

	const variants = {
		hover: 'underline-offset-4 hover:underline decoration-primary/30 hover:decoration-primary',
		ghost: 'opacity-70 hover:opacity-100 transition-opacity',
		none: ''
	};
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<a
	{href}
	{onclick}
	{target}
	{rel}
	{...restProps}
	class="rounded-sm font-medium text-secondary transition-all focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none {variants[
		variant
	]} {className}"
>
	{#if children}
		{@render children?.()}
	{/if}
</a>
