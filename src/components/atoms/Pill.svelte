<script>
	import { Button } from 'bits-ui';

	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} children - The content to be rendered inside the pill.
	 * @property {'normal' | 'destructive' | 'ghost' | 'outline alt' | 'outline'} [variant] - The visual style of the pill.
	 * @property {string} [href] - An optional URL to render the pill as a link.
	 * @property {string} [class] - Additional CSS classes.
	 */

	/** @type {Props} */
	let { children, variant = 'normal', href, class: className = '' } = $props();

	let styles = {
		normal: 'bg-primary text-primary-foreground active:text-primary-foreground/80',
		destructive: 'bg-destructive text-primary-foreground active:text-primary-foreground/80',
		ghost: 'hover:bg-primary/10 active:bg-primary/20',
		'outline alt':
			'hover:bg-primary/10 active:bg-primary/20 bg-primary/5 inset-ring inset-ring-primary/10',
		outline: 'hover:bg-primary/10 active:bg-primary active:text-primary-foreground inset-ring'
	};
</script>

{#if href}
	<Button.Root
		{href}
		class="inline-flex cursor-pointer flex-nowrap items-center justify-center gap-2 rounded-full px-2.5 pt-1 pb-0.5 text-xxs font-semibold outline-offset-2 transition-colors {styles[
			variant
		]} {className}"
	>
		{@render children()}
	</Button.Root>
{:else}
	<div
		class="pointer-events-none inline-flex flex-nowrap items-center justify-center gap-2 rounded-full border-transparent px-2.5 pt-1 pb-0.5 text-xxs font-semibold outline-offset-2 transition-colors {styles[
			variant
		]} {className}"
	>
		{@render children()}
	</div>
{/if}
