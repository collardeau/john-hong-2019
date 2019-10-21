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
  import { slide } from "svelte/transition";

  export let data;
  $: post = data.post;
  $: prev = data.prev;
  $: next = data.next;
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<section class="px-2">
  <h3 class="py-2 pl-2 text-white uppercase">{post.title}</h3>
  <img class="w-full" src={post.img} alt={post.title} />
  <p class="text-white py-4">mixed media on canvas</p>
</section>

<section
  class="text-gray-200 bg-gray-800 p-4 fixed bottom-0 left-0 w-full flex
  justify-around">
  <div class="h-6 w-6">
    <a href="/artwork/{prev}">
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
  <div class="h-6 w-6">
    <a href="/artwork/{next}">
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
