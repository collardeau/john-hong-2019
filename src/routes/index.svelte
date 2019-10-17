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

<section class="py-4">
  <SeriesCover title="mixed media" href="/series1" src="img/empress.jpg" />
  <SeriesCover
    title="work on paper"
    href="/series2"
    src="img/the-light-for-grace.jpg" />
  <SeriesCover title="miscellaneous" href="/series1" src="img/dance-5.jpg" />
  <SeriesCover title="new work" href="/series1" src="img/graffiti-1.jpg" />
</section>
