<script lang="ts">
	import { Checkbox, Label, useId, type WithoutChildrenOrChild } from 'bits-ui';

	let {
		id = useId(),
		checked = $bindable(false),
		ref = $bindable(null),
		labelRef = $bindable(null),
		labelText,
		...restProps
	}: WithoutChildrenOrChild<Checkbox.RootProps> & {
		labelText: string;
		labelRef?: HTMLLabelElement | null;
	} = $props();
</script>

<div class="group inline-flex cursor-pointer flex-nowrap items-center justify-center gap-2">
	<Checkbox.Root
		{id}
		bind:checked
		bind:ref
		{...restProps}
		class="flex cursor-pointer items-center justify-center"
	>
		{#snippet children({ checked, indeterminate })}
			{#if indeterminate}
				<div class="flex h-5 w-5 items-center justify-center rounded-md bg-primary p-1">
					<span class="text-xl text-primary-foreground icon-[lucide--minus]"></span>
				</div>
			{:else if checked}
				<div class="flex h-5 w-5 items-center justify-center rounded-md bg-primary p-1">
					<span class="text-xl text-primary-foreground icon-[lucide--check]"></span>
				</div>
			{:else}
				<div
					class="flex h-5 w-5 items-center justify-center rounded-md p-1 inset-ring-2 group-hover:text-secondary"
				>
					<span class="text-xl text-primary-foreground opacity-0 icon-[lucide--check]"></span>
				</div>
			{/if}
		{/snippet}
	</Checkbox.Root>
	<Label.Root for={id} bind:ref={labelRef} class="mt-1 cursor-pointer font-medium">
		{labelText}
	</Label.Root>
</div>
