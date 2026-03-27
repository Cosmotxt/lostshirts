<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useCartStore } from '../../stories/CartStore';
import type { Product } from '../../../features/products/models/product';

interface CartIconProps {
    product: Product
}

const cartIconProps = defineProps<CartIconProps>()

const cartStore = useCartStore()

const isInCart = computed(() => {
    return cartStore.productQuantity(cartIconProps.product.id) > 0;
})

function handleCartIcon() {
    if (isInCart.value) {
        cartStore.removeProduct(cartIconProps.product.id);
    } else {
        cartStore.addItems(cartIconProps.product);
    }
}
</script>

<template>
    <button @click="handleCartIcon" class="flex items-center justify-center text-subtitle-ls cursor-pointer hover:bg-black-ls/5 active:bg-black-ls/30 w-[3vw] h-[3vw] rounded-full duration-500">
        <i class="pi" :class="isInCart ? 'pi-cart-minus' : 'pi-cart-plus'"></i>
    </button>
</template>