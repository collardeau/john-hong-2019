<script>
  export let title = "series";
  export let src = "";
  export let href = "#";
  export let alt = "category headline image";
</script>

<style>
  .series-info {
    background-color: hsla(0, 0%, 0%, 0.5);
    color: #fff;
  }
</style>

<div class="p-2">
  <a {href}>
    <div class="relative h-full">
      <img {src} {alt} class="object-cover w-full h-full" />
      <div
        class="series-info absolute w-full bottom-0 flex-col justify-center
        text-center py-4 capitalize text-lg">
        {title}
      </div>
    </div>
  </a>
</div>
