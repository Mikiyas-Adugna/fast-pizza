<template>
  <div class="w-1/2 mx-auto mb-24">
    <div class="flex items-center justify-between">
      <p class="text-2xl">Order status</p>
      <div class="flex items-center space-x-4">
        <div
          v-if="dataStore.priority"
          class="px-3 py-1 bg-red-500 text-white rounded-full fontt-bold"
        >
          PRIORITY
        </div>
        <div class="px-3 py-1 bg-green-500 text-white rounded-full fontt-bold">
          PREPARING ORDER
        </div>
      </div>
    </div>

    <div
      class="bg-gray-200 flex items-center justify-between rounded-md px-4 py-3 mt-8"
    >
      <div>Only {{ Time }} {{ unit }} left : )</div>
      <div>( Estimated delivery : {{ getToday(dataStore.pizzaPrice) }})</div>
    </div>

    <div class="mt-12">
      <ul>
        <li
          v-for="order in dataStore.cart"
          class="flex items-center justify-between pb-3 mt-3 border-y tborder-gray-300"
        >
          <div>
            <p>{{ order.name }}</p>
            <p class="font-tighn italic mt-2 text-gray-500">
              {{ order.ingredients.join(", ") }}
            </p>
          </div>
          <div>
            <p class="font-bold text-xl">£{{ order.totalPrice }}.00</p>
          </div>
        </li>
      </ul>
    </div>

    <div
      class="bg-gray-200 flex flex-col justify-center rounded-md px-4 py-3 mt-8"
    >
      <div class="text-gray-700">Price pizza: £{{ dataStore.pizzaPrice }}</div>
      <div v-if="dataStore.priority" class="text-gray-700">
        Price priority: €15.00
      </div>
      <div class="font-bold text-lg">
        To pay on delivery: £{{
          dataStore.priority ? dataStore.pizzaPrice + 15 : dataStore.pizzaPrice
        }}
      </div>
    </div>

    <div v-if="!dataStore.priority" class="flex justify-end mt-8">
      <btn :btnName="'MAKE PRIORITY'" @click="dataStore.isPriority()"></btn>
    </div>
  </div>
</template>

<script>
import { getFormattedDateTime } from "../../service/AccessToApi";
import { getMinutes } from "../../service/AccessToApi";
import { useDataStore } from "@/stores/dataStore";
import btn from "../../ui/Button.vue";

export default {
  components: {
    btn,
  },
  setup() {
    const dataStore = useDataStore();
    const [Time, unit] = getMinutes(dataStore.pizzaPrice);

    function getToday(minute) {
      return getFormattedDateTime(minute);
    }

    return { getToday, dataStore, Time, unit };
  },
};
</script>
