<script setup lang="ts">
import { ref } from 'vue';
import { useFavoriteStore } from '../../../core/stories/FavoriteStore';
import type { Product } from '../models/product';
import { useCartStore } from '../../../core/stories/CartStore';

interface ProductCardProps {
    product: Product;
}

const props = defineProps<ProductCardProps>()
const favoriteStore = useFavoriteStore();
const cartStore = useCartStore();

const active = ref(false);

const isFavorite = ref(favoriteStore.isFavorite(props.product.id));

function toggleFavorite() {
    favoriteStore.toggleFavorite(props.product);
    isFavorite.value = favoriteStore.isFavorite(props.product.id);
}

function addToCart() {
    cartStore.addItems(props.product);
}
</script>

<template>
    <div class="flex flex-col aspect-3/4 h-[60vh] border border-black-ls/20 p-[.5vw]">
        <div 
            class="aspect-square bg-center bg-cover bg-no-repeat"
            :style="{
                backgroundImage: `url(${props.product.urlImage})`
            }"
        >
            <button @click="toggleFavorite" class="ml-[.5vw] mt-[.5vw] w-5 h-5">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
                        :fill="isFavorite ? 'var(--color-red-ls)' : 'none'" 
                        :stroke="isFavorite ? 'var(--color-red-ls)' : 'currentColor'" 
                        stroke-width="2"/>
                </svg>
            </button>
        </div>
        <div class="relative h-full py-[.5vw]">
            <div class="abolute top-0 left-0 flex flex-col items-start justify-start text-left h-full font-quantico text-black-ls ">
                <span class="text-button-ls leading-[2vh]">{{ props.product.name }}</span>
            </div>

            <div class="absolute w-full bottom-0 flex justify-center gap-[.5vh] flex-col">
                <div class="flex justify-between items-center w-full">
                    <span class="font-bold text-subtitle-ls font-tomorrow">
                        R&#36; {{ props.product.price.toFixed(2).replace('.', ',') }}
                        <span class="text-small-ls text-black-ls/80 font-quantico">ou 10x de {{ (props.product.price / 10).toFixed(2).replace('.', ',') }}</span>
                    </span>
                    <button @click="addToCart" class="mt-2 text-black-ls font-bold text-subtitle-ls">
                        <i class="pi pi-cart-plus"></i>
                    </button>
                </div>
                <div class="flex gap-[.5vw]">
                    <div class="bg-black-ls w-[1vw] h-[1vw] text-small-ls font-quantico aspect-square rounded-full flex items-center justify-center cursor-pointer"></div>
                    <div class="bg-white w-[1vw] h-[1vw] text-small-ls font-quantico aspect-square rounded-full flex items-center justify-center cursor-pointer"></div>
                    <div class="bg-gray-500 w-[1vw] h-[1vw] text-small-ls font-quantico aspect-square rounded-full flex items-center justify-center cursor-pointer"></div>
                    <div class="bg-amber-400 w-[1vw] h-[1vw] text-small-ls font-quantico aspect-square rounded-full flex items-center justify-center cursor-pointer"></div>
                </div>
                <div class="flex gap-[.5vw]">
                    <div 
                        v-for="size in props.product.sizes" 
                        @click="active = !active"
                        :class="[
                           ' w-[1.5vw] h-[1.5vw] text-small-ls font-quantico aspect-square rounded-full flex items-center justify-center border-[.1vh] border-black-ls/40 cursor-pointer', active ? 'bg-black-ls/10' : 'bg-transparent'
                        ]">
                            {{ size }}
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>