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
  import Wrapper from "../../components/TransitionWrapper.svelte";
  import Feed from "../../components/Feed.svelte";
  import { artStore } from "../../stores";
  export let posts;
  artStore.merge(posts);
  let title = "new work";
</script>

<svelte:head>
  <title>New Work</title>
</svelte:head>

<Wrapper>
  <Feed {posts} {title} />
</Wrapper>
