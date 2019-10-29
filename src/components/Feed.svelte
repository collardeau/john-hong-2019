<script>
  import { outline, heading } from "../theme";
  import { cloudinaryBase } from "../config";
  export let posts = [];
  export let title = "";
  let w;
</script>

<section>
  <h3 class={heading}>{title}</h3>
  {#each posts as { img, title, slug }}
    <article class="mb-6" bind:clientWidth={w}>
      <img class="w-full" src="{cloudinaryBase({ w })}{img}" alt={title} />
      <section
        class="bg-gray-800 text-white p-4 pr-2 flex justify-between items-center">
        <h5 class="uppercase font-medium tracking-wide font-medium ">
          Series: {title}
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
                d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242
                4.243L8 15.657l4.95-4.95z" />
            </svg>
          </a>
        </div>
      </section>
    </article>
  {/each}
</section>
