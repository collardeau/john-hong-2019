<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`art.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
  // this is a hidden page
</script>

<script>
  export let posts;
</script>

<svelte:head>
  <title>Artwork</title>
</svelte:head>

<section class="pt-2 text-gray-500 text-center">
  <h3 class="font-xl font-semibold pb-2">All Artwork</h3>
  {#each posts as { img, title, slug }}
    <div class="py-2">
      <a rel="prefetch" href="art/{slug}">{title}</a>
    </div>
  {/each}
</section>
