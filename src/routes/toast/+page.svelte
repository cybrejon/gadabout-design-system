<script>
	import { toast } from '../../lib/toast.svelte';
	import Button from '../../components/atoms/Button.svelte';
	import Container from '../../components/atoms/Container.svelte';
</script>

<Container>
	<div class="flex flex-col gap-8 py-10">
		<div>
			<h1 class="text-3xl font-bold">Toast</h1>
			<p class="text-muted-foreground">A succinct message that is displayed temporarily.</p>
		</div>

		<div class="grid grid-cols-2 gap-4 md:grid-cols-4">
			<Button
				onclick={() =>
					toast('Event has been created', {
						description: 'Sunday, December 03, 2023 at 9:00 AM'
					})}
			>
				Default Toast
			</Button>

			<Button
				variant="outline"
				onclick={() =>
					toast.success('Settings saved', {
						description: 'Your changes have been successfully applied.'
					})}
			>
				Success Toast
			</Button>

			<Button
				variant="destructive"
				onclick={() =>
					toast.error('Uh oh! Something went wrong.', {
						description: 'There was a problem with your request.'
					})}
			>
				Error Toast
			</Button>

			<Button
				variant="outline alt"
				onclick={() =>
					toast.warning('Check your connection', {
						description: 'We are having trouble reaching the server.'
					})}
			>
				Warning Toast
			</Button>

			<Button
				variant="ghost"
				onclick={() =>
					toast.info('Update available', {
						description: 'A new version of the app is ready to install.'
					})}
			>
				Info Toast
			</Button>

			<Button
				onclick={() =>
					toast('Action required', {
						description: 'Please confirm your email address.',
						action: {
							label: 'Undo',
							onClick: () => console.log('Undo clicked')
						}
					})}
			>
				With Action
			</Button>
		</div>
	</div>
</Container>
