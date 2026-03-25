import { defineStore } from "pinia";
import type { Product } from "../../features/products/models/product";
import { computed, ref } from "vue";

export const useFavoriteStore = defineStore('favorite', () => {
    const items = ref<Product[]>([]);
    
    const totalItems = computed(() => {
        return items.value.length;
    })

    function toggleFavorite(product: Product) {
        const existingItem = items.value.find(item => item.id === product.id);
        
        if (existingItem) {
            removeFavorite(product.id);
        } else {
            addFavorite(product);
        }
    }

    function addFavorite(product: Product) {
        items.value.push(product);
    }

    function removeFavorite(id: number) {
        items.value = items.value.filter(item => item.id !== id);
    }

    function isFavorite(productId: number) {
        return items.value.some(item => item.id === productId);
    }

    return { items, totalItems, toggleFavorite, isFavorite };
});