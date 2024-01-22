<template>
  <div class="flex justify-center">
    <div class="text-center">
      <h1 class="text-4xl font-semibold text-yellow-500 max-w-3xl">
        <p class="text-black">The best pizza.</p> Straight out of the oven, straight to you.
      </h1>
      <p class="text-xl mt-4">
        Welcome! Please start by telling us your name :
      </p>
      <input
        class="border border-gray-300 outline-yellow-400 px-3 py-2 text-gray-600 rounded-full mb-6 mt-8"
        type="text"
        placeholder="Your full name"
        v-model.trim="user"
      />
      <router-link
        v-if="user"
        :to="{ name: 'menu', params: { userName: user } }"
      >
        <div>
          <btn :btnName="'Start ordering'"></btn>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import btn from "../../ui/Button.vue";
import { useDataStore } from "@/stores/dataStore";

export default {
  name: "user",
  data() {

    return {
      user: "",
      dataStore: useDataStore()
    };
  },
  components: {
    btn,
  },
};
</script>
