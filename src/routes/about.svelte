<script>
  import { slide } from "svelte/transition";
  import ContactForm from "../components/Contact.svelte";
  import ChevronDown from "../components/svgs/ChevronDown.svelte";
  import ChevronUp from "../components/svgs/ChevronUp.svelte";

  let showContact = false;

  const toggleForm = () => {
    showContact = !showContact;
  };

  const statement =
    "My work is like a song. You can feel what it says before you know what it means. I am influenced by Korean temple painting and the Japanese Rinpa school. The use of handmade paper in much of my work helps to build a bridge between drawing and painting. Some of my inspirations are improvisational music, mythology and dance.";

  const aboutArtist =
    "John Hong is an artist who currently lives and works in Providence, Rhode Island. His work can be found in private collections in New York, Los Angeles, San Francisco, Boston, Philadelphia, Seattle, Washington D.C., San Diego, Oakland, Nashville, London, Seoul, Hong Kong, and Shanghai.";

  const achievements = [
    {
      year: 2005,
      degree: "M.F.A Visual Art",
      institution: "The New School — Parsons School of Design",
      city: "New York City"
    },
    {
      year: 2002,
      degree: "Dana Pond Award Recipient",
      institution: "School of the Museum of Fine Arts",
      city: "Boston"
    },
    {
      year: 1998,
      degree: "B.A. Urban Studies & Art History",
      institution: "School of the Museum of Fine Arts",
      city: "Boston University"
    }
  ];
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<div class="lg:flex">
  <section class="bg-gray-400 text-gray-900 p-3 pl-4 md:py-4 lg:w-1/3">
    <div class="flex justify-between items-center">
      <h3 class="font-semibold lg:mb-8">Get in Touch</h3>
      <button type="button" class="w-6 h-6 lg:hidden" on:click={toggleForm}>
        {#if showContact}
          <ChevronUp />
        {:else}
          <ChevronDown />
        {/if}
      </button>
    </div>
    <div class="hidden lg:block">
      <ContactForm />
    </div>
    {#if showContact}
      <div transition:slide={{ duration: 400 }} class="pt-6">
        <ContactForm />
      </div>
    {/if}
  </section>

  <section
    class="p-4 pb-6 max-w-xl mx-auto lg:mx-0 text-gray-500 lg:w-2/3 lg:px-12">
    <h3 class="font-semibold text-lg text-white">Artist Statement</h3>
    <p>{statement}</p>
    <h3 class="font-semibold text-lg text-white mt-4">About John Hong</h3>
    <p>{aboutArtist}</p>
    <img
      src="img/peanuts.jpg"
      class="w-3/4 my-6 ml-2 lg:ml-0"
      alt="artist sketch" />
    <h3 class="font-semibold text-lg text-white mt-4">Achievements</h3>
    <ul>
      {#each achievements as { year, degree, institution, city }}
        <li class="mt-2">
          <b class="font-medium text-gray-300">{year}</b>
          <span>
            {degree}
            <br />
            {institution}
            <br />
            {city}
            <br />
          </span>
        </li>
      {/each}
    </ul>

    <h3 class="font-semibold text-lg text-white mt-4">Social Media</h3>
    <p>
      Instagram:
      <a href="https://instagram.com/johnhong.studio" class="text-blue-500">
        @johnhong.studio
      </a>
    </p>
    <h3 class="font-semibold text-lg text-white mt-4">Website by</h3>
    <p>
      Twitter:
      <a href="https://twitter.com/collardeau" class="text-blue-500">
        @collardeau
      </a>
    </p>
    <p class="mt-4 font-medium text-gray-300">
      Thank you for visiting John Hong Studio!
    </p>
  </section>

</div>
