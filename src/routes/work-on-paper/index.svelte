<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`work-on-paper.json`)
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
  <title>Work on Paper</title>
</svelte:head>

<section class="max-w-lg m-auto">
  <h3 class="text-white p-4 capitalize">work on paper</h3>
  <Feed {posts} />
</section>
