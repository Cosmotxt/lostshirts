import { createRouter, createWebHistory } from "vue-router";

import CartView from "../../features/cart/views/CartView.vue";
import HomePage from "../../features/home/views/homePage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomePage
        },
        {
            path: '/carrinho',
            component: CartView
        }
    ]
});

export default router;