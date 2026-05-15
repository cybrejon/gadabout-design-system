<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Breadcrumb from './Breadcrumb.svelte';
	import ContainerDecorator from '../utils/ContainerDecorator.svelte';

	const { Story } = defineMeta({
		title: 'Component/Molecules/Navigation/Breadcrumb',
		component: Breadcrumb,
		tags: ['autodocs'],
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
