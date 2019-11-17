<script>
  import { onMount } from "svelte";
  import { images } from "../stores";
  import { calcMaxW, remToPxs } from "../utils/imgUtils";
  export let art;

  let windowH, windowW, w, h, viewH, imageH, imageW, imageWrapperH;

  let headerNode, imageNode, navNode;
  onMount(() => {
    headerNode = document.getElementsByTagName("header")[0];
    imageNode = document.getElementsByClassName("image-wrapper")[0];
    navNode = document.getElementsByClassName("art-nav")[0];
  });

  $: title = art.title;
  $: image = $images[art.slug];
  $: src = image.url;
  $: imageW = calcMaxW(art, h, w);
  $: imageH = Math.round(imageW * image.imgRatio);

  $: viewH =
    windowH &&
    windowH -
      navNode.getBoundingClientRect().height -
      headerNode.getBoundingClientRect().height;
  const infoH = remToPxs(8);
  $: enoughVerticalSpace = !imageWrapperH
    ? true
    : imageWrapperH + infoH + 10 < viewH;
  $: horizontal = windowW > 768 && !enoughVerticalSpace;

  // $: console.log({ windowW, w, enoughVerticalSpace, horizontal });
  const dimensions = `${art.each ? "each " : ""}${art.width} x ${art.height}`;
</script>

<style>
  .container {
    /* border: 1px solid red; */
    max-width: 36rem;
    margin-left: auto;
    margin-right: auto;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 0;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .container.horizontal {
    max-width: none;
    flex-direction: row;
  }
  .info {
    display: flex;
    height: 8rem;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  h3 {
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-size: 1.125rem;
    margin-bottom: 0.25rem;
  }
  .details {
    display: flex;
    flex-direction: column;
    line-height: 1.7;
  }
  .gutter {
    margin-top: 0.5rem;
  }

  .horizontal div:first-child {
    order: 2;
  }

  @media (min-width: 768px) {
    .container {
      margin-top: 0.75rem;
      margin-bottom: 0.75rem;
    }
    h3 {
      font-size: 1.25rem;
    }
  }
</style>

<svelte:window bind:innerHeight={windowH} bind:innerWidth={windowW} />

<div
  class="container"
  class:horizontal
  bind:clientWidth={w}
  bind:clientHeight={h}>
  <div class="image-wrapper" bind:clientHeight={imageWrapperH}>
    <img {src} alt={title} width={imageW} height={imageH} />
  </div>
  <section class="info">
    <h3>{art.title}</h3>
    <div class="details text-gray-500 text-sm md:text-base">
      <span class="">{art.materials}</span>
      {#if art.width}
        <span class="">{dimensions} inches</span>
      {/if}
    </div>
  </section>
</div>
