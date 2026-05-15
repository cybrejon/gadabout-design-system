<script>
	let { children } = $props();
</script>

<div class="flex flex-col items-center justify-center gap-12">
	{@render children()}
</div>
