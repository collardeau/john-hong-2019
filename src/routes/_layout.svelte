<script>
  import Header from "../components/Header.svelte";
  import { maxWidth } from "../stores";
  export let segment;

  let containerW;
  $: maxWidth.change(containerW);
</script>

<style>
  :global(body) {
    font-family: futura, arial, sans-serif;
    background-color: #1a202c;
  }
</style>

<div class="col min-h-screen antialiased text-gray-300">
  <Header {segment} />
  <main class="col container mx-auto" bind:clientWidth={containerW}>
    {#if containerW || segment === 'art'}
      <slot />
    {/if}
  </main>
</div>

<!-- hidden link for static export -->
<a href="art" class="hidden">artwork</a>
