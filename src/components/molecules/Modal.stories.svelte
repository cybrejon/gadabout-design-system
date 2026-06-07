<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Dialog } from 'bits-ui';
	import Modal from './Modal.svelte';
	import Button from '../atoms/Button.svelte';

	const { Story } = defineMeta({
		title: 'Component/Molecules/Forms/Modal',
		component: Modal,
		argTypes: {
			open: { control: 'boolean' },
			closeOnOutsideClick: { control: 'boolean' },
			closeOnEscape: { control: 'boolean' }
		}
	});
</script>

<Story name="Main">
	{#snippet template(args)}
		<Modal {...args}>
			{#snippet trigger()}
				<Button>Open Modal</Button>
			{/snippet}

			{#snippet title()}
				Edit Profile
			{/snippet}

			{#snippet description()}
				Make changes to your profile here. Click save when you're done.
			{/snippet}

			<div class="py-4 text-foreground/80">
				<p>
					This is the main content area of the modal. You can place forms, information, or any other
					components here.
				</p>
			</div>

			{#snippet footer()}
				<Button onclick={() => (args.open = false)}>Save Changes</Button>
				<Dialog.Close asChild>
					{#snippet child({ props })}
						<Button {...props} variant="ghost">Cancel</Button>
					{/snippet}
				</Dialog.Close>
			{/snippet}
		</Modal>
	{/snippet}
</Story>

<Story name="Destructive Action">
	{#snippet template(args)}
		<Modal {...args}>
			{#snippet trigger()}
				<Button variant="destructive">Delete Account</Button>
			{/snippet}

			{#snippet title()}
				Are you absolutely sure?
			{/snippet}

			{#snippet description()}
				This action cannot be undone. This will permanently delete your account and remove your data
				from our servers.
			{/snippet}

			{#snippet footer()}
				<Button variant="destructive">Yes, Delete Account</Button>
				<Dialog.Close asChild>
					{#snippet child({ props })}
						<Button {...props} variant="ghost">Cancel</Button>
					{/snippet}
				</Dialog.Close>
			{/snippet}
		</Modal>
	{/snippet}
</Story>
