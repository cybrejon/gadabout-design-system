<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Toggle from './Toggle.svelte';
	import ContainerDecorator from '../utils/ContainerDecorator.svelte';

	const { Story } = defineMeta({
		title: 'Component/Atoms/Forms/Toggle',
		component: Toggle,
		tags: ['autodocs'],
		decorators: [() => ContainerDecorator]
	});
</script>

<Story name="Normal"><span class="icon-[lucide--lock-keyhole-open]"></span></Story>
