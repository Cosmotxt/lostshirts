import { createRouter, createWebHistory } from "vue-router";

import CartView from "../../features/cart/views/CartView.vue";
import HomePage from "../../features/home/views/HomeView.vue";
import LoginView from "../../features/auth/views/LoginView.vue";
import RegisterView from "../../features/auth/views/RegisterView.vue";
import FavoritesView from "../../features/favorites/views/FavoritesView.vue";
import ProductView from "../../features/products/view/ProductView.vue";
import AdminPanel from "../../features/admin/components/AdminPanel.vue";

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
            component: FavoritesView,
            meta: {
                requireAuth: true,
            }
        },
        {
            path: '/login',
            component: LoginView
        },
        {
            path: '/cadastrar',
            component: RegisterView
        },
        {   

            path: '/produto/:id',
            component: ProductView
        },
        {
            path: '/admin',
            meta: {
                requireAuth: true,
                roles: ['admin'],
            },
            children: [
                {
                    path: '/dashboard',
                    component: AdminPanel
                }
            ]
        }
    ]
});

router.beforeEach((to, from, next) => {
    if(to.meta.requireAuth) {
        const token = {
            isAuth: false,
        }

        if(token.isAuth) {
            next()
            return
        } else {
            next('/login')
            return 
        }
    } else {
        next()
        return
    }
})

export default router;