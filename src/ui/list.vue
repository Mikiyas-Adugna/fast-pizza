<template>
  <ul class="space-y-4">
    <li
      v-for="pizza in listOf"
      :key="pizza.id"
      class="flex justify-between max-w-screen-lg mx-auto "
    >
    <div class="flex space-x-6 ">
      <img class="w-28 h-28 rounded-2xl" :class="pizza.soldOut && 'grayscale'" :src="pizza.imageUrl" alt="" />

      <div>
        <h1 class="font-semibold">{{ pizza.name }}</h1>
        <p>
          {{ pizza.ingredients.join(', ') }}
        </p>
        <p v-if="pizza.soldOut" class="mt-8 text-gray-500">SoldOut</p>
        <p v-if="!pizza.soldOut" class="mt-8">£ {{ pizza.unitPrice }}.00</p>
      </div>
      </div>
      <buttons :soldOut="pizza.soldOut"/>
    </li>
  </ul>
</template>

<script>
import buttons from "./buttons.vue";

export default {
  name: "list",
  components: {
    buttons,
  },
  props: ["listOf"],
 
 
};
</script>
