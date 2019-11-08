<script>
  import { LazyLoadContainer, LazyLoad } from "svelte-lazyload";
  import FeedItem from "./FeedItem.svelte";
  import { heading } from "../theme";
  export let posts = [];
  export let title = "";

  $: half = Math.ceil(posts.length / 2);
  $: cols = posts.reduce(
    (acc, next, i) => {
      const [col1, col2] = acc;
      if (title === "work on paper") {
        // move piece before half to second col
        if (i === half - 1) return [[...col1], [...col2, next]];
      }
      if ((i + 2) % 2) {
        return [[...col1], [...col2, next]];
      } else {
        return [[...col1, next], [...col2]];
      }
    },
    [[], []]
  );
</script>

<section class="max-w-5xl mx-auto mb-5 ">
  <div class="mx-2 mx-0">
    <h3 class="py-4 mx-2 capitalize text-lg">series: {title}</h3>
    <LazyLoadContainer>
      <div class="block md:hidden">
        {#each posts as item, i}
          <LazyLoad id={item.slug}>
            <div class:pt-5={i}>
              <FeedItem {item} />
            </div>
          </LazyLoad>
        {/each}
      </div>
    </LazyLoadContainer>

    <div class="hidden md:flex">
      {#each cols as c}
        <div class="w-1/2 px-3">
          {#each c as item, i}
            <div class:pt-6={i}>
              <FeedItem {item} />
            </div>
          {/each}
        </div>
      {/each}

    </div>

  </div>
</section>
