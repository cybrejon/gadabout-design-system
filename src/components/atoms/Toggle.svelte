<script>
	import { Toggle } from 'bits-ui';
	import Button from './Button.svelte';

	/**
	 * @typedef {Object} Props
	 * @property {boolean} [pressed] - The pressed state of the toggle.
	 * @property {import('svelte').Snippet} children - The content to be rendered inside the toggle.
	 * @property {string} [href] - An optional URL to make the toggle behave as a link.
	 * @property {import('svelte/elements').MouseEventHandler<any>} [onclick] - Click event handler.
	 * @property {'normal' | 'sm' | 'text' | 'text md' | 'text sm' | 'sidebar'} [size] - The size of the toggle.
	 */

	/** @type {Props} */
	let { pressed = $bindable(false), children, href, onclick, size } = $props();
</script>

<Toggle.Root
	bind:pressed
	class="inline-flex cursor-pointer flex-nowrap items-center justify-center rounded-full align-middle font-medium text-foreground/70 inset-ring-[1.45px] inset-ring-transparent outline-offset-4 transition-colors hover:inset-ring-current/30 data-[state=on]:bg-current/10 data-[state=on]:text-foreground"
>
	{#snippet child({ props })}
		{#if size === 'text'}
			<Button {size} variant="text" {href} {onclick} {...props}>
				{@render children()}
			</Button>
		{:else}
			<Button {size} variant={pressed ? 'normal' : 'ghost'} {href} {onclick} {...props}>
				{@render children()}
			</Button>
		{/if}
	{/snippet}
</Toggle.Root>
