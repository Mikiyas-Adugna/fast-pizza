<template>
  <div class="w-1/3 mx-auto">
    <p class="text-xl font-bold mb-8">Ready to order? Let's go!</p>

    <form @submit="" class="flex flex-col space-y-6">
      <div class="space-x-4 flex items-center">
        <label for="firstName" class="text-lg sm:basis-40">First name</label>
        <input
          type="text"
          class="border border-gray-200 outline-yellow-400 rounded-full text-gray-300 px-3 py-2 grow"
          placeholder="First name"
          required
        />
      </div>
      <div class="space-x-4 flex items-center">
        <label for="Phone number" class="text-lg sm:basis-40"
          >Phone number</label
        >
        <input
          type="text"
          class="border border-gray-200 outline-yellow-400 rounded-full text-gray-300 px-3 py-2 grow"
          placeholder="Phone number"
          required
        />
      </div>
      <div class="space-x-4 flex items-center">
        <label for="Address" class="text-lg sm:basis-40">Address</label>
        <input
          type="text"
          class="border border-gray-200 outline-yellow-400 rounded-full text-gray-300 px-3 py-2 grow"
          placeholder="Address"
          required
        />
      </div>

      <div class="flex items-center space-x-4">
        <input
          type="checkbox"
          class="w-6 h-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400"
          :checked="dataStore.priority"
          @click="dataStore.isPriority()"
        />
        <p class="font-semibold">Want to yo give your order priority?</p>
      </div>

      <div>
        <router-link to="/new">
          <btn :btnName="`ORDER NOW FOR £${dataStore.pizzaPrice}.00`"></btn>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import btn from "../../ui/Button.vue";
import { useDataStore } from "@/stores/dataStore";
export default {
  components: {
    btn,
  },
  setup() {
    const priority = ref(false);
    const dataStore = useDataStore();
    return { dataStore, priority };
  },
};
</script>
