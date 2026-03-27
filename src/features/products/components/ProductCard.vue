<script setup lang="ts">
import { ref } from 'vue';
import type { Product } from '../models/product';
import { useCartStore } from '../../../core/stories/CartStore';
import CartIcon from '../../../core/components/icons/CartIcon.vue';
import FavoriteIcon from '../../../core/components/icons/FavoriteIcon.vue';

interface ProductCardProps {
    product: Product;
}

const props = defineProps<ProductCardProps>()
const cartStore = useCartStore();

const active = ref(false);

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
            <FavoriteIcon :product="product" />
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
                    <CartIcon :product="product" />
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