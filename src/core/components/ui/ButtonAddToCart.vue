<script setup lang="ts">
import { computed } from 'vue';
import { useCartStore } from '../../stories/CartStore';
import type { Product } from '../../../features/products/models/product';

interface ButtonAddToCartProps {
    product: Product
}

const buttonAddToCartProps = defineProps<ButtonAddToCartProps>()

const cartStore = useCartStore()

const isInCart = computed(() => {
    return cartStore.productQuantity(buttonAddToCartProps.product.id) > 0;
})

function handleCartIcon() {
    if (isInCart.value) {
        cartStore.removeProduct(buttonAddToCartProps.product.id);
    } else {
        cartStore.addItems(buttonAddToCartProps.product);
    }
}

</script>

<template>
    <button
        v-if="isInCart"
        @click="handleCartIcon" 
        ref="root"
        class="flex items-center justify-center gap-[.5vw] bg-transparente border border-black-ls text-black-ls font-medium uppercase py-[1.6vh] w-80 cursor-pointer hover:bg-black-ls/10"
    >
        <i class="pi pi-cart-minus text-subtitle-ls"></i>
        <span>Remover do carrinho</span>
    </button>
    <button
        v-else
        @click="handleCartIcon" 
        ref="root"
        class="flex items-center justify-center gap-[.5vw] bg-transparente border border-black-ls text-black-ls font-medium uppercase py-[1.6vh] w-80 cursor-pointer hover:bg-black-ls/10"
    >
        <i class="pi pi-cart-plus text-subtitle-ls"></i>
        <span>Adicionar ao Carrinho</span>
    </button>
</template>