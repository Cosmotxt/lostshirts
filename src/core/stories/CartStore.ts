import { defineStore } from "pinia";
import type { Product } from "../../features/products/models/product";
import { computed, ref } from "vue";

export interface CartItem extends Product {
    quantity: number;
}

export const useCartStore = defineStore('cart', () => {
    const items = ref<CartItem[]>([]);
    
    const productQuantity = (productId: number) => {
        const existingItem = items.value.find(item => item.id === productId);
        return existingItem ? existingItem.quantity : 0
    }

    const totalItems = computed(() => {
        return items.value.reduce((acc, item) => acc + item.quantity, 0);
    })

    const totalPrice = computed(() => {
        return items.value.reduce((acc, item) => acc + (item.quantity * item.price), 0);
    })

    function addItemsById(productId: number) {
        const existingItem = items.value.find(item => item.id === productId);
        if (!existingItem) {
            return 'item não existente'
        } else {
            existingItem.quantity++;
        }
    }

    function addItems(product: Product) {
        const existingItem = items.value.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity < 999 ? existingItem.quantity++ : existingItem.quantity;
        } else {
            items.value.push({ ...product, quantity: 1 });
        }
    }

    function removeItems(product: Product) {
        const existingItem = items.value.find(item => item.id === product.id);
        console.log(existingItem?.quantity)
        
        if (existingItem) {
            existingItem.quantity > 1 ? existingItem.quantity-- : removeProduct(product.id);
        } else {
            console.log('erro: item inexistente');
        }

    }

    function removeProduct(id: number) {
        console.log('removido')
        items.value = items.value.filter(item => item.id !== id);
    }

    return { items, totalItems, totalPrice, addItemsById, productQuantity, addItems, removeProduct, removeItems };
});