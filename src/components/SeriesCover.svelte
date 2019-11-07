<script>
  import { outline } from "../theme";
  import { getHref } from "../utils/imgUtils";
  export let title = "series";
  export let href = "";
  export let img = "";
  export let imgW = 0;
  export let alt = "cover image";
  export let h;
  const src = getHref(img, imgW);

  $: misc = title === "miscellaneous";
</script>

<style>
  .bg {
    background-color: hsla(220, 26%, 14%, 0.5);
    height: 33%;
  }
  .dark-bg {
    background-color: hsla(220, 26%, 14%, 0.95);
  }
  .misc {
    object-position: center 52%;
  }
</style>

<a {href} class="block relative {outline}" style="height:{h};">
  <img {src} {alt} class:misc class="cover" />
  <div class="bg absolute w-full bottom-0">
    <div class="reverse -mt-4 pl-6">
      <span class="py-2 px-4 mr-8 dark-bg series-title">{title}</span>
    </div>
  </div>
</a>
