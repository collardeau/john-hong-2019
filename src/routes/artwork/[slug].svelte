<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`artwork/${params.slug}.json`);
    const data = await res.json();
    if (res.status === 200) {
      return { data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Wrapper from "../../components/TransitionWrapper.svelte";
  import { cloudinaryBase } from "../../config";

  export let data;
  $: post = data.post;
  $: prev = data.prev;
  $: next = data.next;

  const outline = "focus:outline-none focus:shadow-outline active:bg-gray-900";
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<Wrapper>
  <section class="px-2 mt-6 pb-20 text-center">
    <img
      class="w-full pb-1"
      src="{cloudinaryBase}{post.img}"
      alt={post.title} />
    <div class="pt-2">
      <h3 class="py-2 text-white uppercase text-lg font-medium">
        {post.title}
      </h3>
      <p class="text-white capitalize text-sm">{post.materials}</p>
      <p class="text-white text-sm">
        {post.width} x {post.height} inches{post.each ? ' each' : ''}
      </p>
    </div>
  </section>
</Wrapper>

<section
  class="text-gray-200 bg-gray-800 py-2 fixed bottom-0 left-0 w-full flex
  justify-around">
  <div class="h-10 w-10">
    <a
      rel="prefetch"
      href="/artwork/{prev}"
      class="block p-2 text-gray-400 hover:text-white {outline}">
      <svg
        class="fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20">
        <path
          d="M0 10a10 10 0 1 1 20 0 10 10 0 0 1-20 0zm2 0a8 8 0 1 0 16 0 8 8 0 0
          0-16 0zm8-2h5v4h-5v3l-5-5 5-5v3z" />
      </svg>
    </a>
  </div>
  <div class="h-10 w-10">
    <a
      rel="prefetch"
      href="/artwork/{next}"
      class="block p-2 text-gray-400 hover:text-white {outline}">
      <svg
        class="fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20">
        <path
          d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0
          0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
      </svg>
    </a>
  </div>
</section>
