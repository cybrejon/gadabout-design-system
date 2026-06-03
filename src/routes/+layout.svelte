<script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Toaster from '../components/atoms/Toaster.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}
<Toaster />
