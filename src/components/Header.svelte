<script>
  import { slide } from "svelte/transition";
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
</script>

<style>
  header {
    height: 7vh;
  }
</style>

<!-- mobile -->
<header
  class="relative md:hidden w-100 px-4 bg-gray-800 text-white items-center">
  <div class="flex justify-between items-center h-full">
    <div>
      <a href="/" class="uppercase font-semibold tracking-wider">
        John Hong Studio
      </a>
    </div>
    <button type="button" class="block w-6 h-6" on:click={handleClick}>
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
      transition:slide={{ duration: 200 }}
      class="absolute right-0 w-full z-10 bg-gray-800 p-2 px-4">
      {#each links as { href, name }}
        <div class="pb-4">
          <a {href}>{name}</a>
        </div>
      {/each}
    </nav>
  {/if}

</header>

<!-- desktop -->
<header
  class="hidden md:flex justify-between px-6 bg-gray-800 text-white items-center">
  <div>
    <a href="/" class="uppercase font-semibold">John Hong Studio</a>
  </div>
  <nav>
    {#each links as { href, name }}
      <a {href} class="pl-4 ml-2">{name}</a>
    {/each}
  </nav>
</header>
