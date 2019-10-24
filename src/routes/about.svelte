<svelte:head>
  <title>About</title>
</svelte:head>

<section class="bg-gray-300 p-4">
  <h3 class="font-semibold mb-2">Contact John</h3>
  <form name="contact" method="POST" data-netlify="true">
    <div class="flex justify-between pb-2">
      <label class="w-1/3">Your Name:</label>
      <input class="flex-1" type="text" name="name" />
    </div>
    <div class="flex justify-between pb-2">
      <label class="w-1/3">Your Email:</label>
      <input class="flex-1" type="email" name="email" />
    </div>
    <div class="flex justify-between pb-2">
      <label class="w-1/3">Message:</label>
      <textarea class="flex-1" name="message" />
    </div>
    <div class="mt-4">
      <button
        class="w-full bg-gray-800 text-gray-200 py-2 rounded"
        type="submit">
        Send
      </button>
    </div>
  </form>
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
