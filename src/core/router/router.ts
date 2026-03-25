import { createRouter, createWebHistory } from "vue-router";

import CartView from "../../features/cart/views/CartView.vue";
import HomePage from "../../features/home/views/HomeView.vue";
import LoginView from "../../features/auth/views/LoginView.vue";
import RegisterView from "../../features/auth/views/RegisterView.vue";
import FavoritesView from "../../features/favorites/views/FavoritesView.vue";

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
        },
        {
            path: '/favoritos',
            component: FavoritesView
        },
        {
            path: '/login',
            component: LoginView
        },
        {
            path: '/cadastrar',
            component: RegisterView
        }
    ]
});

export default router;