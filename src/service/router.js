import { createRouter, createWebHashHistory } from "vue-router";
import user from "../features/user/CreateUser.vue";
import menu from "../features/menu/Menu.vue";
import cart from "../features/cart/Cart.vue";
import order from "../features/order/Order.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: user },
    { path: "/menu/:userName", name: "menu", component: menu },
    { path: "/cart", component: cart },
    { path: "/order", component: order },
  ],
});

export default router;
