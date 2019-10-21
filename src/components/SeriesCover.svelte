<script>
  export let title = "series";
  export let src = "";
  export let href = "#";
  export let alt = "cover image";

  const outline = "focus:outline-none focus:shadow-outline";
</script>

<style>
  .bg {
    background-color: hsla(220, 26%, 14%, 0.8);
    color: #fff;
  }
</style>

<a {href} class={outline}>
  <div class="relative h-full">
    <img {src} {alt} class="object-cover w-full h-full" />
    <div
      class="bg absolute w-full bottom-0 flex-col justify-center text-center
      py-6 uppercase text-lg font-medium tracking-wide">
      {title}
    </div>
  </div>
</a>
