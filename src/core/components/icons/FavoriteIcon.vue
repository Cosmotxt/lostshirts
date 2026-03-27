<script setup lang="ts">
import { computed } from 'vue';
import { useFavoriteStore } from '../../stories/FavoriteStore';
import type { Product } from '../../../features/products/models/product';

interface FavoriteIconProps {
    product: Product
}

const props = defineProps<FavoriteIconProps>()

const favoriteStore = useFavoriteStore();

const isFavorite = computed(() => {
    return favoriteStore.isFavorite(props.product.id);
})

function handleFavoriteIcon() {
    favoriteStore.toggleFavorite(props.product);
}
</script>

<template>
    <button @click="handleFavoriteIcon" class="ml-[.5vw] mt-[.5vw] w-5 h-5 cursor-pointer active:scale-110 duration-300 ease-in-out">
        <i class="pi pi-heart-fill" :class="isFavorite ? 'text-red-ls' : 'text-black-ls'"></i>
    </button>
</template>
