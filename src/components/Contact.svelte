<script>
  let name, email, message;

  async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        // "Content-Type": "application/json"
        "Content-Type": "application/x-www-form-urlencoded"
      },
      referrer: "no-referrer", // no-referrer, *client
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response;
    // return await response.json(); // parses JSON response into native JavaScript objects
  }

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const data = await postData("contact", { name, email, message });
      console.log(data); // JSON-string from `response.json()` call
    } catch (error) {
      console.error(error);
    }
  }
</script>

<!-- <form name="contact" method="POST" data-netlif÷y="true" on:submit={onSubmit}> -->
<form name="contact" action="contact" data-netlify="true" on:submit={onSubmit}>
  <div class="flex justify-between items-center pb-2">
    <label class="w-1/3" for="name">Your Name:</label>
    <input
      class="flex-1 p-2"
      type="text"
      bind:value={name}
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
      bind:value={email}
      id="email"
      placeholder="type in your email" />
  </div>
  <div class="pb-2">
    <label class="block pb-2" for="message">Message:</label>
    <textarea
      class="w-full p-2 h-32"
      name="message"
      bind:value={message}
      id="message"
      placeholder="your message here" />
  </div>
  <div class="mt-4">
    <button class="w-full bg-gray-800 text-gray-200 py-2 rounded" type="submit">
      Send
    </button>
  </div>
</form>
