<template>
  <div v-if="!soldOut" class="flex space-x-6 items-end justify-end">
    <div v-if="dataStore.visibility()" class="flex items-start">
      <div class="flex items-center space-x-4">
        <btn :btnName="'-'" @click="decrement()" />
        <p>{{ dataS.quantity }}</p>
        <btn :btnName="'+'" @click="increment()" />
      </div>
    </div>
    <div>
      <btn
        v-if="dataStore.visibility()"
        :btnName="'Delete'"
        @click="dataStore.deleteFromCart(id)"
      />
      <btn
        v-if="!dataStore.visibility()"
        :btnName="'Add to cart'"
        @click="dataStore.addToCart(id)"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import btn from "../ui/Button.vue";
import { useDataStore } from "@/stores/dataStore";
export default {
  name: "buttons",
  components: {
    btn,
  },
  props: ["soldOut", "id"],
  setup() {
    const dataStore = useDataStore();

    return { dataStore };
  },
};
</script>
