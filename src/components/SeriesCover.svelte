<script>
  import { outline } from "../theme";
  export let title = "series";
  export let src = "";
  export let href = "#";
  export let alt = "cover image";
</script>

<style>
  .bg {
    background-color: hsla(220, 26%, 14%, 0.66);
    color: #fff;
  }
</style>

<a {href} class="block {outline} mb-2">
  <div class="relative h-64">
    <img {src} {alt} class="object-cover w-full h-full" />
    <div
      class="bg absolute w-full bottom-0 flex-col justify-center text-center
      py-10">
      <span
        class="rounded-full bg-gray-700 px-6 py-2 font-medium tracking-wider
        uppercase">
        {title}
      </span>
    </div>
  </div>
</a>
