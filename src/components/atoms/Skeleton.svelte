<script>
	/**
	 * @typedef {Object} Props
	 * @property {'rect' | 'circle' | 'text'} [variant] - The shape variant of the skeleton.
	 * @property {'pulse' | 'shimmer' | 'none'} [animate] - The animation style of the skeleton.
	 * @property {string} [width] - Custom width (e.g. '100px', '4rem', '100%').
	 * @property {string} [height] - Custom height (e.g. '16px', '1rem').
	 * @property {string} [class] - Additional CSS classes.
	 * @property {string} [style] - Additional inline styles.
	 */

	/** @type {Props} */
	let {
		variant = 'rect',
		animate = 'pulse',
		width,
		height,
		class: className = '',
		style = '',
		...restProps
	} = $props();

	const variants = {
		rect: 'rounded-lg w-full h-8',
		circle: 'rounded-full aspect-square w-12 h-12',
		text: 'rounded h-4 w-full'
	};

	const animations = {
		pulse: 'animate-pulse bg-foreground-alt/10',
		shimmer: 'shimmer bg-foreground-alt/10',
		none: 'bg-foreground-alt/10'
	};

	const inlineStyle = $derived(
		[width ? `width: ${width}` : '', height ? `height: ${height}` : '', style]
			.filter(Boolean)
			.join('; ')
	);
</script>

<div
	class="relative overflow-hidden {variants[variant] || variants.rect} {animations[animate] ||
		animations.pulse} {className}"
	style={inlineStyle || undefined}
	role="status"
	aria-live="polite"
	{...restProps}
>
	<span class="sr-only">Loading...</span>
</div>

<style>
	.shimmer {
		position: relative;
	}

	.shimmer::after {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		transform: translateX(-100%);
		background-image: linear-gradient(
			90deg,
			rgba(255, 255, 255, 0) 0%,
			rgba(255, 255, 255, 0.3) 30%,
			rgba(255, 255, 255, 0.5) 60%,
			rgba(255, 255, 255, 0) 100%
		);
		animation: shimmer-effect 2s infinite cubic-bezier(0.4, 0, 0.2, 1);
		content: '';
	}

	@keyframes shimmer-effect {
		100% {
			transform: translateX(100%);
		}
	}
</style>
