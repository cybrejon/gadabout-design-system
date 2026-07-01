<script>
	import Label from '../atoms/Label.svelte';

	/**
	 * @typedef {Object} Props
	 * @property {string} label - The label for the metadata.
	 * @property {string} text - The value for the metadata.
	 * @property {import('svelte').Snippet} [icon] - An optional icon to display next to the text.
	 */

	/** @type {Props} */
	let { label, text, icon } = $props();
</script>

<dl class="leading-5">
	<dt>
		<Label class="text-xxs font-semibold text-foreground-alt">
			{label.toUpperCase()}
		</Label>
	</dt>
	<dd class="flex items-center gap-2 text-sm">
		{#if icon}
			{@render icon()}
		{/if}
		<span class="pt-px">{text}</span>
	</dd>
</dl>
