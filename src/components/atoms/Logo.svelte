<script>
	/**
	 * @typedef {Object} Props
	 * @property {string} [class] - Additional CSS classes.
	 * @property {any} [restProps] - Any other props to pass to the underlying image element.
	 */

	/** @type {Props} */
	let { class: style = '', ...restProps } = $props();
</script>

<img src="/images/logo.svg" alt="Gadabout" class={style} {...restProps} />
