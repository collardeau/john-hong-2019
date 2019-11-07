<script>
  export let artwork = {};
</script>

<div class="col flex-1 py-4 text-center items-center">
  <section class="col flex-1 justify-center">
    <h3 class="text-gray-100 uppercase tracking-wider">{artwork.title}</h3>
    <div class="text-gray-500 text-sm">
      {#if artwork.materials}
        <p class="capitalize">{artwork.materials}</p>
      {/if}
      {#if artwork.width}
        <p class="mt-1">
          {artwork.each ? 'each ' : ''}{artwork.width} x {artwork.height} inches
        </p>
      {/if}
    </div>
  </section>
</div>
