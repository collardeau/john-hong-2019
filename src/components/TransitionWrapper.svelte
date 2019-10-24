<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  let show = false;
  onMount(() => {
    show = true;
  });
</script>

{#if show}
  <div in:fade={{ duration: 400, delay: 50 }}>
    <slot />
  </div>
{/if}
