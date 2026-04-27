<script>
	import Button from '../components/atoms/Button.svelte';
	import Checkbox from '../components/atoms/Checkbox.svelte';
	import Container from '../components/atoms/Container.svelte';
	import Pill from '../components/atoms/Pill.svelte';
	import Progress from '../components/atoms/Progress.svelte';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<Container>
	<Button>Test</Button>
	<Checkbox labelText="Checkbox" />
	<Pill>Test</Pill>
	<Progress label="Loading..." valueLabel="90%" value={90} />
</Container>
