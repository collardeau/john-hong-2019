<script>
  export let posts = [];
</script>

{#each posts as { img, title }}
  <article class="mb-6 px-2">
    <img class="w-full" src={img} alt={title} />
    <section class="bg-gray-300 p-4 flex justify-between">
      <h5 class="uppercase font-medium">{title}</h5>
      <div>
        <button type="button" class="w-4 h-4">
          <svg
            class="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20">
            <path
              d="M2.8 15.8L0 13v7h7l-2.8-2.8 4.34-4.32-1.42-1.42L2.8 15.8zM17.2
              4.2L20 7V0h-7l2.8 2.8-4.34 4.32 1.42 1.42L17.2 4.2zm-1.4 13L13
              20h7v-7l-2.8 2.8-4.32-4.34-1.42 1.42 4.33 4.33zM4.2 2.8L7
              0H0v7l2.8-2.8 4.32 4.34 1.42-1.42L4.2 2.8z" />
          </svg>
        </button>
      </div>
    </section>
  </article>
{/each}
