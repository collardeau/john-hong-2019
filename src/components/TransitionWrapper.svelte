<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  let show = false;
  onMount(() => {
    show = true;
  });
</script>

{#if show}
  <div in:fade={{ duration: 500, delay: 100 }}>
    <slot />
  </div>
{/if}
