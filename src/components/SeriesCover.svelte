<script>
  import { outline } from "../theme";
  export let title = "series";
  export let src = "";
  export let href = "#";
  export let alt = "cover image";
  $: misc = title === "miscellaneous";
</script>

<style>
  .bg {
    background-color: hsla(220, 26%, 14%, 0.66);
    color: #fff;
  }
  .misc {
    object-position: center 25%;
  }
</style>

<a {href} class="block {outline} mb-2 sm:mb-4 xl:mb-6">
  <div class="relative h-64">
    <img {src} {alt} class:misc class="object-cover w-full h-full" />
    <div
      class="bg absolute w-full bottom-0 flex-col justify-center text-center
      py-10">
      <span
        class="rounded bg-gray-800 px-6 py-2 font-medium tracking-wider
        uppercase">
        {title}
      </span>
    </div>
  </div>
</a>
