<script>
  import ChevronRight from "./svgs/ChevronRight.svelte";
  import { getHref } from "../utils/imgUtils";
  import { outline, heading } from "../theme";

  export let item = {};
  const { img, imgW, imgH } = item;
  const src = getHref(img, imgW);

  let w;
  // give initial height (based on image size) for lazy loading
  $: h = !w ? 0 : Math.round((imgH / imgW) * w);
</script>

<article bind:clientWidth={w}>
  {#if h}
    <div style="height: {h}px;">
      <img {src} alt={item.slug} />
    </div>
  {/if}
  <section
    class="bg-gray-800 p-2 pl-3 md:p-4 flex justify-between items-center">
    <h5 class="series-title text-sm sm:text-base">{item.title}</h5>
    <div>
      <a
        rel="prefetch"
        href="art/{item.slug}"
        class="text-gray-500 hover:text-white block w-8 h-8 p-1 {outline}">
        <ChevronRight />
      </a>
    </div>
  </section>
</article>
