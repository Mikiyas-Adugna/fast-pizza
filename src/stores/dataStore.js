import { defineStore } from "pinia";

export const useDataStore = defineStore("dataStore", {
  state: () => ({
    cart: [],
    user: "",
    quantity: 0,
    price: 0,
    priority: false,
  }),

  actions: {
    userName(name) {
      this.user = name.toUpperCase();
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
      const arr = this.cart.find((pizza) => pizza.pizzaId == id);
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
    cleanCart() {
      this.cart = [];
    },
    isPriority() {
      this.priority = !this.priority;
      return this.priority;
    },
  },
  getters: {
    pizzaQuantity() {
      this.quantity = this.cart.reduce((acc, cur) => (acc += cur.quantity), 0);
      return this.quantity;
    },
    pizzaPrice() {
      this.price = this.cart.reduce(
        (acc, cur) => (acc += cur.totalPrice * cur.quantity),
        0
      );
      return this.price;
    },
    isCartEmpty() {
      return this.cart.length > 0;
    },
  },
});
