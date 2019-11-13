<script>
  import Info from "./ArtInfo.svelte";
  import { images } from "../stores";
  import { calcMaxW } from "../utils/imgUtils";
  export let artwork;
  $: alt = artwork.title;
  $: img = artwork.img;
  let h, w;

  $: image = $images[artwork.slug];
  $: src = image.url;
  $: maxW = calcMaxW(artwork, h, w);
</script>

<section class="col flex-1 lg:hidden mt-4">
  <img {src} {alt} />
  <Info {artwork} />
</section>

<section class="hidden lg:flex lg:flex-col lg:flex-1">
  <div class="flex items-center flex-1 mb-16 mt-12" bind:clientHeight={h}>
    <div class="w-1/3">
      <Info {artwork} />
    </div>
    <div class="col w-2/3" bind:clientWidth={w}>
      {#if maxW}
        <div class="self-end" style="width: {maxW}px">
          <img {src} {alt} />
        </div>
      {/if}
    </div>
  </div>
</section>
