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
  import { cloudinaryBase } from "../../config";
  export let data;
  let show = false;
  $: post = data.post;
  $: prev = data.prev;
  $: next = data.next;
  $: show = !!data.post;

  const onClick = () => (show = false);

  const outline = "focus:outline-none focus:shadow-outline active:bg-gray-900";
  let w;

  const handleKeydown = e => {
    if (e.keyCode === 39) {
      window.location.href = `/art/${next}`;
    }
    if (e.keyCode === 37) {
      window.location.href = `/art/${prev}`;
    }
  };
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<svelte:window on:keydown={handleKeydown} />

<Wrapper>
  {#if show}
    <section
      class="mt-4 sm:mt-12 pb-20 text-center w-full sm:flex sm:justify-around"
      in:fade={{ duration: 400, delay: 100 }}
      out:fade={{ duration: 100 }}>
      <div bind:clientWidth={w}>
        <img
          class=""
          src="{cloudinaryBase({ w })}{post.img}"
          alt={post.title} />
      </div>
      <div class="pt-5 sm:order-first">
        <h3 class="py-2 text-gray-100 uppercase tracking-wider">
          {post.title}
        </h3>
        <div class="text-gray-500 text-sm">
          {#if post.materials}
            <p class="capitalize">{post.materials}</p>
          {/if}
          {#if post.width}
            <p class="mt-1">
              {post.each ? 'each ' : ''}{post.width} x {post.height} inches
            </p>
          {/if}
        </div>
      </div>
    </section>
  {/if}
</Wrapper>

<nav
  class="text-gray-200 bg-gray-800 py-1 fixed bottom-0 left-0 w-full flex
  justify-around">
  <div class="h-10 w-10">
    <a
      on:click={onClick}
      rel="prefetch"
      href="/art/{prev}"
      class="block p-2 text-gray-500 hover:text-white {outline}">
      <svg
        class="fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20">
        <path
          d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm8-10a8 8 0 1 0-16 0 8 8 0
          0 0 16 0zM7.46 9.3L11 5.75l1.41 1.41L9.6 10l2.82 2.83L11 14.24 6.76
          10l.7-.7z" />
      </svg>
    </a>
  </div>
  <div class="h-10 w-10">
    <a
      on:click={onClick}
      rel="prefetch"
      href="/art/{next}"
      class="block p-2 text-gray-500 hover:text-white {outline}">
      <svg
        class="fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20">
        <path
          d="M10 0a10 10 0 1 1 0 20 10 10 0 0 1 0-20zM2 10a8 8 0 1 0 16 0 8 8 0
          0 0-16 0zm10.54.7L9 14.25l-1.41-1.41L10.4 10 7.6 7.17 9 5.76 13.24
          10l-.7.7z" />
      </svg>

    </a>
  </div>
</nav>
