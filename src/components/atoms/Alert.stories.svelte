<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Alert from './Alert.svelte';
	import Button from './Button.svelte';
	import ContainerDecorator from '../utils/ContainerDecorator.svelte';

	const { Story } = defineMeta({
		title: 'Component/Atoms/Feedback/Alert',
		component: Alert,
		decorators: [() => ContainerDecorator],
		argTypes: {
			variant: {
				control: 'select',
				options: ['primary', 'info', 'success', 'warning', 'error']
			},
			appearance: {
				control: 'select',
				options: ['soft', 'outline', 'solid']
			}
		}
	});
</script>

<Story
	name="Info Soft"
	args={{
		variant: 'info',
		appearance: 'soft',
		title: 'Information Update',
		description: 'A new software update is available. Please review the release notes.'
	}}
/>

<Story
	name="Primary Soft"
	args={{
		variant: 'primary',
		appearance: 'soft',
		title: 'Feature Unlocked',
		description: 'You have successfully unlocked the premium design system resources.'
	}}
/>

<Story
	name="Success Soft"
	args={{
		variant: 'success',
		appearance: 'soft',
		title: 'Success!',
		description: 'Your changes have been successfully saved to the cloud.'
	}}
/>

<Story
	name="Warning Soft"
	args={{
		variant: 'warning',
		appearance: 'soft',
		title: 'Warning Alert',
		description: 'Your storage space is reaching its limit. Consider deleting unused files.'
	}}
/>

<Story
	name="Error Soft"
	args={{
		variant: 'error',
		appearance: 'soft',
		title: 'Error Encountered',
		description: 'There was a problem completing your transaction. Please try again.'
	}}
/>

<Story
	name="Outline Appearance"
	args={{
		variant: 'info',
		appearance: 'outline',
		title: 'Outline Alert',
		description: 'This alert uses the transparent outline appearance for a more subtle look.'
	}}
/>

<Story
	name="Solid Appearance"
	args={{
		variant: 'primary',
		appearance: 'solid',
		title: 'Solid Primary Alert',
		description: 'This is a solid filled alert designed for high visual emphasis.'
	}}
/>

<Story
	name="Solid Error Alert"
	args={{
		variant: 'error',
		appearance: 'solid',
		title: 'Critical Failure',
		description: 'A system-wide error has occurred. Immediate action is required.'
	}}
/>

<Story
	name="Dismissible"
	args={{
		variant: 'info',
		appearance: 'soft',
		title: 'Dismissible Alert',
		description: 'This alert can be closed by clicking the close button on the right.',
		dismissible: true
	}}
/>

<Story name="With Actions">
	{#snippet template()}
		<Alert
			variant="warning"
			appearance="soft"
			title="Subscription Expiring"
			description="Your premium subscription will expire in 3 days. Renew now to avoid disruption."
		>
			{#snippet actions()}
				<Button variant="accent" size="sm">Renew Now</Button>
				<Button variant="ghost" size="sm">Ignore</Button>
			{/snippet}
		</Alert>
	{/snippet}
</Story>

<Story name="Custom Icon">
	{#snippet template()}
		<Alert
			variant="primary"
			appearance="soft"
			title="Custom Icon Alert"
			description="This alert showcases the ability to render a custom icon snippet."
		>
			{#snippet icon()}
				<span class="icon-[lucide--gift] block size-5 animate-bounce text-primary"></span>
			{/snippet}
		</Alert>
	{/snippet}
</Story>

<Story name="No Title (Compact)">
	{#snippet template()}
		<div class="flex flex-col gap-3">
			<Alert variant="info" description="Simple, compact alert message without a title." />
			<Alert variant="success" description="Action completed successfully." dismissible={true} />
		</div>
	{/snippet}
</Story>
