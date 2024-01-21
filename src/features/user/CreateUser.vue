<template>
  <div class="flex items-center justify-center h-64">
    <div class="text-center">
      <h1 class="text-3xl font-bold text-yellow-400">
        The best pizza. Straight out of the oven, straight to you.
      </h1>
      <p class="text-lg font-semibold mt-4">
        Welcome! Please start by telling us your name :
      </p>
      <input
        class="border border-gray-900 outline-none px-3 py-2 text-gray-600 rounded-full mb-2 mt-2"
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

export default {
  name: "user",
  data() {
    return {
      user: "",
      // Store :  useDataStore(),
    };
  },
  components: {
    btn,
  },
};
</script>
