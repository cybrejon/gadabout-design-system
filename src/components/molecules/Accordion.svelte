<script>
	import { Accordion } from 'bits-ui';
	import { slide } from 'svelte/transition';

	/**
	 * @typedef {Object} AccordionItem
	 * @property {string} id - The unique identifier of the accordion item.
	 * @property {string} title - The title of the accordion item.
	 * @property {string} [content] - The text content of the accordion item.
	 * @property {boolean} [disabled] - Whether the accordion item is disabled.
	 */

	/**
	 * @typedef {Object} Props
	 * @property {AccordionItem[]} items - The array of items to render in the accordion.
	 * @property {string | string[]} [value] - The active item(s) value(s). Bindable.
	 * @property {'single' | 'multiple'} [type] - Whether one or multiple items can be open.
	 * @property {boolean} [collapsible] - If type is 'single', whether all items can be closed.
	 * @property {boolean} [disabled] - Whether the accordion is disabled.
	 * @property {'bordered' | 'separated' | 'ghost'} [variant] - The layout style of the accordion.
	 * @property {string} [class] - Additional class names for the root container.
	 * @property {import('svelte').Snippet<[AccordionItem]>} [titleSnippet] - Custom snippet to render the title of each item.
	 * @property {import('svelte').Snippet<[AccordionItem]>} [contentSnippet] - Custom snippet to render the content of each item.
	 */

	/** @type {Props} */
	let {
		items = [],
		value = $bindable(),
		type = 'single',
		collapsible = true,
		disabled = false,
		variant = 'bordered',
		class: className = '',
		titleSnippet,
		contentSnippet,
		...restProps
	} = $props();

	const rootClasses = {
		bordered: 'border border-border rounded-xl overflow-hidden bg-card divide-y divide-border',
		separated: 'flex flex-col gap-3',
		ghost: 'flex flex-col gap-1'
	};

	const itemClasses = {
		bordered: 'transition-colors duration-200',
		separated:
			'border border-border rounded-2xl bg-card overflow-hidden transition-all duration-200 focus-within:border-primary/40 focus-within:ring-2 focus-within:ring-primary/10 hover:border-primary/30',
		ghost: 'rounded-xl overflow-hidden transition-colors duration-200'
	};

	const triggerClasses = {
		bordered:
			'w-full flex items-center justify-between text-left text-foreground px-5 py-4 transition-all duration-200 cursor-pointer select-none outline-none hover:bg-primary/5 focus-visible:bg-primary/5 focus-visible:text-primary data-[state=open]:text-primary',
		separated:
			'w-full flex items-center justify-between text-left text-foreground px-5 py-4 transition-all duration-200 cursor-pointer select-none outline-none hover:bg-primary/5 focus-visible:bg-primary/5 focus-visible:text-primary data-[state=open]:text-primary',
		ghost:
			'w-full flex items-center justify-between text-left text-foreground px-4 py-3 transition-all duration-200 cursor-pointer select-none outline-none hover:bg-primary/5 focus-visible:bg-primary/5 focus-visible:text-primary data-[state=open]:text-primary'
	};

	const contentWrapperClasses = {
		bordered: 'px-5 pb-4 pt-1 text-sm text-foreground-alt leading-relaxed',
		separated: 'px-5 pb-4 pt-1 text-sm text-foreground-alt leading-relaxed',
		ghost: 'px-4 pb-3 pt-1 text-sm text-foreground-alt leading-relaxed'
	};
</script>

<Accordion.Root
	{type}
	{collapsible}
	{disabled}
	bind:value
	class="{rootClasses[variant]} {className}"
	{...restProps}
>
	{#each items as item (item.id)}
		<Accordion.Item
			value={item.id}
			disabled={item.disabled}
			class="{itemClasses[variant]} {item.disabled ? 'pointer-events-none opacity-40' : ''}"
		>
			<Accordion.Header class="flex">
				<Accordion.Trigger class="group {triggerClasses[variant]}">
					{#if titleSnippet}
						{@render titleSnippet(item)}
					{:else}
						<span class="text-sm md:text-base">{item.title}</span>
					{/if}
					<span
						class="icon-[lucide--chevron-down] h-5 w-5 shrink-0 text-foreground-alt transition-transform duration-300 ease-out group-data-[state=open]:rotate-180 group-data-[state=open]:text-primary"
					></span>
				</Accordion.Trigger>
			</Accordion.Header>
			<Accordion.Content forceMount>
				{#snippet child({ props, open })}
					{#if open}
						<div {...props} transition:slide={{ duration: 250 }}>
							<div class={contentWrapperClasses[variant]}>
								{#if contentSnippet}
									{@render contentSnippet(item)}
								{:else}
									<p>{item.content}</p>
								{/if}
							</div>
						</div>
					{/if}
				{/snippet}
			</Accordion.Content>
		</Accordion.Item>
	{/each}
</Accordion.Root>
