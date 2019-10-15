<script>
  // import Nav from "../components/Nav.svelte";
  import Fluid from "svelte-fluid-header";

  // const links = [...new Array(5)].map((_, i) => `Page ${i + 1}`);

  const links = [
    {
      href: "series1",
      name: "Series 1"
    },
    // {
    //   href: "series2",
    //   name: "Series 2"
    // },
    // {
    //   href: "series3",
    //   name: "Series 3"
    // },
    {
      href: "about",
      name: "About"
    }
  ];

  export let segment;
  // console.log(segment);
</script>

<style>
  header {
    background-color: lightblue;
    height: 50px;
    padding: 0 15px;
  }
  main {
    padding: 15px;
  }
  .v-menu {
    background-color: lightblue;
    padding: 15px;
  }
  .v-menu a {
    display: block;
    padding-bottom: 15px;
  }
  .h-menu a {
    padding-right: 15px;
  }

  :global(.svelte-fluid-header--button) {
    color: grey;
  }
  :global(.svelte-fluid-header--button:hover) {
    color: black;
  }
</style>

<header>
  <Fluid>
    <div slot="left">John Hong Studio</div>
    <nav class="h-menu" slot="right">
      {#each links as { href, name }}
        <a {href}>{name}</a>
      {/each}
    </nav>
    <nav class="v-menu" slot="drawer">
      {#each links as link}
        <a href="javascript:void(0)">{link}</a>
      {/each}
    </nav>
  </Fluid>
</header>
<main>
  <slot />
</main>
