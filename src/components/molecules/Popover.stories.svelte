<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Popover from './Popover.svelte';
	import Button from '../atoms/Button.svelte';
	import Input from './Input.svelte';
	import Label from '../atoms/Label.svelte';

	const { Story } = defineMeta({
		title: 'Component/Molecules/Overlay/Popover',
		component: Popover,
		argTypes: {
			open: { control: 'boolean' },
			showArrow: { control: 'boolean' }
		}
	});
</script>

<Story name="Default">
	{#snippet template(args)}
		<div class="flex h-75 items-center justify-center">
			<Popover {...args}>
				{#snippet trigger()}
					<Button>Open Popover</Button>
				{/snippet}

				{#snippet title()}
					Parameters
				{/snippet}

				{#snippet description()}
					Set the parameters for the task.
				{/snippet}

				<div class="grid gap-2">
					<div class="grid grid-cols-3 items-center gap-4">
						<Label for="temperature">Temperature</Label>
						<div class="col-span-2">
							<Input id="temperature" value="0.8" class="h-8" />
						</div>
					</div>
					<div class="grid grid-cols-3 items-center gap-4">
						<Label for="max-duration">Max Dur.</Label>
						<div class="col-span-2">
							<Input id="max-duration" value="2400" class="h-8" />
						</div>
					</div>
					<div class="grid grid-cols-3 items-center gap-4">
						<Label for="task-duration">Task Dur.</Label>
						<div class="col-span-2">
							<Input id="task-duration" value="600" class="h-8" />
						</div>
					</div>
				</div>
			</Popover>
		</div>
	{/snippet}
</Story>

<Story name="Simple Content">
	{#snippet template(args)}
		<div class="flex h-50 items-center justify-center">
			<Popover {...args}>
				{#snippet trigger()}
					<Button variant="outline">View Info</Button>
				{/snippet}

				<div class="space-y-2">
					<p class="text-sm">
						This is a simple popover with some text content. It's useful for providing additional
						context or information.
					</p>
					<Button size="sm" class="w-full">Got it</Button>
				</div>
			</Popover>
		</div>
	{/snippet}
</Story>
