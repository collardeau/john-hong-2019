<script>
  import { outline } from "../theme";
  import { images } from "../stores";
  export let title = "series";
  export let href = "";
  export let img = "";
  export let imgW = 0;
  export let imgH = 0;
  export let slug = "";
  export let alt = "cover image";

  const image = $images[slug];
  const src = image.url;
</script>

<style>
  a {
    height: 40vh;
  }
  .bg {
    background-color: hsla(220, 26%, 14%, 0.5);
    height: 33%;
  }
  @media (min-width: 1024px) {
    a {
      height: 60%;
    }
    .bg {
      height: 20%;
    }
  }
  .dark-bg {
    background-color: hsla(220, 26%, 14%, 0.95);
  }
</style>

<a {href} class="block relative {outline}">
  <img {src} {alt} class="cover" />
  <div class="bg absolute w-full bottom-0">
    <div class="reverse -mt-4 pl-6">
      <span class="py-2 px-4 mr-8 dark-bg series-title">{title}</span>
    </div>
  </div>
</a>
