<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`art.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
  // this is a hidden page
  let title = "art";
</script>

<script>
  import Feed from "../../components/Feed.svelte";
  export let posts;
</script>

<svelte:head>
  <title>Artwork</title>
</svelte:head>

<Feed {posts} {title} />
