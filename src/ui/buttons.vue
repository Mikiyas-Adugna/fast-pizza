<template>
    <div v-if="dataStore.visibility()" class="flex items-start">
      <div class="flex items-center space-x-4">
        <btn :btnName="'-'" @click="decrement(id)" />
        <p>{{ dataS.quantity }}</p>
        <btn :btnName="'+'" @click="increment(id)" />
      </div>
    </div>
    <div>
      <btn
        v-if="dataStore.visibility()"
        :btnName="'Delete'"
        @click="dataStore.deleteFromCart(id)"
      />
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
