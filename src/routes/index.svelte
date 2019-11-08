<script>
  import Wrapper from "../components/TransitionWrapper.svelte";
  import SeriesCover from "../components/SeriesCover.svelte";
  const series = [
    {
      title: "new work",
      href: "new-work",
      img: "artwork/new-work-14.jpg",
      imgW: 958
    },
    {
      title: "mixed media",
      href: "mixed-media",
      img: "artwork/empress.jpg",
      imgW: 1024
    },
    {
      title: "work on paper",
      href: "work-on-paper",
      img: "artwork/the-light-for-grace.jpg",
      imgW: 954
    },

    {
      title: "miscellaneous",
      href: "miscellaneous",
      img: "artwork/dance-10.jpg",
      imgW: 960
    }
  ];
</script>

<svelte:head>
  <title>John Hong Studio</title>
</svelte:head>

<Wrapper>
  <div class="my-2 px-2 lg:flex flex-1">
    {#each series as serie}
      <div class="lg:hidden max-w-xl mx-auto mb-2">
        <SeriesCover {...serie} />
      </div>
      <div class="hidden lg:flex mb-24 bo">
        <div class="col mx-3 justify-center">
          <SeriesCover {...serie} />
        </div>
      </div>
    {/each}
  </div>
</Wrapper>
