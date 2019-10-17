<script>
  // import Nav from "../components/Nav.svelte";
  import Header from "../components/Header.svelte";
  export let segment;
</script>

<style>
  :global(body) {
    font-family: futura;
    background-color: #1a202c;
    /* background-color: #2d3748; */
    /* background-color: #4a5568; */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #1a202c;
  }
</style>

<Header />
<main class="container m-auto">
  <slot />
</main>
