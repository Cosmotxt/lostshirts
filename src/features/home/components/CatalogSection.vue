<script setup lang="ts">
import ProductCard from '../../products/components/ProductCard.vue';
import products from '../../products/service/productsResponse';
import { useRouter } from 'vue-router';

defineProps<{ title: string }>()  // ← prop do título de volta

const router = useRouter()

function goToProduct(id: number) {
    router.push(`/produto/${id}`)
}
</script>

<template>
    <div class="h-screen bg-white-ls flex flex-col gap-[10vh] justify-center items-center">
        <h1 class="text-title-ls font-tomorrow font-bold text-black-ls uppercase">{{ title }}</h1>
        <div class="flex justify-around w-[95%]">
            <div v-for="product in products" :key="product.id" @click="goToProduct(product.id)">
                <ProductCard :product="product" />
            </div>
        </div>
    </div>
</template>