<script>
  // bind some value and submit myself!
</script>

<form name="contact" method="POST" data-netlify="true">
  <div class="flex justify-between items-center pb-2">
    <label class="w-1/3" for="name">Your Name:</label>
    <input
      class="flex-1 p-2"
      type="text"
      name="name"
      id="name"
      placeholder="type in your name" />
  </div>
  <div class="flex justify-between items-center pb-2">
    <label class="w-1/3" for="email">Your Email:</label>
    <input
      class="flex-1 p-2"
      type="email"
      name="email"
      id="email"
      placeholder="type in your email" />
  </div>
  <div class="pb-2">
    <label class="block pb-2" for="message">Message:</label>
    <textarea
      class="w-full p-2 h-32"
      name="message"
      id="message"
      placeholder="your message here" />
  </div>
  <div class="mt-4">
    <button class="w-full bg-gray-800 text-gray-200 py-2 rounded" type="submit">
      Send
    </button>
  </div>
</form>
