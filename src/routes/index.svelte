<script>
  import Wrapper from "../components/TransitionWrapper.svelte";
  import SeriesCover from "../components/SeriesCover.svelte";
  import { heading } from "../theme";
  import { cloudinaryBase } from "../config";
  let w;
</script>

<svelte:head>
  <title>John Hong Studio</title>
</svelte:head>

<Wrapper>
  <section class="mb-4 absolute w-full">
    <h3 class={heading}>View Series</h3>
    <div class="w-full px-2" bind:clientWidth={w}>
      <SeriesCover
        title="new work"
        href="/new-work"
        src="{cloudinaryBase({ w })}artwork/new-work-03.jpg" />
      <SeriesCover
        title="work on paper"
        href="/work-on-paper"
        src="{cloudinaryBase({ w })}artwork/the-light-for-grace.jpg" />
      <SeriesCover
        title="mixed media"
        href="/mixed-media"
        src="{cloudinaryBase({ w })}artwork/empress.jpg" />
      <SeriesCover
        title="miscellaneous"
        href="/miscellaneous"
        src="{cloudinaryBase({ w })}artwork/dance-5.jpg" />
    </div>
  </section>
</Wrapper>
