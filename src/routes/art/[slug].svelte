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
  import { fade } from "svelte/transition";
  import Wrapper from "../../components/TransitionWrapper.svelte";
  import Art from "../../components/Art.svelte";
  import Nav from "./_nav.svelte";
  export let data;
  let show = false;
  $: artwork = data.post;
  $: show = !!data.post;
  const hide = () => (show = false);
</script>

<svelte:head>
  <title>{artwork.title}</title>
</svelte:head>

<Wrapper>
  {#if show}
    <div
      in:fade={{ duration: 400, delay: 100 }}
      out:fade={{ duration: 100 }}
      class="col flex-1 mb-12 lg:mb-16">
      <Art {artwork} />
    </div>
  {/if}
</Wrapper>

<div class="flex fixed bottom-0 left-0 w-full h-12 lg:h-16">
  <Nav {hide} next={data.next} prev={data.prev} />
</div>
