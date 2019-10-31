<script>
  import Wrapper from "../components/TransitionWrapper.svelte";
  import SeriesCover from "../components/SeriesCover.svelte";
  import { heading } from "../theme";
  import { cloudinaryBase } from "../config";
  let w;
  const series = [
    {
      title: "new work",
      href: "new-work",
      img: "new-work-14.jpg"
    },
    {
      title: "mixed media",
      href: "mixed-media",
      img: "empress.jpg"
    },
    {
      title: "work on paper",
      href: "work-on-paper",
      img: "the-light-for-grace.jpg"
    },

    {
      title: "miscellaneous",
      href: "miscellaneous",
      img: "dance-10.jpg"
    }
  ];
</script>

<svelte:head>
  <title>John Hong Studio</title>
</svelte:head>

<Wrapper>
  <section class="w-full mt-3">
    <!-- <h3 class={heading}>View Series</h3> -->
    <div class="w-full" bind:clientWidth={w}>
      {#each series as { title, href, img }}
        <SeriesCover
          {title}
          {href}
          src="{cloudinaryBase({ w })}artwork/{img}" />
      {/each}
      }
    </div>
  </section>
</Wrapper>
