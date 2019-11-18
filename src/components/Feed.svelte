<script>
  import FeedItem from "./FeedItem.svelte";
  import { makeCols } from "../utils/postsUtils";
  export let posts = [];
  export let title = "";
  $: cols = makeCols(posts, title);
</script>

<section class="mb-5 max-w-5xl mx-auto">
  <div class="mx-2 md:mx-0">
    <h3 class="py-4 mx-2 capitalize text-lg">series: {title}</h3>
    <div class="block md:hidden">
      {#each posts.slice(0, 2) as item, i}
        <div class:mt-4={i}>
          <FeedItem {item} />
        </div>
      {/each}
      {#each posts.slice(2) as item, i}
        <div class="mt-4">
          <FeedItem {item} lazy={true} />
        </div>
      {/each}
    </div>

    <div class="hidden md:flex">
      {#each cols as c}
        <div class="w-1/2 px-2">
          {#each c.slice(0, 3) as item, i}
            <div class:mt-4={i}>
              <FeedItem {item} />
            </div>
          {/each}
          {#each c.slice(3) as item}
            <div class="mt-4">
              <FeedItem {item} lazy={true} />
            </div>
          {/each}
        </div>
      {/each}
    </div>
  </div>
</section>
