<script>
  import ChevronRight from "./svgs/ChevronRight.svelte";
  import { images } from "../stores";
  import { outline } from "../theme";
  export let item = {};
  export let lazy = false;

  const { img, imgW, imgH } = item;
  $: imgRatio = imgH / imgW;

  $: image = $images[item.slug];
  $: src = lazy && "IntersectionObserver" in window ? "" : image.url;

  // initial height (based on image size) for lazy loading
  let w = 0;
  $: h = Math.round(imgRatio * w);

  const onIntersect = entries => {
    entries.forEach(e => {
      if (!src && e.isIntersecting) src = image.url;
    });
  };

  const observer = new IntersectionObserver(onIntersect, {
    rootMargin: "450px"
  });

  function lazyImg(node) {
    if (!lazy) return;
    observer.observe(node);
  }
</script>

<article
  bind:clientWidth={w}
  use:lazyImg
  style="max-width: {image.w}px;"
  class="mx-auto">
  {#if h}
    <div style="height: {h > imgH ? imgH : h}px; width=">
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
