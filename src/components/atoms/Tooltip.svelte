<script lang="ts">
	import { Tooltip } from 'bits-ui';
	import { type Snippet } from 'svelte';
	import { fly } from 'svelte/transition';

	type DelayDurations = 200 | 400 | 700;

	type Props = Tooltip.RootProps & {
		trigger: Snippet;
		delayDuration?: DelayDurations;
		triggerProps?: Tooltip.TriggerProps;
		class?: string;
	};

	let {
		open = $bindable(false),
		delayDuration = 400,
		children,
		trigger,
		triggerProps = {},
		class: className,
		...restProps
	}: Props = $props();
</script>

<!--
 NOTE: The Tooltip component requires a `Tooltip.Provider` to be present
 higher up in the component tree (ideally in your root +layout.svelte).
 Without it, the Tooltip will not function correctly.
-->
<Tooltip.Root {delayDuration} bind:open {...restProps}>
	<Tooltip.Trigger
		class="inline-flex cursor-default items-center justify-center rounded-md outline-offset-2 transition-colors focus-visible:outline-2 focus-visible:outline-primary"
		{...triggerProps}
	>
		{@render trigger()}
	</Tooltip.Trigger>
	<Tooltip.Portal>
		<Tooltip.Content
			sideOffset={8}
			class="z-50 max-w-xs overflow-hidden rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground shadow-lg {className}"
		>
			<div in:fly={{ y: 4, duration: 200 }} out:fly={{ y: 4, duration: 150 }}>
				<Tooltip.Arrow class="text-primary" />
				{@render children?.()}
			</div>
		</Tooltip.Content>
	</Tooltip.Portal>
</Tooltip.Root>
