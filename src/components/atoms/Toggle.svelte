<script lang="ts">
	import { Toggle } from 'bits-ui';
	import Button, { type ButtonSizes } from './Button.svelte';
	import type { MouseEventHandler } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	interface Props {
		pressed: boolean;
		children: Snippet;
		size?: ButtonSizes;
		href?: string;
		onclick?: MouseEventHandler<HTMLButtonElement>;
	}

	let { pressed = $bindable(false), children, href, onclick, size }: Props = $props();
</script>

<Toggle.Root
	bind:pressed
	class="inline-flex cursor-pointer flex-nowrap items-center justify-center rounded-full align-middle font-medium text-foreground/70 inset-ring-[1.45px] inset-ring-transparent outline-offset-4 transition-colors hover:inset-ring-primary/30 data-[state=on]:bg-primary/10 data-[state=on]:text-foreground"
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
