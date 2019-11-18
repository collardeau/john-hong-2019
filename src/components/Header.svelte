<script>
  import { slide } from "svelte/transition";
  import { headerH } from "../stores";
  import { outline } from "../theme";
  export let segment, lastSegment;

  let h;
  $: h && headerH.set(h);
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
      name: "Miscellaneous"
    },
    {
      href: "about",
      name: "About"
    }
  ];

  const handleClick = () => {
    isOpen = !isOpen;
  };

  const title = "john hong studio";

  $: {
    if (segment !== lastSegment) {
      isOpen = false;
      lastSegment = segment;
    }
  }
</script>

<style>

</style>

<header class="bg-gray-800" bind:clientHeight={h}>
  <!-- mobile -->
  <div class="relative lg:hidden p-2 items-center">
    <div class="flex justify-between items-center h-full">
      <h1 class="uppercase font-medium tracking-wider text-lg sm:text-xl">
        {#if segment}
          <a href="/" class="p-2 {outline}">{title}</a>
        {:else}
          <span class="pl-2">{title}</span>
        {/if}
      </h1>

      <button
        type="button"
        class="block w-8 h-8 sm:w-10 sm:h-10 p-2 text-gray-400 hover:text-white {outline}"
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
        transition:slide={{ duration: 350 }}
        class="px-2 pb-4 mt-2 absolute right-0 w-full z-10 bg-gray-800">
        {#each links as { href, name }}
          {#if segment === href}
            <span class="block p-2 mb-2 text-gray-600">{name}</span>
          {:else}
            <a
              class="block p-2 mb-2 hover:bg-gray-700 rounded {outline}"
              {href}>
              {name}
            </a>
          {/if}
        {/each}
      </nav>
    {/if}
  </div>
  <!-- desktop -->
  <div class="hidden lg:flex justify-between px-4 xl:px-6 py-4 items-center">
    <h1 class="uppercase font-medium text-xl tracking-wider">
      {#if segment}
        <a href="/" class={outline}>{title}</a>
      {:else}
        <span>{title}</span>
      {/if}
    </h1>
    <nav>
      {#each links as { href, name }}
        {#if segment === href}
          <span class="p-2 ml-4 text-gray-600">{name}</span>
        {:else}
          <a {href} class="p-2 ml-4 hover:bg-gray-700 rounded {outline}">
            {name}
          </a>
        {/if}
      {/each}
    </nav>
  </div>
</header>
