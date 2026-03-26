<script setup lang="ts">
import { useCartStore } from '../../../core/stories/CartStore'
import { storeToRefs } from 'pinia'

const cartStore = useCartStore()
const { totalItems } = storeToRefs(cartStore)
</script>

<template>
    <div class="absolute top-0 left-0 z-99 w-screen">
        <div class="mx-auto bg-black-ls w-[85%] py-3 [clip-path:url(#header-clip)]">
            <div class="flex justify-between items-center mx-auto w-[80%]">
                <nav>
                    <ul class="flex items-center gap-14 text-white-ls text-small-ls font-family-ls">
                        <li><router-link to="">CATEGORIAS</router-link></li>
                        <li><router-link to="">PROMOÇÕES</router-link></li>
                        <li><router-link to="">COMPRE PELO WHATSAPP</router-link></li>
                    </ul>
                </nav>

                <router-link to="/">
                    <img src="/assets/images/logo.png" alt="logotipo do site" class="w-[8vw]">
                </router-link>

                <ul class="flex items-center gap-14 text-white-ls text-small-ls font-family-ls">
                    <li><router-link to="">BUSCAR PRODUTO</router-link></li>
                    <li><router-link to="/favoritos">FAVORITOS</router-link></li>
                    <li><router-link to="/carrinho">CARRINHO</router-link></li>

                    <!-- CARRINHO COM BADGE -->
                    <li>
                        <router-link to="/carrinho" class="relative inline-flex items-center">
                            CARRINHO
                            <span
                                v-if="totalItems > 0"
                                class="absolute -top-3 -right-4 bg-white-ls text-black-ls text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center"
                            >
                                {{ totalItems > 99 ? '99+' : totalItems }}
                            </span>
                        </router-link>
                    </li>

                    <li><router-link to="/login">ENTRAR / CADASTRAR</router-link></li>
                </ul>
            </div>
        </div>
        <svg width="0" height="0" class="absolute">
            <defs>
                <clipPath id="header-clip" clipPathUnits="objectBoundingBox">
                    <path d="M 0,0 H 1 L 0.9753,0.5323 C 0.9617,0.8271 0.9405,1 0.9180,1 H 0.0835 C 0.0617,1 0.0411,0.8378 0.0274,0.5586 L 0,0 Z" />
                </clipPath>
            </defs>
        </svg>
    </div>
</template>