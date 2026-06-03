<!-- TODO: Reduce logic fragmentation and house everything in one file if that is possible. -->

<script>
	/**
	 * Toaster component that renders active toast notifications.
	 * This component should be placed once at a high level in your application (e.g., in +layout.svelte).
	 */
	import { toastState } from '../../lib/toast.svelte';
	import Toast from './Toast.svelte';
</script>

<div
	class="fixed right-0 bottom-0 z-100 flex max-h-screen w-full flex-col-reverse p-4 sm:top-auto sm:right-0 sm:bottom-0 sm:flex-col md:max-w-[420px]"
>
	<div class="flex flex-col gap-2">
		{#each toastState.toasts as t (t.id)}
			<Toast {...t} />
		{/each}
	</div>
</div>
