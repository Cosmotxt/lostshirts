import { defineStore } from "pinia";
import type { Product } from "../../features/products/models/product";
import { computed, ref } from "vue";

export interface CartItem extends Product {
    quantity: number;
    selectedSize?: string
    selectedColor?: string
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

    function addItems(product: Product, selectedSize?: string, selectedColor?: string, quantity: number =1) {
        const size = selectedSize ?? null
        const color = selectedColor ?? null
        const existingItem = items.value.find(item => item.id === product.id && (item.selectedSize ?? null) === size 
        && (item.selectedColor ?? null) === color);
        
        if (existingItem) {
            existingItem.quantity = Math.min (existingItem.quantity+ quantity, 999)
        } else {
            items.value.push({ ...product, quantity, selectedSize, selectedColor });
        }
    }

    function removeItems(product: CartItem) {
        const existingItem = items.value.find(item => item.id === product.id
            && (item.selectedSize ?? null) ===(product.selectedSize ?? null)
            && (item.selectedColor ?? null) === (product.selectedColor ?? null)
            
        )  
        if (existingItem) {
            existingItem.quantity > 1 ? existingItem.quantity-- : removeProduct(product.id, product.selectedSize, product.selectedColor);
        } else {
            console.log('erro: item inexistente');
        }

    }

    function removeProduct(id: number, selectedSize?: string, selectedColor?: string) {
        items.value = items.value.filter(
            item => !(
                item.id === id
                &&(item.selectedSize ?? null) === (selectedSize ?? null)
                &&(item.selectedColor ?? null)=== (selectedColor ?? null)
            )
        )
        console.log('removido')
    }

    return { items, totalItems, totalPrice, addItemsById, productQuantity, addItems, removeProduct, removeItems };
});