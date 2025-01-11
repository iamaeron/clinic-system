<script>
  import TextInput from "../ui/TextInput.svelte";

	// const s = fetch('/api/signin', { method: 'POST' }).then(r => r.text()).then(d => console.log(d));
</script>

<div style="background-image: url('/cfsi-campuses.jpg')" class="relative bg-no-repeat bg-cover min-h-screen bg-black flex">
	<div class="bg-black/80 absolute inset-0"></div>
	<div class="flex items-center justify-center px-10 flex-1 relative">
		<div>
			<img src='/cfsi-mabiga-logo.png' alt='hey' class="w-40 aspect-square bg-cover" />
			<h1>Education quality that works.</h1>
		</div>
	</div>
	<div class="max-w-xl w-full flex relative">
		<div class="flex-1 bg-white flex items-center px-10">
			<div class="w-full">
				<h1 class="text-3xl font-semibold tracking-tight text-[#0B1725]">Sign in</h1>
				<p class="text-zinc-600 mb-4">If you have an account, you can easily log in.</p>
				<div class="space-y-4">
					<TextInput />
					<TextInput />
				</div>
			</div>
		</div>
	</div>
</div>