import { defineStore } from "pinia";

export const useDataStore = defineStore("dataStore", {
  state: () => ({
    cart: [],
    user: "",
  }),

  actions: {
    userName(name) {
      this.user = name;
    },
    increment(id) {
      const item = this.cart.find((pizza) => pizza.pizzaId == id);
      item.quantity++;
    },
    decrement(id) {
      const item = this.cart.find((pizza) => pizza.pizzaId == id);
      item.quantity -= 1;
      if (item.quantity == 0) {
        this.deleteFromCart(id);
      }
    },
    visibility(id) {
      const arr = this.cart.find((pizza) => {
        return pizza.pizzaId == id;
      });
      return arr;
    },

    addToCart(items) {
      const itemsCopy = JSON.parse(JSON.stringify(items));
      this.cart.push(itemsCopy);
    },
    deleteFromCart(id) {
      this.cart = this.cart.filter((pizza) => pizza.pizzaId !== id);
    },
    currentQuantity(id) {
      const item = this.cart.find((pizza) => pizza.pizzaId == id);
      return item.quantity;
    },
  },
});
