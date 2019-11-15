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
    justify-content: space-around;
  }
  .horizontal .top-heading {
    display: none;
  }
  .vertical .grouped-heading {
    display: none;
  }
  .horizontal .info {
    order: -1;
  }
</style>

<section
  class="flex-1 w-full flex items-center my-0 md:my-4 mb-6 md:mb-12"
  class:horizontal
  class:vertical
  bind:clientWidth={containerW}
  bind:clientHeight={containerH}>
  {#if containerH && containerW}
    <h3
      class="top-heading py-2 px-2 mb-4 mt-3 text-center my uppercase
      tracking-wider text-xl lg:text-2xl border-b border-gray-800">
      {art.title}
    </h3>
    <div style="with:{displayW}px; height:{displayH}px;">
      <img {src} alt={title} width={displayW} height={displayH} />
    </div>
    <div class="info flex justify-center pt-4 pb-2" style="min-width:300px;">
      <div class="col text-center border-1">
        <section class="col">
          <h3
            class="grouped-heading mx-auto pb-1 px-1 mb-3 uppercase
            tracking-wider text-xl lg:text-2xl border-b border-gray-800">
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
