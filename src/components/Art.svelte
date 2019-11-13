<script>
  import ArtInfo from "./ArtInfo.svelte";
  import { images } from "../stores";
  import { calcMaxW } from "../utils/imgUtils";
  export let art;

  let containerW, containerH;
  $: title = art.title;
  $: image = $images[art.slug];
  $: src = image.url;
  $: displayW = calcMaxW(art, containerH, containerW);
  $: displayH = Math.round(displayW * image.imgRatio);
  $: deltaH = containerH - displayH;
  $: enoughVerticalSpace = deltaH > 150;
  $: horizontal = containerW > 768 && !enoughVerticalSpace;
  $: vertical = !horizontal;
</script>

<style>
  .horizontal {
    flex-direction: row;
    justify-content: space-around;
    margin: 0 auto;
  }
  .vertical {
    flex-direction: column;
    justify-content: space-evenly;
  }
</style>

<section
  class="flex-1 w-full flex items-center my-0 md:my-4"
  class:horizontal
  class:vertical
  bind:clientWidth={containerW}
  bind:clientHeight={containerH}>
  {#if containerH && containerW}
    <div style="with:{displayW}px; height:{displayH}px;">
      <img {src} alt={title} width={displayW} height={displayH} />
    </div>
    <div class="flex justify-center" style="min-width: 300px;">
      <ArtInfo artwork={art} />
    </div>
  {/if}

</section>
