<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCartStore } from '../../../core/stories/CartStore'
import HeaderPage from '../../home/components/HeaderPage.vue'
import CartResume from '../components/CartResume.vue'
import ProductResume from '../components/ProductResume.vue'

const cartStore = useCartStore()
const { items, totalPrice } = storeToRefs(cartStore)
</script>

<template>
    <section class="relative overflow-x-hidden bg-black-ls h-screen">
        <HeaderPage />
        <div class="absolute inset-[2vh] flex items-start justify-center bg-white-ls overflow-y-scroll py-[10vh] box-border">
            <div class="flex justify-center items-center w-[85%] min-h-[80vh] bg-white-card-ls">
                <div class="flex flex-col justify-start h-[90%] w-[90%] py-[3vh]">
                    <h1 class="text-title-ls text-black-ls font-bold font-tomorrow uppercase">Carrinho</h1>

                    <!-- Carrinho vazio -->
                    <div v-if="items.length === 0" class="flex ">
                        <div class="flex flex-col-reverse items-center gap-4 py-20h">
                            <router-link
                                to="/"
                                class="border border-black-ls px-6 py-2 text-sm uppercase tracking-widest hover:bg-black-ls hover:text-white-ls transition-colors"
                            >
                                Continuar comprando
                            </router-link>
                            <p class="opacity-60">Seu carrinho está vazio.</p>
                        </div>
                        <CartResume :product-total-price="totalPrice" />
                    </div>

                    <!-- Lista de itens -->
                    <div v-else class="flex">
                        <ul class="flex flex-col w-[85%] h-[70%] gap-[6vh]">
                            <li
                                v-for="product in items"
                                :key="`${product.id}-${product.selectedSize}-${product.selectedColor}`"
                            >
                                <ProductResume
                                    :product-img="product.urlImage"
                                    :product-price="product.price"
                                    :product="product"
                                />
                            </li>
                        </ul>
                        <CartResume :product-total-price="totalPrice" /> 
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>