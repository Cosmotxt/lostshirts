<script setup lang="ts">
import { ref } from 'vue';
import ProductCard from '../../products/components/ProductCard.vue';
import type { Product } from '../../products/models/product';
import products from '../../products/service/productsResponse';
import { useCartStore } from '../../../core/stories/CartStore';

const productRef = ref<Product[]>([])


interface CatalogSectionProps {
    title: string,
}   

const catalogSectionProps = defineProps<CatalogSectionProps>()

const cartStore = useCartStore()

function addItemToCart(product: Product) {
    cartStore.addItems(product)
}
    
</script>

<template>
    <div class="h-screen bg-white-ls flex flex-col gap-[10vh] justify-center items-center">
        <h1 class="text-title-ls font-tomorrow font-bold text-black-ls uppercase">{{ catalogSectionProps.title }}</h1>
        <div class="flex justify-around w-[95%]">
            <div v-for="product in products" :key="product.id">
                <ProductCard 
                    :product="product"
                />
            </div>
        </div>
    </div>

</template>