<script>
	let { children, class: className = '' } = $props();
</script>

<div class="rounded-2xl border border-[1.75px] bg-card p-5 {className}">
	{@render children()}
</div>
