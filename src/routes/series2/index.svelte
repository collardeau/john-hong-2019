<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`series2.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<svelte:head>
  <title>Series 1</title>
</svelte:head>

<ul>
  {#each posts as { title, img }}
    <h1>{title}</h1>
    <img src={img} alt={title} />
  {/each}
</ul>
