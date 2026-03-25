<script setup lang="ts">
import { useCartStore } from '../../../core/stories/CartStore'
import { useFavoriteStore } from '../../../core/stories/FavoriteStore';
import type { Product } from '../../products/models/product';

interface ProductFavoriteResumeProps {
    product: Product
}

const props = defineProps<ProductFavoriteResumeProps>()

const cartStore = useCartStore()
const favoriteStore = useFavoriteStore();

function addToCart() {
    cartStore.addItems(props.product)
}

function toggleFavorite() {
    favoriteStore.toggleFavorite(props.product);
}

</script>

<template>
    <div class="w-full bg-transparent border-b-[0.2vh] border-black/30 py-[3vh]">
        <div class="w-full font-orbitron font-medium grid grid-cols-5 items-center gap-[3vw]">
            <div class="aspect-square ">
                <img 
                    :src="props.product.urlImage" 
                    alt=""
                    class="object-cover object-center"
                >
            </div>

            <div class="flex flex-col justify-start gap-4">
                <span>{{ props.product.name }}</span>
            </div>

            <span>
                R&#36; {{ (props.product.price).toFixed(2).replace('.', ',') }}
            </span>
            
            <button @click="toggleFavorite" class="w-5 h-5">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
                        fill="var(--color-red-ls)" 
                        stroke="var(--color-red-ls)" 
                        stroke-width="2"/>
                </svg>
            </button>
            
            <button @click="addToCart" class="mt-2 bg-black text-white font-bold py-2 px-4 rounded">
                Adicionar ao carrinho
            </button>
        </div>
    </div>
</template>