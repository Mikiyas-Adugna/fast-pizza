<template>
  <div
    class="flex items-center justify-between bg-yellow-400 text-white py-4 px-6 mb-8"
  >
    <router-link to="/">
      <p class="text-4xl">fast react pizza co.</p>
    </router-link>
    <input
      class="rounded-full text-gray-500 py-2 px-3 outline-none"
      type="text"
      placeholder="Search order #"
      v-model.lazy.trim="orderSearch"
    />
    <p class="text-black font-semibold text-xl" v-if="dataStore.user">
      {{ dataStore.user }}
    </p>
  </div>
</template>

<script>
import { useDataStore } from "../stores/dataStore";

export default {
  name: "navHead",

  data() {
    const dataStore = useDataStore();
    return {
      orderSearch: "",
      dataStore,
    };
  },
};
</script>
