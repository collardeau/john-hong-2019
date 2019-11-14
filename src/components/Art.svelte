<script>
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
  .horizontal .top-heading {
    display: none;
  }
  .vertical .grouped-heading {
    display: none;
  }
</style>

<section
  class="flex-1 w-full flex items-center my-0 md:my-4 mb-8 md:mb-16"
  class:horizontal
  class:vertical
  bind:clientWidth={containerW}
  bind:clientHeight={containerH}>
  {#if containerH && containerW}
    <h3
      class="top-heading py-3 text-center my uppercase tracking-wider text-xl
      md:text-2xl ">
      {art.title}
    </h3>
    <div style="with:{displayW}px; height:{displayH}px;">
      <img {src} alt={title} width={displayW} height={displayH} />
    </div>
    <div class="flex justify-center py-5" style="min-width: 300px;">
      <div class="col text-center">
        <section class="col">
          <h3 class="grouped-heading mb-2 uppercase tracking-wider md:text-xl">
            {art.title}
          </h3>
          <div class="text-gray-500 text-sm md:text-base">
            {#if art.materials}
              <p class="capitalize">{art.materials}</p>
            {/if}
            {#if art.width}
              <p class="mt-1">
                {art.each ? 'each ' : ''}{art.width} x {art.height} inches
              </p>
            {/if}
          </div>
        </section>
      </div>
    </div>
  {/if}

</section>
