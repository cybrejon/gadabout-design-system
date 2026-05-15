<script lang="ts">
	type PillVariants = 'normal' | 'ghost' | 'outline alt' | 'outline' | 'destructive';

	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		variant?: PillVariants;
		class?: string;
	}
	let { children, variant = 'normal', class: className }: Props = $props();

	let styles: Record<PillVariants, string> = {
		normal: 'bg-primary text-primary-foreground active:text-primary-foreground/80',
		destructive: 'bg-destructive text-primary-foreground active:text-primary-foreground/80',
		ghost: 'hover:bg-primary/10 active:bg-primary/20',
		'outline alt':
			'hover:bg-primary/10 active:bg-primary/20 bg-primary/5 inset-ring inset-ring-primary/10',
		outline: 'hover:bg-primary/10 active:bg-primary active:text-primary-foreground inset-ring'
	};
</script>

<span
	class="pointer-events-none inline-flex flex-nowrap items-center justify-center gap-2 rounded-full border-transparent px-2.5 pt-1 pb-0.5 text-xxs font-semibold outline-offset-2 transition-colors {styles[
		variant
	]} {className}"
>
	{@render children()}
</span>
