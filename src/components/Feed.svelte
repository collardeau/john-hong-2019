<script>
  import { LazyLoadContainer, LazyLoad } from "svelte-lazyload";
  import FeedItem from "./FeedItem.svelte";
  import { makeCols } from "../utils/postsUtils";
  export let posts = [];
  export let title = "";

  $: cols = makeCols(posts, title);
</script>

<section class="max-w-5xl mx-auto mb-5 ">
  <div class="mx-2 mx-0">
    <h3 class="py-4 mx-2 capitalize text-lg">series: {title}</h3>

    <div class="block md:hidden">
      {#each posts.slice(0, 3) as item, i}
        <div class:pt-4={i}>
          <FeedItem {item} />
        </div>
      {/each}
      <LazyLoadContainer>
        {#each posts.slice(3) as item, i}
          <LazyLoad id={item.slug}>
            <div class="pt-4">
              <FeedItem {item} />
            </div>
          </LazyLoad>
        {/each}
      </LazyLoadContainer>
    </div>

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
