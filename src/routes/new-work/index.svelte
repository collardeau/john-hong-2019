<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`new-work.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  import Feed from "../../components/Feed.svelte";
  export let posts;
</script>

<svelte:head>
  <title>New Work</title>
</svelte:head>

<h3 class="text-white p-4 capitalize">new work</h3>
<Feed {posts} />
