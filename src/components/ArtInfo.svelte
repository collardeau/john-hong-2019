<script>
  export let artwork = {};
</script>

<div class="col text-center">
  <section class="col justify-ceter">
    <h3 class="mb-2 text-gray-100 uppercase tracking-wider md:text-xl">
      {artwork.title}
    </h3>
    <div class="text-gray-500 text-sm md:text-base">
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
