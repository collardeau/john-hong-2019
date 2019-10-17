<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`mixed-media.json`)
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
  <title>Series 1</title>
</svelte:head>

<section class="">
  <h3 class="text-white p-4">Mixed Media series</h3>
  <Feed {posts} />
</section>
