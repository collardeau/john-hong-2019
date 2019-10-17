<script>
  export let title = "series";
  export let src = "";
  export let href = "#";
  export let alt = "cover image";
</script>

<style>
  .bg {
    background-color: hsla(0, 0%, 0%, 0.5);
    color: #fff;
  }
</style>

<div>
  <a {href}>
    <div class="relative h-full">
      <img {src} {alt} class="object-cover w-full h-full" />
      <div
        class="bg absolute w-full bottom-0 flex-col justify-center text-center
        py-4 capitalize text-xl">
        {title}
      </div>
    </div>
  </a>
</div>
