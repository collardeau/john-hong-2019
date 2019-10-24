<script>
  import { slide } from "svelte/transition";
  import ContactForm from "../components/Contact.svelte";

  let showContact = false;

  const toggleForm = () => {
    showContact = !showContact;
  };
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<section class="bg-gray-300 p-4">
  <div class="flex justify-between items-center">
    <h3 class="font-semibold">Contact John</h3>
    <button type="button" class="w-6 h-6 text-gray-800" on:click={toggleForm}>
      <svg
        class="fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20">
        {#if showContact}
          <path
            d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243
            4.242L15.657 12z" />
        {:else}
          <path
            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586
            4.343 8z" />
        {/if}
      </svg>

    </button>
  </div>
  {#if showContact}
    <div transition:slide={{ duration: 400 }} class="pt-6">
      <ContactForm />
    </div>
  {/if}
</section>

<section class="bg-gray-100 p-4">
  <h3 class="font-semibold">Artist Statement</h3>
  <p>
    My work is like a song. You can feel what it says before you know what it
    means. I am influenced by Korean temple painting and the Japanese Rinpa
    school. The use of handmade paper in much of my work helps to build a bridge
    between drawing and painting. Some of my inspirations are improvisational
    music, mythology and dance.
  </p>
  <h3 class="font-semibold mt-4">About John Hong</h3>
  <p>
    John Hong is an artist who currently lives and works in Providence, Rhode
    Island. His work can be found in private collections in New York, Los
    Angeles, San Francisco, Boston, Philadelphia, Seattle, Washington D.C., San
    Diego, Oakland, Nashville, London, Seoul, Hong Kong, and Shanghai.
  </p>
  <h3 class="font-semibold mt-4">Achievements</h3>
  <ul>
    <li class="mt-2">
      <b>2005</b>
      <span>
        M.F.A. Visual Art
        <br />
        The New School — Parsons School of Design
        <br />
        New York City
        <br />
      </span>
    </li>
    <li class="mt-2">
      <b>2002</b>
      <span>
        Dana Pond Award Recipient
        <br />
        School of the Museum of Fine Arts
        <br />
        Boston
      </span>
    </li>
    <li class="mt-2">
      <b>1998</b>
      <span>
        B.A. Urban Studies & Art History
        <br />
        Boston University
      </span>
    </li>
  </ul>

</section>
