<script setup lang="ts">
    import { ref } from 'vue';
    import ProductCard from '../../products/components/ProductCard.vue';
    import type { Product } from '../../products/models/product';
    import products from '../../products/service/productsResponse';

    const productRef = ref<Product[]>([])

    interface CatalogSectionProps {
        title: string,
    }

    const catalogSectionProps = defineProps<CatalogSectionProps>()

    const addToCart = (cartItem:Product) => {
        productRef.value.push(cartItem)
    }
</script>

<template>
    <div class="h-screen bg-white-ls flex flex-col gap-[10vh] justify-center items-center">
        <h1 class="text-title-ls font-family-ls font-bold text-black-ls uppercase">{{ catalogSectionProps.title }}</h1>
        <div class="flex justify-around w-full">
            <a v-for="product in products" :key="product.id">
                <ProductCard 
                    :product-name="product.name"
                    :product-price="product.price" 
                    img-src="/public/images/shirt-model-2.jpg" 
                />
            </a>
        </div>
    </div>

</template>