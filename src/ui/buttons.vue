<template>
  <div v-if="!soldOut" class="flex space-x-6 items-end justify-end">
    <div v-if="!visibility" class="flex items-start">
      <div class="flex items-center space-x-4">
        <btn :btnName="'-'" @click="decrement()" />
        <p>{{ count }}</p>
        <btn :btnName="'+'" @click="increment()" />
      </div>
    </div>
    <div>
      <btn v-if="!visibility" :btnName="'Delete'" @click="Toggle()" />
      <btn v-if="visibility" :btnName="'Add to cart'" @click="Toggle()" />
    </div>
  </div>
</template>

<script>
import btn from "../ui/Button.vue";
export default {
  name: "buttons",
  props: ["soldOut"],
  components: {
    btn,
  },
  data() {
    return {
      visibility: true,
      count: 1,
    };
  },
  methods: {
    Toggle() {
      this.visibility = !this.visibility;
    },
    increment() {
      this.count += 1;
    },
    decrement() {
      this.count -= 1;
      if (!this.count) {
        this.Toggle();
        this.count = 1;
      }
    },
  },
};
</script>
