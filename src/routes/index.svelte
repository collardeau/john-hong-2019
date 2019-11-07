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
  <div class="my-2 md:flex flex-1">
    {#each series as serie}
      <div class="md:hidden mb-2">
        <SeriesCover {...serie} h="40vh" />
      </div>
      <div class="hidden md:flex">
        <div class="col mx-2 justify-center">
          <SeriesCover {...serie} h="50%" />
        </div>
      </div>
    {/each}
  </div>
</Wrapper>
