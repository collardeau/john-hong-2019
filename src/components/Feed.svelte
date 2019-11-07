<script>
  import { LazyLoadContainer, LazyLoad } from "svelte-lazyload";
  import FeedItem from "./FeedItem.svelte";
  import { heading } from "../theme";
  export let posts = [];
  export let title = "";
</script>

<section class="max-width mb-5">
  <h3 class={heading}>series: {title}</h3>
  <LazyLoadContainer>
    {#each posts as item, i}
      <LazyLoad id={item.slug}>
        <div class:pt-5={i}>
          <FeedItem {item} />
        </div>
      </LazyLoad>
    {/each}
  </LazyLoadContainer>

</section>
