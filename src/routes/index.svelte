<script>
  import SeriesCover from "../components/SeriesCover.svelte";
</script>

<style>
  section {
    height: 95vh;
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: repeat(2, 50%);
    padding: 0 0 50px 0;
  }
</style>

<svelte:head>
  <title>John Hong Studio</title>
</svelte:head>

<section>
  <SeriesCover title="mixed media" href="/series1" src="img/empress.jpg" />
  <SeriesCover
    title="work on paper"
    href="/series2"
    src="img/the-light-for-grace.jpg" />
  <SeriesCover title="miscellaneous" href="/series1" src="img/dance-5.jpg" />
  <SeriesCover title="new work" href="/series1" src="img/graffiti-1.jpg" />
</section>
