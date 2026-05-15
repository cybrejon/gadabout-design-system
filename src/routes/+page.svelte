<script>
	import Breadcrumb from '../components/molecules/Breadcrumb.svelte';
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
	<Pill class="bg-purple-500"><span class="icon-[lucide--check]"></span><span>Success!</span></Pill>
	<Progress label="Loading..." valueLabel="90%" value={90} />
	<Breadcrumb
		items={[
			{
				name: 'Home',
				link: '/'
			},
			{
				name: '[Leads] Opal Camidge Way',
				link: '/'
			},
			{
				name: 'Reports',
				link: '/',
				active: true
			}
		]}
	/>
</Container>
