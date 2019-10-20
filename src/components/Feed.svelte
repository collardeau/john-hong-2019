<script>
  export let posts = [];
</script>

{#each posts as { img, title, slug }}
  <article class="mb-6 px-2">
    <a href="artwork/{slug}">
      <img class="w-full" src={img} alt={title} />
    </a>
    <section class="bg-gray-300 p-4 flex justify-between">
      <h5 class="uppercase font-medium tracking-wide font-medium ">{title}</h5>
    </section>
  </article>
{/each}
