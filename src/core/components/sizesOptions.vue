<script setup lang="ts">
import { ref } from 'vue';
import type { Product } from '../../features/products/models/product';

interface SizesOptionsProps {
    product: Product;
}

const sizesOptionsProps = defineProps<SizesOptionsProps>()

const active = ref(false);

</script>

<template>
    <div class="flex gap-[.5vw]">
        <ul 
            v-for="size in sizesOptionsProps.product.sizes" 
            :key="size"
            @click="active = !active"
            class="flex items-center justify-center font-quantico"
            >
                <li :class="[
                'flex items-center justify-center w-[1.5vw] h-[1.5vw] text-small-ls aspect-square rounded-full border-[.1vh] border-black-ls/40 cursor-pointer', active ? 'bg-black-ls/10' : 'bg-transparent'
                ]">
                    {{ size }}
                </li>
        </ul>
    </div>
</template>