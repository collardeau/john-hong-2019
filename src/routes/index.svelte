<script>
  import Wrapper from "../components/TransitionWrapper.svelte";
  import SeriesCover from "../components/SeriesCover.svelte";
</script>

<style>
  div {
    display: grid;
    grid-template-columns: repeat(1, 100%);
    grid-template-rows: repeat(4, 35vh);
    grid-gap: 1.5rem;
    height: auto;
  }

  @media (min-width: 640px) {
    div {
      grid-template-columns: repeat(2, 50%);
      grid-template-rows: repeat(2, 50%);
      grid-gap: 1rem;
      height: calc(93vh - 1rem);
    }
  }
</style>

<svelte:head>
  <title>John Hong Studio</title>
</svelte:head>

<Wrapper>
  <section class="px-2 mb-8 absolute">
    <h3 class="text-white px-2 py-4 capitalize">View Series</h3>
    <div>
      <SeriesCover title="new work" href="/new-work" src="img/graffiti-1.jpg" />
      <SeriesCover
        title="work on paper"
        href="/work-on-paper"
        src="img/the-light-for-grace.jpg" />
      <SeriesCover
        title="mixed media"
        href="/mixed-media"
        src="img/empress.jpg" />
      <SeriesCover
        title="miscellaneous"
        href="/miscellaneous"
        src="img/dance-5.jpg" />
    </div>
  </section>
</Wrapper>
