<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`series1.json`)
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
  {#each posts as post}
    <h1>{post.title}</h1>
    <img src={post.img} alt={post.title} />
  {/each}
</ul>
