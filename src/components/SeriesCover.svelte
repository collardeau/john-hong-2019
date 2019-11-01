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
    background-color: hsla(220, 26%, 14%, 0.5);
    height: 33%;
  }
  .misc {
    object-position: center 52%;
  }
</style>

<a {href} class="block {outline} mb-3 sm:mb-4 xl:mb-6">
  <div class="relative h-64">
    <img {src} {alt} class:misc class="object-cover w-full h-full" />
    <div class="bg absolute w-full bottom-0">
      <div class="flex flex-row-reverse -mt-4 pl-6">
        <span
          class="bg-gray-900 rounded py-2 px-4 mr-8 text-white font-medium
          tracking-wider uppercase">
          {title}
        </span>
      </div>
    </div>
  </div>
</a>
