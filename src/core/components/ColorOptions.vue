<script setup lang="ts">
import { ref } from 'vue';
import colorOptionsMap from '../../features/products/models/product';
import type { Product } from '../../features/products/models/product';

interface ColorOptionsProps {
    product: Product;
}

const colorOptionsProps = defineProps<ColorOptionsProps>()

const active = ref(false);

</script>

<template>
    <ul class="flex gap-[.5vw]">
        <li v-for="color in product.colors" :key="color" :style="{ backgroundColor: colorOptionsMap[color] || '#ccc' }" class="w-[1vw] h-[1vw] text-small-ls font-quantico aspect-square rounded-full flex items-center justify-center cursor-pointer"></li>
    </ul>
</template>