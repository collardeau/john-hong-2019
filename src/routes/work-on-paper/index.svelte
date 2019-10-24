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
  import { heading } from "../../theme";
  export let posts;
</script>

<svelte:head>
  <title>Work on Paper</title>
</svelte:head>

<Wrapper>
  <section class="max-w-lg m-auto">
    <h3 class={heading}>series: work on paper</h3>
    <Feed {posts} />
  </section>
</Wrapper>
