<script>
	import { slide } from 'svelte/transition';
	import Button from './Button.svelte';

	/**
	 * @typedef {Object} Props
	 * @property {'primary' | 'info' | 'success' | 'warning' | 'error'} [variant] - The visual style and semantic meaning of the alert.
	 * @property {'soft' | 'outline' | 'solid'} [appearance] - The visual styling option.
	 * @property {string} [title] - The bold title of the alert.
	 * @property {string} [description] - The description text of the alert.
	 * @property {boolean} [dismissible] - Whether the alert can be dismissed by the user.
	 * @property {boolean} [hideIcon] - Whether to hide the icon.
	 * @property {import('svelte').Snippet} [icon] - Custom icon snippet (overrides default icon).
	 * @property {import('svelte').Snippet} [actions] - Snippet for actions (buttons/links) at the bottom.
	 * @property {import('svelte').Snippet} [children] - Default slot content for the description.
	 * @property {string} [class] - Additional CSS classes.
	 * @property {() => void} [ondismiss] - Callback triggered when the alert is dismissed.
	 */

	/** @type {Props} */
	let {
		variant = 'info',
		appearance = 'soft',
		title,
		description,
		dismissible = false,
		hideIcon = false,
		icon,
		actions,
		children,
		class: className = '',
		ondismiss,
		...restProps
	} = $props();

	let visible = $state(true);

	function handleDismiss() {
		visible = false;
		if (ondismiss) {
			ondismiss();
		}
	}

	const appearances = {
		soft: {
			primary: 'bg-primary/[0.04] border border-primary/20 text-primary',
			info: 'bg-primary/[0.04] border border-primary/20 text-primary',
			success: 'bg-primary/[0.04] border border-primary/20 text-primary',
			warning: 'bg-primary/[0.04] border border-primary/20 text-primary',
			error: 'bg-primary/[0.04] border border-destructive/40 text-primary'
		},
		outline: {
			primary: 'bg-transparent border border-primary/20 text-primary',
			info: 'bg-transparent border border-primary/20 text-primary',
			success: 'bg-transparent border border-secondary/20 text-secondary',
			warning: 'bg-transparent border border-accent/20 text-accent',
			error: 'bg-transparent border border-destructive/20 text-destructive'
		},
		solid: {
			primary: 'bg-primary border border-primary/80 text-primary-foreground',
			info: 'bg-primary border border-primary/80 text-primary-foreground',
			success: 'bg-secondary border border-secondary/80 text-primary-foreground',
			warning: 'bg-accent border border-accent/80 text-primary-foreground',
			error: 'bg-destructive border border-destructive/80 text-primary-foreground'
		}
	};

	const iconColors = {
		soft: {
			primary: 'text-primary',
			info: 'text-primary',
			success: 'text-secondary',
			warning: 'text-accent',
			error: 'text-destructive'
		},
		outline: {
			primary: 'text-primary',
			info: 'text-primary',
			success: 'text-secondary',
			warning: 'text-accent',
			error: 'text-destructive'
		},
		solid: {
			primary: 'text-primary-foreground/90',
			info: 'text-primary-foreground/90',
			success: 'text-primary-foreground/90',
			warning: 'text-primary-foreground/90',
			error: 'text-primary-foreground/90'
		}
	};
</script>

{#if visible}
	<div
		role="alert"
		transition:slide={{ duration: 200 }}
		class="relative flex w-full gap-2.5 rounded-lg px-3 py-2 transition-all duration-200 {className} {appearances[
			appearance
		][variant]} {title ? 'items-start' : 'items-center'}"
		{...restProps}
	>
		{#if !hideIcon}
			<div class="mt-0.5 shrink-0 {iconColors[appearance][variant]}">
				{#if icon}
					{@render icon()}
				{:else if variant === 'primary'}
					<span class="icon-[lucide--sparkles] block size-5"></span>
				{:else if variant === 'info'}
					<span class="icon-[lucide--info] block size-5"></span>
				{:else if variant === 'success'}
					<span class="icon-[lucide--check-circle] block size-5"></span>
				{:else if variant === 'warning'}
					<span class="icon-[lucide--alert-triangle] block size-5"></span>
				{:else if variant === 'error'}
					<span class="icon-[lucide--alert-circle] block size-5"></span>
				{/if}
			</div>
		{/if}

		<div class="flex grow flex-col gap-2.5">
			<div class="flex flex-col gap-0.5">
				{#if title}
					<h5 class="text-sm leading-snug font-semibold">{title}</h5>
				{/if}
				{#if description}
					<div class="text-xs opacity-90">{description}</div>
				{:else if children}
					<div class="text-xs leading-relaxed opacity-90">
						{@render children()}
					</div>
				{/if}
			</div>
			{#if actions}
				<div class="mt-1 flex items-center gap-2">
					{@render actions()}
				</div>
			{/if}
		</div>

		{#if dismissible}
			<div class="ml-auto shrink-0 self-start {!title && 'self-center'}">
				<Button
					onclick={handleDismiss}
					variant="ghost"
					size="text"
					class="flex h-7 w-7 items-center justify-center rounded-full p-0 transition-all duration-200 hover:scale-105 active:scale-95 {appearance ===
					'solid'
						? 'text-white/80 hover:bg-white/10 hover:text-white'
						: 'text-foreground-alt hover:bg-black/5 hover:text-foreground'}"
					aria-label="Dismiss alert"
				>
					<span class="icon-[lucide--x] size-4"></span>
				</Button>
			</div>
		{/if}
	</div>
{/if}
