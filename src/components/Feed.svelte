<script>
  export let posts = [];
  const outline = "focus:outline-none focus:shadow-outline active:bg-gray-900";
</script>

{#each posts as { img, title, slug }}
  <article class="mb-6 px-2">
    <img class="w-full" src={img} alt={title} />
    <section class="bg-gray-300 p-4 flex justify-between">
      <h5 class="uppercase font-medium tracking-wide font-medium ">{title}</h5>
      <div>
        <a href="artwork/{slug}" class="block w-4 h-4 {outline}">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path
              d="M16.172 9l-6.071-6.071 1.414-1.414L20 10l-.707.707-7.778
              7.778-1.414-1.414L16.172 11H0V9z" />
          </svg>
        </a>
      </div>

    </section>
  </article>
{/each}
