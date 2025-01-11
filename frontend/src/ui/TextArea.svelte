<script>
    let { value = $bindable(""), withIcon, ...props } = $props();
</script>

<textarea
    bind:value
    class={[
        props.class,
        "px-3 py-2 bg-zinc-50 w-full rounded-lg border border-zinc-300 shadow-sm focus:outline-indigo-500 focus:bg-white focus:border-transparent focus:ring-0 text-sm",
    ].join(" ")}
    {...props}
></textarea>
