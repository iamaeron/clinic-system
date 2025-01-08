<script>
	const s = fetch('/api/hello').then(r => r.text()).then(d => console.log(d));
</script>
