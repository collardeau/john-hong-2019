<script>
  import NextSVG from "../../components/svgs/Next.svelte";
  import PrevSVG from "../../components/svgs/Prev.svelte";
  import { artNavH } from "../../stores";
  import { outline } from "../../theme";
  export let prev;
  export let next;

  let h;
  $: h && artNavH.set(h);
  $: prevHref = `/art/${prev}`;
  $: nextHref = `/art/${next}`;

  const handleKeydown = e => {
    if (e.keyCode === 39) {
      window.location.href = nextHref;
    }
    if (e.keyCode === 37) {
      window.location.href = prevHref;
    }
  };
</script>

<svelte:window on:keydown={handleKeydown} />

<nav
  class="art-nav bg-gray-800 flex justify-around items-center flex-1"
  bind:clientHeight={h}>
  {#each [prevHref, nextHref] as href, i}
    <div class="h-10 w-10 lg:h-14 lg:md-14">
      <a
        {href}
        rel="prefetch"
        class="block p-2 text-gray-500 hover:text-white {outline}">
        {#if !i}
          <PrevSVG />
        {:else}
          <NextSVG />
        {/if}
      </a>
    </div>
  {/each}
</nav>
