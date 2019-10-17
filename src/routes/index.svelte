<script>
  import SeriesCover from "../components/SeriesCover.svelte";
</script>

<style>
  section {
    display: grid;
    grid-template-columns: repeat(1, 100%);
    grid-template-rows: repeat(4, 40vh);
    grid-gap: 1rem;
    height: auto;
  }

  @media (min-width: 640px) {
    section {
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

<section class="py-4 px-2">
  <SeriesCover title="new work" href="/new-work" src="img/graffiti-1.jpg" />
  <SeriesCover
    title="work on paper"
    href="/work-on-paper"
    src="img/the-light-for-grace.jpg" />
  <SeriesCover title="mixed media" href="/mixed-media" src="img/empress.jpg" />
  <SeriesCover
    title="miscellaneous"
    href="/miscellaneous"
    src="img/dance-5.jpg" />
</section>
