<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Toggle from './Toggle.svelte';
	import ContainerDecorator from '../utils/ContainerDecorator.svelte';

	const { Story } = defineMeta({
		title: 'Component/Atoms/Forms/Toggle',
		component: Toggle,
		tags: ['autodocs'],
		// @ts-expect-error: seems to be a bug => https://github.com/storybookjs/storybook/issues/29951
		decorators: [() => ContainerDecorator]
	});
</script>

<Story name="Normal"><span class="icon-[lucide--lock-keyhole-open]"></span></Story>
