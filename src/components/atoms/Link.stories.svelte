<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Link from './Link.svelte';

	const { Story } = defineMeta({
		title: 'Component/Atoms/Navigation/Link',
		component: Link,
		argTypes: {
			variant: {
				control: { type: 'select' },
				options: ['hover', 'ghost', 'none']
			}
		}
	});
</script>

<Story name="Default">
	<Link href="#">Default Link</Link>
</Story>

<Story name="Hover Underline">
	<Link href="#" variant="hover">Hover Underline Link</Link>
</Story>

<Story name="Ghost">
	<Link href="#" variant="ghost">Ghost Link</Link>
</Story>

<Story name="With Icon Left">
	<Link href="#">
		<span class="icon-[lucide--link-2] size-4"></span>
		Link with Icon
	</Link>
</Story>

<Story name="In Paragraph">
	{#snippet template()}
		<p class="text-base leading-relaxed">
			This is a paragraph of text that contains a <Link href="#">link</Link> to demonstrate how it aligns
			with the surrounding text. It should feel part of the flow.
		</p>
	{/snippet}
</Story>
