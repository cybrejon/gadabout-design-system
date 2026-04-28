<script lang="ts">
	import Button from '../atoms/Button.svelte';

	type CrumbItem = {
		name: string;
		link: string;
		active?: boolean;
	};

	let { items = [] }: { items: CrumbItem[] } = $props();
</script>

<div class="flex flex-nowrap items-center gap-2 rounded-full border border-[1.5px] px-3 py-1.5">
	{#each items as item, i (i)}
		<Button
			class="{item.active ? '' : 'opacity-50'} transition-none hover:opacity-100"
			variant="text"
			size="text sm"
			href={item.link}
		>
			{#if i > 0}
				<span class="icon-[lucide--chevron-right] text-[1.2em]"></span>
			{:else}
				<span class="icon-[lucide--home] text-[1.2em]"></span>
			{/if}
			<span>{item.name}</span>
		</Button>
	{/each}
</div>
