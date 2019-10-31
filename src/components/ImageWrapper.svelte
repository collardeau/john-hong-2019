<script>
  import { cloudinaryBase } from "../config";
  export let h = 0;
  export let w = 0;
  export let alt = "";
  export let img = "";
  $: height = h ? `${h}px` : "auto";
</script>

<div style="height: {height}">
  <img class="w-full h-full" src="{cloudinaryBase({ w, h })}{img}" {alt} />
</div>
