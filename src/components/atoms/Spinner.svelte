<script>
	/**
	 * @typedef {Object} Props
	 * @property {'sm' | 'md' | 'lg'} [size] - The size of the spinner.
	 * @property {string} [class] - Additional CSS classes.
	 * @property {string} [label] - Aria label for the spinner.
	 */

	/** @type {Props} */
	let { size = 'md', class: className = '', label = 'Loading...', ...restProps } = $props();

	const sizes = {
		sm: 'h-4 w-4',
		md: 'h-8 w-8',
		lg: 'h-12 w-12'
	};
</script>

<div role="status" class="inline-block {className}" {...restProps}>
	<span class="icon-[lucide--loader-circle] block animate-spin {sizes[size] || sizes.md}"></span>
	<span class="sr-only">
		{label}
	</span>
</div>
