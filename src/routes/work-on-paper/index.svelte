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
  import Wrapper from "../../components/TransitionWrapper.svelte";
  import Feed from "../../components/Feed.svelte";
  import { artStore } from "../../stores";
  export let posts;
  artStore.merge(posts);
  let title = "work on paper";
</script>

<svelte:head>
  <title>Work on Paper</title>
</svelte:head>

<Wrapper>
  <Feed {posts} {title} />
</Wrapper>
