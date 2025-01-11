<script>
    import Icon from "@iconify/svelte";
    let { value = $bindable(false), ...props } = $props();
</script>

<div>
    <input
        bind:checked={value}
        type="checkbox"
        class={[props.class, "hidden peer"].join(" ")}
        {...props}
    />

    <label
        for={props.id}
        class="peer-checked:bg-indigo-500 peer-checked:text-white peer-checked:border-transparent block shadow-sm text-transparent border w-max border-zinc-300 rounded-md transition-all peer-active:scale-90 p-px"
    >
        <Icon icon="tabler:check" class="[&>path]:stroke-3 w-4 h-4" />
    </label>
</div>
