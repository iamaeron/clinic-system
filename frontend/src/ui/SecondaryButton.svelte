<script>
    let props = $props();
</script>

<button
    {...props}
    type={props.type ?? "text"}
    class={[
        props.class,
        "px-2.5 py-1.5 w-max flex items-center bg-white rounded-lg hover:bg-zinc-50 border border-zinc-300 text-sm font-medium shadow-sm text-zinc-600 disabled:cursor-not-allowed disabled:hover:bg-white disabled:opacity-80",
    ].join(" ")}
>
    {@render props.children?.()}
</button>
