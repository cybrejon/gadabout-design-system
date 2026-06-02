<script>
	let { children, variant = 'normal', class: className = '' } = $props();

	let styles = {
		normal: 'bg-primary text-primary-foreground active:text-primary-foreground/80',
		destructive: 'bg-destructive text-primary-foreground active:text-primary-foreground/80',
		ghost: 'text-primary hover:bg-current/10 active:bg-current/20',
		'outline alt':
			'text-primary hover:bg-current/10 active:bg-current/20 bg-current/5 inset-ring inset-ring-current/10',
		outline:
			'text-primary hover:bg-current/10 active:bg-current inset-ring-[1.45px] inset-ring-current active:text-primary-foreground'
	};
</script>

<span
	class="pointer-events-none inline-flex flex-nowrap items-center justify-center gap-2 rounded-full border-transparent px-2.5 pt-1 pb-0.5 text-xxs font-semibold outline-offset-2 transition-colors {styles[
		variant
	]} {className}"
>
	{@render children()}
</span>
