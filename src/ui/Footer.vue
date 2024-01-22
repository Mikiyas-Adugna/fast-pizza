<template>
  <div v-if="dataStore.isCartEmpty"
    class="flex justify-between px-8 py-4 bg-gray-900 text-white fixed bottom-0 left-0 right-0"
  >
    <div>
      <p>{{ dataStore.pizzaQuantity }} pizza £ {{ dataStore.pizzaPrice }}</p>
    </div>
    <router-link to="/cart">Open cart &rarr;</router-link>
  </div>
</template>

<script>
import { useDataStore } from "@/stores/dataStore";
export default {
  name: "foot",
  setup() {
    const dataStore = useDataStore();

    return { dataStore };
  },
};
</script>
