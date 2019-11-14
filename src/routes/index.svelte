<script>
  import Wrapper from "../components/TransitionWrapper.svelte";
  import SeriesCover from "../components/SeriesCover.svelte";
  import { artStore } from "../stores";
  const series = [
    {
      title: "new work",
      href: "new-work",
      img: "art/new-work-1.jpg",
      slug: "new-work-1",
      imgW: 695,
      imgH: 850
    },
    {
      title: "work on paper",
      href: "work-on-paper",
      img: "art/the-light-for-grace.jpg",
      slug: "the-light-for-grace",
      imgW: 634,
      imgH: 850
    },
    {
      title: "mixed media",
      href: "mixed-media",
      img: "art/mark-at-the-gate.jpg",
      slug: "mark-at-the-gate",
      imgW: 843,
      imgH: 850
    },

    {
      title: "miscellaneous",
      href: "miscellaneous",
      img: "art/dance-12.jpg",
      slug: "dance-12",
      imgW: 638,
      imgH: 850
    }
  ];

  artStore.merge(series);
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
