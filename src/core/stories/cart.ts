import { defineStore } from "pinia";
import type { Product } from "../../features/products/models/product";
import { computed, ref } from "vue";

export interface CartItem extends Product {
    quantity: number;
}

export const useCartStore = defineStore('cart', () => {
    const items = ref<CartItem[]>([]);
    
    const totalItems = computed(() => {
        items.value.reduce((acc, item) => acc + item.quantity, 0);
    })

    const totalPrice = computed(() => {
        items.value.reduce((acc, item) => acc + (item.quantity * item.price), 0);
    })

    function addItems(product: Product) {
        const existingItem = items.value.find(item => item.id === product.id);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            items.value.push({ ...product, quantity: 1 });
        }
    }

    function removeItems(id: number) {
        return items.value.filter(item => item.id !== id);
    }

    return { items, totalItems, totalPrice, addItems, removeItems };
});