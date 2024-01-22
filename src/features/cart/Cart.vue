<template>
  <div class="w-1/3 mx-auto">
    <router-link to="/menu"
      ><p class="text-blue-600 flex items-center font-light text-xl mb-4">
        &larr; go back to menu
      </p></router-link
    >
    <div v-if="dataStore.isCartEmpty">
      <p class="text-2xl font-semibold">your cart, {{ dataStore.user }}</p>
      <ul>
        <li
          v-for="items in dataStore.cart"
          class="flex items-center justify-between pb-3 mt-3 border-b border-gray-300"
        >
          <div class="space-x-4">
            <span> {{ items.quantity }}&Cross;</span>
            <span>{{ items.name }}</span>
          </div>
          <div class="flex items-center space-x-6">
            <p>£{{ items.quantity * items.totalPrice }}</p>

            <div class="flex space-x-6 items-end justify-end">
              <div class="flex items-start">
                <div class="flex items-center space-x-4">
                  <btn
                    :btnName="'-'"
                    @click="dataStore.decrement(items.pizzaId)"
                  />
                  <p>{{ items.quantity }}</p>
                  <btn
                    :btnName="'+'"
                    @click="dataStore.increment(items.pizzaId)"
                  />
                </div>
              </div>
              <div>
                <btn
                  :btnName="'Delete'"
                  @click="dataStore.deleteFromCart(items.pizzaId)"
                />
              </div>
            </div>
          </div>
        </li>
      </ul>

      <div class="space-x-4 mt-6">
        <router-link to="/order"
          ><btn :btnName="'ORDERING PIZZAS'"></btn
        ></router-link>
        <btn
          :btnName="'CLEAN CART'"
          :clean="true"
          @click="dataStore.cleanCart()"
        ></btn>
      </div>
    </div>
    <div v-if="!dataStore.isCartEmpty">
      <p class="text-xl font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  </div>
</template>

<script>
import { useDataStore } from "@/stores/dataStore";
import btn from "../../ui/Button.vue";
export default {
  components: {
    btn,
  },
  setup() {
    const dataStore = useDataStore();

    return { dataStore };
  },
};
</script>
