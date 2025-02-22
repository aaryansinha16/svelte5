<script lang="ts">
  import { login } from '../../lib/stores/auth.js';
  import { goto } from "$app/navigation";

  let email = "";
  let password = "";

  function handleSubmit() {
    login(email, password);
    goto("/protected");
  }
</script>

<div class="main-container min-h-screen flex items-center justify-center">
  <div class="w-[50%] space-y-8 p-8">
    <h2 class="mt-6 text-left text-3xl text-white bg-color-2">Sign in to your account</h2>

    <form class="mt-8 space-y-6" on:submit|preventDefault={handleSubmit}>
      <div class=" space-y-4">
        <div>
          <label for="email" class="text-white">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            bind:value={email}
            class="appearance-none mt-2 rounded-xl relative block w-full px-3 py-3 text-xl border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
          />
        </div>
        <div>
          <label for="password" class="text-white">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            required
            bind:value={password}
            class="appearance-none mt-2 rounded-xl relative block w-full px-3 py-3 text-xl border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          class="group relative w-full flex justify-center py-3 text-xl px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-[#43b17e] hover:bg-[#43b17e] cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Sign in
        </button>
      </div>
    </form>
  </div>

  <div
    class="w-[50%] bg-[#43b17e] rounded-xl text-red h-[90vh] my-[5vh] py-[80px] px-[80px] flex flex-col justify-between p-8"
  >
    <div>
      <p class="text-6xl font-semibold text-white">What our customer's said.</p>
      <p class="text-2xl text-white mt-12">
        "I just bought a new car and it was easy to purchase online. The process
        was straightforward and the car was delivered quickly."
      </p>
      <p class="text-xl text-white mt-6">Ankit Kumar</p>
      <p class="text-lg text-white">CEO, XYZ Company</p>
    </div>

    <div
      class="bg-white w-full h-fit rounded-xl p-8 mt-8 flex flex-col jusitify-center items-between"
    >
      <p class="text-2xl text-black font-semibold">
        Know what you want, and we'll find a way to get it.
      </p>
      <p class="text-black mt-4">
        Be among the first to get notified when it launches.
      </p>
    </div>
  </div>
</div>

<style>
  .main-container {
    display: flex;
    justify-content: center;
    gap: 30px;
    align-items: center;
    padding: 0 100px;
    width: 100%;
    background: rgb(30, 74, 25);
    background: radial-gradient(
      circle,
      rgba(30, 74, 25, 1) 0%,
      rgba(0, 0, 0, 1) 41%
    );
  }
</style>
