<script>
	import Button from '../atoms/Button.svelte';

	/**
	 * @typedef {Object} BreadcrumbItem
	 * @property {string} name - The display name of the breadcrumb item.
	 * @property {string} [link] - The URL the breadcrumb item links to.
	 * @property {boolean} [active] - Whether the breadcrumb item is currently active.
	 */

	/**
	 * @typedef {Object} Props
	 * @property {BreadcrumbItem[]} [items] - The list of breadcrumb items to render.
	 */

	/** @type {Props} */
	let { items = [] } = $props();
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
