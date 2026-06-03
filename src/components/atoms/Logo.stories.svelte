<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import ContainerDecorator from '../utils/ContainerDecorator.svelte';
	import Logo from './Logo.svelte';

	const { Story } = defineMeta({
		title: 'Component/Atoms/Branding/Logo',
		component: Logo,
		tags: ['autodocs'],
		decorators: [() => ContainerDecorator]
	});
</script>

<Story name="Main" />

<!-- TODO: provide proper custom example and expose it in the mdx file -->
<Story name="Custom Image" props={{ src: '/images/pfp.webp', alt: 'Custom Logo' }} />

<Story name="Custom Class">
	{#snippet template()}
		<Logo class="rounded-sm border border-primary px-4 py-2 saturate-0" />
	{/snippet}
</Story>
