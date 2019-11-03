<script>
  import { LazyLoadContainer, LazyLoad } from "svelte-lazyload";
  import Img from "./ImageWrapper.svelte";
  import { outline, heading } from "../theme";
  export let posts = [];
  export let title = "";

  let w;
  const getHeight = (w, imgH, imgW) => {
    const ratio = imgH / imgW;
    return Math.round(ratio * w);
  };
</script>

<section class="mb-6">
  <h3 class={heading}>series: {title}</h3>
  <LazyLoadContainer>
    {#each posts as { img, title, slug, imgH, imgW }, i}
      <LazyLoad id={slug}>
        <article class:pt-6={i} bind:clientWidth={w}>
          <Img {w} {img} h={getHeight(w, imgH, imgW)} alt={title} />
          <section
            class="bg-gray-800 text-gray-300 p-2 pl-3 md:p-4 flex
            justify-between items-center">
            <h5
              class="uppercase font-medium tracking-wider text-sm sm:text-base">
              {title}
            </h5>
            <div>
              <a
                rel="prefetch"
                href="art/{slug}"
                class="text-gray-500 hover:text-white block w-8 h-8 p-1 {outline}">
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20">
                  <path
                    d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828
                    10l-4.242 4.243L8 15.657l4.95-4.95z" />
                </svg>
              </a>
            </div>
          </section>
        </article>
      </LazyLoad>
    {/each}
  </LazyLoadContainer>

</section>
