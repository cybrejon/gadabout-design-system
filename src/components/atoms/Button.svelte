<script>
	import { Button } from 'bits-ui';

	let {
		children,
		variant = 'normal',
		size = 'normal',
		class: style,
		onclick,
		type = '',
		...restProps
	} = $props();

	let styles = {
		normal: 'bg-primary text-primary-foreground active:text-primary-foreground/80',
		destructive: 'bg-destructive text-primary-foreground active:text-primary-foreground/80',
		ghost: 'hover:bg-primary/10 active:bg-primary/20',
		'outline alt':
			'hover:bg-primary/10 active:bg-primary/20 bg-primary/5 inset-ring inset-ring-primary/10',
		outline:
			'hover:bg-primary/10 active:bg-primary inset-ring-[1.45px] inset-ring-primary active:text-primary-foreground',
		text: 'hover:text-secondary'
	};

	let sizes = {
		normal: 'px-6 py-3 gap-3 text-base text-sm',
		sm: 'px-4 py-2 gap-2 text-xs',
		text: 'gap-2',
		'text md': 'gap-2 text-sm',
		'text sm': 'gap-2 text-xs',
		sidebar: 'w-full justify-start rounded-xl px-4 py-2 gap-3 text-sm'
	};
</script>

<Button.Root
	{...restProps}
	{onclick}
	{type}
	class="inline-flex cursor-pointer flex-nowrap items-center justify-center rounded-full align-middle font-medium outline-offset-4 transition-colors {styles[
		variant
	]}
	{sizes[size]} {style}"
>
	{@render children()}
</Button.Root>
