<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import ContainerDecorator from '../utils/ContainerDecorator.svelte';
	import Skeleton from './Skeleton.svelte';

	const { Story } = defineMeta({
		title: 'Component/Atoms/Feedback/Skeleton',
		component: Skeleton,
		decorators: [() => ContainerDecorator]
	});
</script>

<Story name="Rectangle" args={{ variant: 'rect' }} />

<Story name="Circle" args={{ variant: 'circle' }} />

<Story name="Text Line" args={{ variant: 'text' }} />

<Story name="Shimmer Animation" args={{ variant: 'rect', animate: 'shimmer' }} />

<Story name="No Animation" args={{ variant: 'rect', animate: 'none' }} />

<Story
	name="Custom Dimensions"
	args={{ variant: 'rect', width: '200px', height: '100px', animate: 'shimmer' }}
/>

<Story name="Card Preview Layout">
	{#snippet template()}
		<div class="flex max-w-sm items-center gap-4 rounded-xl border border-border bg-card p-3">
			<Skeleton variant="circle" animate="shimmer" class="h-12 w-12" />
			<div class="flex min-w-50 flex-1 flex-col gap-2">
				<Skeleton variant="text" animate="shimmer" class="w-3/4" />
				<Skeleton variant="text" animate="shimmer" class="w-1/2" />
			</div>
		</div>
	{/snippet}
</Story>
