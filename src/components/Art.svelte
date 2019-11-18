<script>
  import { images, headerH, artNavH } from "../stores";
  import { calcMaxW, remToPxs } from "../utils/imgUtils";
  export let art;

  let windowH, windowW, w, h, viewH, imageWrapperH, altTitleH;

  $: title = art.title;
  $: image = $images[art.slug];
  $: src = image.url;
  $: imageW = calcMaxW(art, h, w);
  $: imageH = Math.round(imageW * image.imgRatio);
  $: viewH = windowH && windowH - $artNavH - $headerH;

  const infoH = remToPxs(8);
  $: enoughVerticalSpace = imageWrapperH + infoH + altTitleH + 100 < viewH;
  $: largeScreen = windowW > 768;
  $: horizontal = largeScreen && !enoughVerticalSpace;
  $: altTitle = largeScreen & !horizontal;

  const dimensions = `${art.each ? "each " : ""}${art.width} x ${art.height}`;
</script>

<style>
  section {
    /* border: 1px solid red; */
    margin-left: auto;
    margin-right: auto;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 0;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  section.horizontal {
    max-width: none;
    flex-direction: row;
  }
  .info {
    display: flex;
    height: 8rem;
    padding: 0 0.5rem;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  h3 {
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-size: 1.125rem;
    margin-bottom: 0.25rem;
    padding-bottom: 0.375rem;
  }
  .details {
    display: flex;
    flex-direction: column;
    line-height: 1.7;
    font-size: 0.875rem;
  }
  .horizontal .image-wrapper {
    order: 5;
  }
  @media (min-width: 768px) {
    section {
      margin-top: 0.75rem;
      margin-bottom: 0.75rem;
    }
    h3 {
      font-size: 1.5rem;
    }
    .details {
      font-size: 1rem;
    }
  }
</style>

<svelte:window bind:innerHeight={windowH} bind:innerWidth={windowW} />

<section
  class="container"
  class:horizontal
  bind:clientWidth={w}
  bind:clientHeight={h}>
  <h3
    style="display: {altTitle ? 'block' : 'none'};"
    class="border-b-2 border-gray-800"
    bind:clientHeight={altTitleH}>
    {art.title}
  </h3>
  <div class="image-wrapper" bind:clientHeight={imageWrapperH}>
    <img {src} alt={title} width={imageW} height={imageH} />
  </div>
  <div class="info">
    <h3
      style="display: {!altTitle ? 'block' : 'none'};"
      class="border-b border-gray-800">
      {art.title}
    </h3>
    <div class="details text-gray-500">
      <span class="">{art.materials}</span>
      {#if art.width}
        <span class="">{dimensions} inches</span>
      {/if}
    </div>
  </div>
</section>
