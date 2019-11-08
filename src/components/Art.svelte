<script>
  import Info from "./ArtInfo.svelte";
  import { getHref, calcMaxW } from "../utils/imgUtils";
  import { mobile, desktop } from "../theme";
  export let artwork;
  $: alt = artwork.title;
  $: img = artwork.img;
  let h, w;

  $: src = getHref(artwork.img, artwork.imgW);
  $: maxW = calcMaxW(artwork, h, w);
</script>

<section class="{mobile} mt-4">
  <img {src} {alt} class="cover" />
  <Info {artwork} />
</section>

<section class={desktop}>
  <div class="flex items-center flex-1 mb-16 mt-12" bind:clientHeight={h}>
    <div class="w-1/3">
      <Info {artwork} />
    </div>
    <div class="col w-2/3" bind:clientWidth={w}>
      {#if maxW}
        <div class="self-end" style="width: {maxW}px">
          <img {src} {alt} class="cover" />
        </div>
      {/if}
    </div>
  </div>
</section>
