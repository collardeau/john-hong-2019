<script>
  import qs from "query-string";
  let name = "",
    email = "",
    message = "";
  $: disabled = !message;

  const reset = () => {
    name = "";
    email = "";
    message = "";
  };

  async function postData(data = {}) {
    const encoded = qs.stringify(data);
    const res = await fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: encoded
    });
    if (res.ok) {
      reset();
      return res;
    } else {
      console.error(res);
      throw new Error(res);
    }
  }

  let promise;

  function onSubmit(e) {
    e.preventDefault();
    disabled = true;
    promise = postData({ "form-name": "contact", name, email, message });
  }
</script>

<form name="contact" data-netlify="true" on:submit={onSubmit}>
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
    <button
      {disabled}
      class="w-full py-2 rounded {disabled ? 'bg-gray-200 text-gray-600' : 'text-gray-200 bg-gray-800'}"
      type="submit">
      Submit
    </button>
  </div>
</form>

{#if promise}
  {#await promise}
    <div class="py-4 text-gray-600">Submitting...</div>
  {:then value}
    <div class="py-4 text-green-500">Form succesfully submitted</div>
  {:catch error}
    <div class="py-4 text-red-500">
      Something went wrong with your submission
    </div>
  {/await}
{/if}
