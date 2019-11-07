<script>
  import { setMaxWidth } from "../utils/imgUtils";
  import Header from "../components/Header.svelte";
  export let segment;

  let containerW;
  $: containerW && setMaxWidth(containerW); // max size for img reqs
</script>

<style>
  :global(body) {
    font-family: futura, arial, sans-serif;
    background-color: #1a202c;
  }
</style>

<div class="col min-h-screen antialiased text-gray-300">
  <Header {segment} />
  <main
    class="col container mx-auto px-2 md:px-0"
    bind:clientWidth={containerW}>
    {#if containerW}
      <slot />
    {/if}
  </main>
</div>
