<script>
  import { createLabel, melt } from "@melt-ui/svelte";

  const {
    elements: { root },
  } = createLabel();
  const { required = false, children, ...props } = $props();
</script>

<label
  use:melt={$root}
  for={props.for}
  class={[props.class, "font-semibold text-zinc-600 block text-sm"].join(" ")}
>
  <span>{@render children?.()}</span>
  {#if required}
    <span class="text-rose-600">*</span>
  {/if}
</label>
