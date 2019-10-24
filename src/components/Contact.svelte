<script>
  // bind some value and submit myself!
</script>

<section class="bg-gray-300 p-4">
  <h3 class="font-semibold mb-2">Contact John</h3>
  <form name="contact" method="POST" data-netlify="true">
    <div class="flex justify-between pb-2">
      <label class="w-1/3" for="name">Your Name:</label>
      <input class="flex-1 p-2" type="text" name="name" id="name" />
    </div>
    <div class="flex justify-between pb-2">
      <label class="w-1/3" for="email">Your Email:</label>
      <input class="flex-1 p-2" type="email" name="email" id="email" />
    </div>
    <div class="flex justify-between pb-2">
      <label class="w-1/3" for="message">Message:</label>
      <textarea class="flex-1 p-2" name="message" id="message" />
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
