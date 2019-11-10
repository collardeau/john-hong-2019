<script>
  import ChevronRight from "./svgs/ChevronRight.svelte";
  import { getHref } from "../utils/imgUtils";
  import { outline } from "../theme";

  export let item = {};
  export let lazy = false;
  const { img, imgW, imgH } = item;
  const href = getHref(img, imgW);

  let src = lazy && "IntersectionObserver" in window ? "" : getHref(img, imgW);
  let w;
  // give initial height (based on image size) for lazy loading
  $: h = !w ? 0 : Math.round((imgH / imgW) * w);

  const onIntersect = entries => {
    entries.forEach(e => {
      if (!src && e.isIntersecting) src = href;
    });
  };

  const observer = new IntersectionObserver(onIntersect, {
    rootMargin: "500px"
  });

  function lazyImg(node) {
    if (!lazy) return;
    observer.observe(node);
  }
</script>

<article bind:clientWidth={w} use:lazyImg>
  {#if h}
    <div style="height: {h}px;">
      <img {src} data-src={src} alt={item.slug} />
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
