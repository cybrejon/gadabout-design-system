<script>
	let { children, class: className = '' } = $props();
</script>

<div class="rounded-2xl border bg-card p-5 {className}">
	{@render children()}
</div>
