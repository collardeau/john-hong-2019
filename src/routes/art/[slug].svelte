<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`art/${params.slug}.json`);
    const data = await res.json();
    if (res.status === 200) {
      return { data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import { beforeUpdate, afterUpdate } from "svelte";
  import { fade } from "svelte/transition";
  import Wrapper from "../../components/TransitionWrapper.svelte";
  import Art from "../../components/Art.svelte";
  import Nav from "./_nav.svelte";
  import { artStore } from "../../stores";
  export let data;
  $: art = data.post;
  $: artStore.merge([art]);
  $: slug = art.slug;
  let lastSlug = "";
  let fadeOut = 100;
  let fadeIn = 250;
  let show = true;
  beforeUpdate(() => {
    if (lastSlug !== slug) {
      show = false;
    }
  });
  afterUpdate(() => {
    if (lastSlug !== slug) {
      lastSlug = slug;
      setTimeout(() => {
        show = true;
      }, fadeOut + 25);
    }
  });
</script>

<svelte:head>
  <title>{art.title}</title>
</svelte:head>

<Wrapper>
  {#if show}
    <div
      out:fade={{ duration: fadeOut }}
      in:fade={{ delay: 100, duration: fadeIn }}
      class="col flex-1 mx-2 mb-12 lg:mb-16">
      <Art {art} />
    </div>
  {/if}
</Wrapper>

<div class="flex fixed bottom-0 left-0 w-full h-12 lg:h-16">
  <Nav next={data.next} prev={data.prev} />
</div>
