<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`miscellaneous.json`)
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
  <title>Miscellaneous</title>
</svelte:head>

<h3 class="text-white p-4 capitalize">miscellaneous</h3>
<Feed {posts} />
