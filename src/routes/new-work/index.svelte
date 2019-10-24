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
  import { heading } from "../../theme";
  export let posts;
</script>

<svelte:head>
  <title>New Work</title>
</svelte:head>

<Wrapper>
  <section class="max-w-lg m-auto">
    <h3 class={heading}>series: new work</h3>
    <Feed {posts} />
  </section>
</Wrapper>
