<script>
  import { onMount } from "svelte";
  import { slide } from "svelte/transition";
  import qs from "query-string";
  import { outline } from "../theme";

  let message = "";
  let name = "";
  let email = "";
  $: disabled = !message;

  const reset = () => {
    name = "";
    email = "";
    message = "";
  };

  onMount(() => {
    message = localStorage.getItem("message");
    name = localStorage.getItem("name");
    email = localStorage.getItem("email");
    return () => {
      localStorage.setItem("message", message);
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
    };
  });

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
      class="{outline} flex-1 p-2"
      type="text"
      bind:value={name}
      name="name"
      id="name"
      placeholder="type in your name" />
  </div>
  <div class="flex justify-between items-center pb-2">
    <label class="w-1/3" for="email">Your Email:</label>
    <input
      class="{outline} flex-1 p-2"
      type="email"
      name="email"
      bind:value={email}
      id="email"
      placeholder="type in your email" />
  </div>
  <div>
    <label class="block pb-2" for="message">Message:</label>
    <textarea
      class="{outline} w-full p-2 h-32"
      name="message"
      bind:value={message}
      id="message"
      placeholder="your message here" />
  </div>
  <div class="mt-4">
    <button
      {disabled}
      class="{outline} w-full py-2 rounded {disabled ? 'cursor-not-allowed bg-gray-200 text-gray-600' : 'cursor-pointer text-gray-200 bg-gray-800'}"
      type="submit">
      Submit
    </button>
  </div>
</form>

{#if promise}
  <div transition:slide>
    {#await promise}
      <div class="pt-6 pb-2 text-gray-600">Submitting...</div>
    {:then value}
      <div class="pt-6 pb-2 text-green-600 flex items-center">
        <div class="h-6 w-6 mr-2">
          <svg
            class="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20">
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        </div>
        Message successfully submitted.
      </div>
    {:catch error}
      <div class="pt-6 pb-2 text-red-600 flex items-center">
        <div class="h-6 w-6 mr-2">
          <svg
            class="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20">
            <path
              d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zM9
              5v6h2V5H9zm0 8v2h2v-2H9z" />
          </svg>
        </div>
        Something went wrong with your submission.
      </div>
    {/await}
  </div>
{/if}
