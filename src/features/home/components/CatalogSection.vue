<script setup lang="ts">
import ProductCard from '../../products/components/ProductCard.vue';
import products from '../../products/service/productsResponse';


interface CatalogSectionProps {
    title: string,
}   

const catalogSectionProps = defineProps<CatalogSectionProps>()
</script>

<template>
    <div class="py-[5vw] bg-white-ls flex flex-col gap-[10vh] justify-start items-center">
        <h1 class="text-title-ls font-tomorrow font-bold text-black-ls uppercase">{{ catalogSectionProps.title }}</h1>
        <div class="flex justify-around w-[95%] flex-wrap gap-y-[2vh]">
            <div v-for="product in products" :key="product.id">
                <ProductCard 
                    :product="product"
                />
            </div>
        </div>
    </div>
</template>