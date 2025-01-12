<script>
  let {
    value = $bindable(""),
    withIcon = false,
    iconDirection = "right",
    ...props
  } = $props();
</script>

{#if withIcon}
  <div
    class="items-center flex outline-2 pr-1.5 outline-solid outline-transparent -outline-offset-2 bg-zinc-50 w-full rounded-lg border border-zinc-300 shadow shadow-black/[0.07] focus-within:outline-accent focus-within:bg-white text-sm overflow-hidden"
  >
    {#if iconDirection === "left"}
      {@render props.children?.()}
    {/if}
    <input
      bind:value
      {...props}
      type={props.type ?? "text"}
      class={[
        props.class,
        "px-3.5 py-1.5 text-zinc-600 focus:text-zinc-800 font-medium bg-zinc-50 w-full border-0 focus:outline-none focus:bg-white focus:border-transparent focus:ring-0",
      ].join(" ")}
    />
    {#if iconDirection === "right"}
      {@render props.children?.()}
    {/if}
  </div>
{:else}
  <input
    bind:value
    {...props}
    type={props.type ?? "text"}
    class={[
      props.class,
      "px-3.5 py-1.5 text-zinc-600 focus:text-zinc-800 font-medium bg-zinc-50 w-full rounded-lg border border-solid border-zinc-300 shadow shadow-black/[0.07] focus:outline-accent focus:bg-white focus:border-transparent focus:ring-0 text-sm",
    ].join(" ")}
  />
{/if}
