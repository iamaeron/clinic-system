<script>
    import { createLabel, melt } from '@melt-ui/svelte';
  
    const {
      elements: { root },
    } = createLabel();

    const { required, children } = $props()
  </script>
  
      <label
        use:melt={$root}
        for="email"
        class="block text-sm font-semibold text-zinc-600"
        data-melt-part="root"
      >
      {children}
        {#if required}
        <span class="inline ml-1 text-rose-600">*</span>
            {/if}
    </label>