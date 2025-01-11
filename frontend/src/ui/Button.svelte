<script>
  let props = $props();
</script>

<button
  type={props.type ?? "text"}
  {...props}
  class={[
    props.class,
    "px-2.5 transition w-max flex select-none items-center py-1.5 bg-accent rounded-lg hover:bg-accent hover:border-accent border border-accent text-sm font-semibold shadow text-white justify-center",
  ].join(" ")}
>
  {@render props.children?.()}
</button>
