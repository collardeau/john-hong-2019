<script>
  import { slide } from "svelte/transition";
  import { outline } from "../theme";
  export let segment;

  let isOpen = false;
  const links = [
    {
      href: "new-work",
      name: "New Work"
    },
    {
      href: "work-on-paper",
      name: "Work on Paper"
    },
    {
      href: "mixed-media",
      name: "Mixed Media"
    },

    {
      href: "miscellaneous",
      name: "Miscelleneous"
    },
    {
      href: "about",
      name: "About"
    }
  ];

  const handleClick = () => {
    isOpen = !isOpen;
  };

  const onClick = () => {
    // isOpen = false;
  };

  const title = "john hong studio";
</script>

<style>
  header {
    height: 7vh;
  }
</style>

<!-- mobile -->
<header
  class="relative md:hidden pl-2 pr-2 bg-gray-800 text-white items-center">
  <div class="flex justify-between items-center h-full">
    <h1 class="uppercase font-medium tracking-wider">
      {#if segment}
        <a href="/" class="p-2 {outline}">{title}</a>
      {:else}
        <span class="pl-2">{title}</span>
      {/if}
    </h1>
    <button
      type="button"
      class="block w-8 h-8 p-2 text-gray-400 hover:text-white {outline}"
      on:click={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        class="fill-current">
        {#if !isOpen}
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        {:else}
          <path
            d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414
            1.414L10 11.414l7.071 7.071 1.414-1.414L11.414
            10l7.071-7.071-1.414-1.414L10 8.586z" />
        {/if}
      </svg>
    </button>
  </div>
  {#if isOpen}
    <nav
      transition:slide={{ duration: 300 }}
      class="px-2 pb-4 absolute right-0 w-full z-10 bg-gray-800">
      <a href="art" class="hidden">Artwork</a>
      {#each links as { href, name }}
        {#if segment === href}
          <span class="block p-2 mb-2 text-gray-600">{name}</span>
        {:else}
          <a
            on:click={onClick}
            class="block p-2 mb-2 hover:bg-gray-700 rounded {outline}"
            {href}>
            {name}
          </a>
        {/if}
      {/each}
    </nav>
  {/if}

</header>

<!-- desktop -->
<header
  class="hidden md:flex justify-between px-4 bg-gray-800 text-white items-center">
  <h1 class="uppercase font-medium tracking-wider">
    {#if segment}
      <a href="/" class={outline}>{title}</a>
    {:else}
      <span>{title}</span>
    {/if}
  </h1>
  <nav>
    <!-- hidden link for static export -->
    <a href="art" class="hidden">artwork</a>
    {#each links as { href, name }}
      {#if segment === href}
        <span class="p-2 ml-2 text-gray-600">{name}</span>
      {:else}
        <a {href} class="p-2 ml-2 hover:bg-gray-700 rounded {outline}">
          {name}
        </a>
      {/if}
    {/each}
  </nav>
</header>
