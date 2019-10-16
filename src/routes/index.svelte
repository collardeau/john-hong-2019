<script>
  let foo = "bg-green-500";
</script>

<style>
  section {
    height: 95vh;
    display: grid;
    /* box-sizing: border-box; */
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: repeat(2, 50%);
    padding: 0 0 50px 0;
  }
  .series-container {
    padding: 1rem 1.5rem 1.5rem 1.5rem;
  }
  .series {
    position: relative;
    height: 100%;
  }
  .series-info {
    position: absolute;
    height: 20%;
    width: 100%;
    bottom: 0;
    background-color: hsla(0, 0%, 0%, 0.6);
    color: #fff;
    /* padding: 0 1.5rem; */
    font-size: 1.5rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    letter-spacing: 0.1rem;
  }
</style>

<svelte:head>
  <title>John Hong Studio</title>
</svelte:head>

<section>

  <div class="series-container">
    <a href="/series1">
      <div class="series shadow">
        <img
          src="img/empress.jpg"
          alt="mixed media art"
          class="object-cover w-full h-full" />
        <div class="series-info">MIXED MEDIA</div>
      </div>
    </a>
  </div>

  <div class="series-container">
    <div class="series shadow">
      <img
        src="img/the-light-for-grace.jpg"
        alt="mixed media art"
        class="object-cover w-full h-full" />
      <div class="series-info">ACRYLIC</div>
    </div>
  </div>

  <div class="series-container">
    <div class="series shadow">
      <img
        src="img/dance-5.jpg"
        alt="mixed media art"
        class="object-cover w-full h-full" />
      <div class="series-info">DANCERS</div>
    </div>
  </div>

  <div class="series-container">
    <div class="series">
      <img
        src="img/graffiti-1.jpg"
        alt="mixed media art"
        class="object-cover w-full h-full" />
      <div class="series-info">GRAFFITI</div>
    </div>
  </div>

</section>
