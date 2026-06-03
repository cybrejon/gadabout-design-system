<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Toast from './Toast.svelte';
	import ContainerDecorator from '../utils/ContainerDecorator.svelte';

	const { Story } = defineMeta({
		title: 'Component/Atoms/Feedback/Toast',
		component: Toast,
		decorators: [() => ContainerDecorator],
		argTypes: {
			type: {
				control: 'select',
				options: ['default', 'success', 'error', 'warning', 'info']
			}
		}
	});
</script>

<Story
	name="Default"
	args={{
		id: '1',
		title: 'Event has been created',
		description: 'Sunday, December 03, 2023 at 9:00 AM',
		type: 'default'
	}}
/>

<Story
	name="Success"
	args={{
		id: '2',
		title: 'Successfully saved',
		description: 'Your changes have been applied.',
		type: 'success'
	}}
/>

<Story
	name="Error"
	args={{
		id: '3',
		title: 'Uh oh! Something went wrong.',
		description: 'There was a problem with your request.',
		type: 'error'
	}}
/>

<Story
	name="Warning"
	args={{
		id: '4',
		title: 'Check your connection',
		description: 'We are having trouble reaching the server.',
		type: 'warning'
	}}
/>

<Story
	name="Info"
	args={{
		id: '5',
		title: 'Update available',
		description: 'A new version is ready to install.',
		type: 'info'
	}}
/>

<Story
	name="WithAction"
	args={{
		id: '6',
		title: 'Action Required',
		description: 'Please confirm your email address.',
		action: {
			label: 'Undo',
			onClick: () => console.log('Undo clicked')
		}
	}}
/>
