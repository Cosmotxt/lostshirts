<script setup lang="ts">
import { ref } from 'vue';
import type { Product } from '../models/product';
import CartIcon from '../../../core/components/icons/CartIcon.vue';
import FavoriteIcon from '../../../core/components/icons/FavoriteIcon.vue';
import ColorOptions from '../../../core/components/ColorOptions.vue';
import SizesOptions from '../../../core/components/sizesOptions.vue';

interface ProductCardProps {
    product: Product;
}

const props = defineProps<ProductCardProps>()


</script>

<template>
    <div class="flex flex-col justify-end aspect-3/4 h-[60vh] border border-black-ls/20 p-[.5vw] hover:cursor-pointer">
        <div class="relative aspect-square overflow-hidden">
            <router-link :to="'/produto/' + props.product.id">
                <img 
                    :src="props.product.urlImage" 
                    alt=""
                    class="object-cover object-center hover:scale-105 duration-300 ease-in-out"
                >
            </router-link>
            <div class="absolute top-0">
                <FavoriteIcon :product="product" class-name="ml-[.5vw] mt-[.5vw]" />
            </div>
        </div>
        <div class="relative h-[25%] py-[.5vw]">
            <router-link :to="'/produto/' + props.product.id">
                <div class="abolute bottom-0 flex flex-col items-start justify-start text-left h-full font-quantico text-black-ls ">
                    <span class="text-[.9vw] leading-[2vh]">{{ props.product.name }}</span>
                </div>
            </router-link>

            <div class="absolute w-full bottom-0 flex justify-center gap-[.5vh] flex-col">
                <div class="flex justify-between items-center w-full">
                    <span class="font-bold text-subtitle-ls font-tomorrow">
                        R&#36; {{ props.product.price.toFixed(2).replace('.', ',') }}
                        <span class="text-small-ls text-black-ls/80 font-quantico">ou 10x de {{ (props.product.price / 10).toFixed(2).replace('.', ',') }}</span>
                    </span>
                    <CartIcon :product="product" />
                </div>
                <ColorOptions :product="product" />
                <SizesOptions :product="product" />
            </div>

        </div>
    </div>
</template>