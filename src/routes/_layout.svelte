<script>
  // import Nav from "../components/Nav.svelte";
  import Fluid from "svelte-fluid-header";

  const links = [
    {
      href: "series1",
      name: "Mixed Media"
    },
    {
      href: "series2",
      name: "Work on Paper"
    },
    {
      href: "series2",
      name: "Miscelleneous"
    },
    {
      href: "series2",
      name: "New Work"
    },

    {
      href: "about",
      name: "About"
    }
  ];

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

  header {
    height: 7vh;
  }
  .v-menu {
    background-color: white;
    padding: 1rem;
  }
  .v-menu a {
    display: block;
    padding-bottom: 1rem;
  }
  .h-menu a {
    padding-right: 2rem;
  }

  :global(.svelte-fluid-header--button) {
    color: grey;
  }
  :global(.svelte-fluid-header--button:hover) {
    color: black;
  }
</style>

<header class="px-6 bg-gray-800 text-white">
  <Fluid>
    <div slot="left">
      <a href="/" class="uppercase font-semibold">John Hong Studio</a>
    </div>
    <nav class="h-menu" slot="right">
      {#each links as { href, name }}
        <a {href}>{name}</a>
      {/each}
    </nav>
    <nav class="v-menu" slot="drawer">
      {#each links as { href, name }}
        <a {href}>{name}</a>
      {/each}
    </nav>
  </Fluid>
</header>
<main class="container m-auto">
  <slot />
</main>
