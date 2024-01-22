<template>
    <li :key="id" class="flex justify-between max-w-screen-lg mx-auto pb-3 border-b border-gray-300">
      <div class="flex space-x-6">
        <img
          class="w-28 h-28 rounded-2xl"
          :class="soldOut && 'grayscale'"
          :src="imageUrl"
          alt=""
        />
        <div>
          <h1 class="font-semibold">{{ name }}</h1>
          <p>
            {{ ingredients.join(", ") }}
          </p>
          <p v-if="soldOut" class="mt-8 text-gray-500">SoldOut</p>
          <p v-if="!soldOut" class="mt-8">£ {{ unitPrice }}.00</p>
        </div>
      </div>
      <div v-if="!soldOut" class="flex space-x-6 items-end justify-end">
        <div v-if="dataStore.visibility(id)" class="flex items-start">
          <div class="flex items-center space-x-4">
            <btn :btnName="'-'" @click="dataStore.decrement(id)" />
            <p>{{ dataStore.currentQuantity(id) }}</p>
            <btn :btnName="'+'" @click="dataStore.increment(id)" />
          </div>
        </div>
        <div>
          <btn
            v-if="dataStore.visibility(id)"
            :btnName="'Delete'"
            @click="dataStore.deleteFromCart(id)"
          />
          <btn
            v-if="!dataStore.visibility(id)"
            :btnName="'Add to cart'"
            @click="dataStore.addToCart(newItem)"
          />
        </div>
      </div>
    </li>
</template>

<script>
import { useDataStore } from "@/stores/dataStore";
import buttons from "./buttons.vue";
import btn from "./Button.vue";

export default {
  name: "list",
  components: {
    buttons,
    btn,
  },
  props: ["pizza"],
  data() {
    const { id, imageUrl, soldOut, name, ingredients, unitPrice } = this.pizza;
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
      ingredients
    };
    const dataStore = useDataStore();
    return {
      id,
      imageUrl,
      soldOut,
      name,
      ingredients,
      unitPrice,
      dataStore,
      newItem,
    };
  },
};
</script>
