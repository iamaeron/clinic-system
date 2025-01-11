<script>
    const props = $props();
</script>

<select
    {...props}
    class={[
        props.class,
        "px-3 py-1.5 text-zinc-600 outline-2 outline-transparent outline -outline-offset-2 focus:text-zinc-800 font-medium bg-zinc-50 w-full rounded-lg border border-zinc-300 shadow-sm focus:outline-indigo-500 focus:ring-0 text-sm",
    ].join(" ")}
>
    {@render props.children?.()}
</select>
