<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Breadcrumb from './Breadcrumb.svelte';
	import ContainerDecorator from '../utils/ContainerDecorator.svelte';

	const { Story } = defineMeta({
		title: 'Component/Molecules/Navigation/Breadcrumb',
		component: Breadcrumb,
		tags: ['autodocs'],
		// @ts-expect-error: seems to be a bug => https://github.com/storybookjs/storybook/issues/29951
		decorators: [() => ContainerDecorator]
	});
</script>

<Story
	name="Main"
	args={{
		items: [
			{
				name: 'Home',
				link: '/'
			},
			{
				name: '[Leads] Opal Camidge Way',
				link: '/'
			},
			{
				name: 'Reports',
				link: '/',
				active: true
			}
		]
	}}
/>
