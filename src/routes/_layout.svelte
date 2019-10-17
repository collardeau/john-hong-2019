<script>
  // import Nav from "../components/Nav.svelte";
  import Fluid from "svelte-fluid-header";

  // const links = [...new Array(5)].map((_, i) => `Page ${i + 1}`);

  const links = [
    {
      href: "series1",
      name: "Mixed Media"
    },
    {
      href: "series2",
      name: "Acrylic"
    },
    {
      href: "series2",
      name: "Dancers"
    },
    {
      href: "series2",
      name: "Graffiti"
    },

    {
      href: "about",
      name: "About"
    }
  ];

  export let segment;
  // console.log(segment);
</script>

<style>
  :global(body) {
    font-family: futura;
  }
  header {
    background-color: white;
    height: 5vh;
    padding: 0 15px;
    /* font-family: futura; */
    font-size: 1.2rem;
    /* border-bottom: 1px solid grey; */
  }
  main {
    /* padding: 15px; */
    max-width: 1024px;
    margin: 0 auto;
    background: transparent;
  }
  .v-menu {
    background-color: lightblue;
    padding: 15px;
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
  /* .bg {
    position: absolute;
    top: 0;
    height: 100vh;
    width: 100vw;
    z-index: -10;
    opacity: 0.33;
    background-image: url("/img/family.jpg");
    background-size: cover;
    background-blend-mode: saturation;
  } */
</style>

<header class="shadw">
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
<main>
  <slot />
</main>

<div class="bg" />
