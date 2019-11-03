<script>
  import Header from "../components/Header.svelte";
  export let segment;
  $: gutter = segment === "about" ? "mx-0" : "mx-2"; // dynamic class
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

<Header {segment} />
<main class="container px-2 md:px-6 lg:px-24 mx-auto">
  <slot />
</main>
