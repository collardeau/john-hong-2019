<script>
  import Wrapper from "../components/TransitionWrapper.svelte";
  import SeriesCover from "../components/SeriesCover.svelte";
  const series = [
    {
      title: "new work",
      href: "new-work",
      img: "artwork/new-work-14.jpg",
      slug: "new-work-14",
      imgW: 958,
      imgH: 1179
    },
    {
      title: "work on paper",
      href: "work-on-paper",
      img: "artwork/the-light-for-grace.jpg",
      slug: "the-light-for-grace",
      imgW: 954,
      imgH: 1280
    },
    {
      title: "mixed media",
      href: "mixed-media",
      img: "artwork/mark-at-the-gate.jpg",
      slug: "mark-at-the-gate",
      imgW: 1032,
      imgH: 1024
    },

    {
      title: "miscellaneous",
      href: "miscellaneous",
      img: "artwork/dance-12.jpg",
      slug: "dance-12",
      imgW: 843,
      imgH: 1100
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
