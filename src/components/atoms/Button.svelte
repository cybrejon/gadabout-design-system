<script>
	import { resolve } from '$app/paths';
	import { Button } from 'bits-ui';

	let {
		children,
		variant = 'normal',
		href: button_link = '',
		size = 'normal',
		class: style = '',
		onclick,
		type = 'button',
		disabled = false,
		...restProps
	} = $props();

	const styles = {
		normal: 'bg-primary text-primary-foreground active:text-primary-foreground/80',
		destructive: 'bg-destructive text-primary-foreground active:text-primary-foreground/80',
		ghost: 'text-primary hover:bg-current/10 active:bg-current/20',
		'outline alt':
			'text-primary hover:bg-current/10 active:bg-current/20 bg-current/5 inset-ring inset-ring-current/10',
		outline:
			'text-primary hover:bg-current/10 active:bg-current inset-ring-[1.45px] inset-ring-current active:text-primary-foreground',
		text: 'hover:text-secondary'
	};

	const sizes = {
		normal: 'px-6 py-3 gap-3 text-sm',
		sm: 'px-4 py-2 gap-2 text-xs',
		text: 'gap-2',
		'text md': 'gap-2 text-sm',
		'text sm': 'gap-2 text-xs',
		sidebar: 'w-full justify-start rounded-xl px-4 py-2 gap-3 text-sm'
	};
</script>

{#if button_link && !disabled}
	<a
		href={resolve(button_link)}
		{onclick}
		{...restProps}
		class="inline-flex cursor-pointer flex-nowrap items-center justify-center rounded-full align-middle font-medium outline-offset-4 transition-colors {styles[
			variant
		]} {sizes[size]} {style}"
	>
		{@render children?.()}
	</a>
{:else}
	<Button.Root
		{type}
		{disabled}
		{...restProps}
		{onclick}
		class="inline-flex cursor-pointer flex-nowrap items-center justify-center rounded-full align-middle font-medium outline-offset-4 transition-colors {styles[
			variant
		]} {sizes[size]} {style} disabled:cursor-not-allowed disabled:opacity-50"
	>
		{@render children?.()}
	</Button.Root>
{/if}
