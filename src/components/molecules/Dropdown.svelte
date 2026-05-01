<script lang="ts">
	import { DropdownMenu, type WithoutChild } from 'bits-ui';
	import type { Snippet } from 'svelte';
	import Button from '../atoms/Button.svelte';

	interface ItemsProp {
		name: string;
		callback?: () => void;
	}

	type Props = DropdownMenu.RootProps & {
		buttonText?: string;
		items: ItemsProp[];
		contentProps?: WithoutChild<DropdownMenu.ContentProps>;
		icon: Snippet;
	};

	let {
		open = $bindable(false),
		buttonText,
		items,
		contentProps,
		icon,
		...restProps
	}: Props = $props();
</script>

<DropdownMenu.Root bind:open {...restProps}>
	<DropdownMenu.Trigger
		class="inline-flex cursor-pointer flex-nowrap items-center justify-center overflow-hidden rounded-full border-primary align-middle font-medium inset-ring-[1.45px] inset-ring-primary outline-offset-4 transition-colors hover:bg-primary/10 active:bg-primary active:text-primary-foreground"
	>
		<Button variant="outline">
			{@render icon()}
			{#if buttonText}
				<span>
					{buttonText}
				</span>
			{/if}
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Portal>
		<DropdownMenu.Content
			{...contentProps}
			class="text-popover-foreground shadow-popover data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 mx-2 mt-2 min-w-32 overflow-hidden rounded-2xl border border-[.1125rem] bg-card p-1"
		>
			<DropdownMenu.Group aria-label={buttonText}>
				{#each items as item, i (i)}
					<DropdownMenu.Item
						textValue={item.name}
						onclick={() => item.callback && item.callback()}
						class="focus:text-accent-foreground relative flex cursor-pointer items-center rounded-xl px-3 py-2 text-sm transition-colors outline-none select-none focus:text-secondary active:bg-primary active:text-primary-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
					>
						{item.name}
					</DropdownMenu.Item>
				{/each}
			</DropdownMenu.Group>
		</DropdownMenu.Content>
	</DropdownMenu.Portal>
</DropdownMenu.Root>
