<script>
  import { cloudinaryBase } from "../config";
  export let posts = [];
  const outline = "focus:outline-none focus:shadow-outline active:bg-gray-900";
  let w;
</script>

{#each posts as { img, title, slug }}
  <article class="mx-2 mb-6" bind:clientWidth={w}>
    <img class="w-full" src="{cloudinaryBase({ w })}{img}" alt={title} />
    <section class="bg-gray-300 p-4 flex justify-between items-center">
      <h5 class="uppercase font-medium tracking-wide font-medium ">{title}</h5>
      <div>
        <a
          rel="prefetch"
          href="artwork/{slug}"
          class="text-gray-700 hover:text-gray-900 block w-8 h-8 p-1 {outline}">
          <svg
            class="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20">
            <path
              d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93
              17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9
              11V9h2v6H9v-4zm0-6h2v2H9V5z" />
          </svg>
        </a>
      </div>

    </section>
  </article>
{/each}
