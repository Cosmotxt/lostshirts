<script setup lang="ts">
import { useCartStore } from '../../../core/stories/CartStore'
import type { CartItem } from '../../../core/stories/CartStore'

interface ProductResumeProps {
    productImg: string
    productPrice: number
    product: CartItem  // ← CartItem em vez de Product, pois tem selectedSize e selectedColor
}

const props = defineProps<ProductResumeProps>()
const cartStore = useCartStore()

function add() {
    const item = cartStore.items.find(
        i => i.id === props.product.id
        && (i.selectedSize ?? null) === (props.product.selectedSize ?? null)
        && (i.selectedColor ?? null) === (props.product.selectedColor ?? null)
)
if (item) item.quantity = Math.min (item.quantity +1, 999)
}

function remove() {
    const index = cartStore.items.findIndex(i => i.id === props.product.id
        && (i.selectedSize ?? null) === (props.product.selectedSize ?? null)
        && (i.selectedColor ?? null) === (props.product.selectedColor ?? null))
        if(index === -1) return
        if (cartStore.items[index].quantity > 1){
            cartStore.items[index].quantity--
        } else{
            cartStore.items.splice(index,1)
        }
}
</script>

<template>
    <div class="w-full bg-transparent border-b-[0.2vh] border-black/30 py-[3vh]">
        <div class="w-full font-orbitron font-medium grid grid-cols-5 items-center gap-[3vw]">

            <!-- Imagem -->
            <div class="aspect-square">
                <img :src="props.productImg" alt="" class="object-cover object-center">
            </div>

            <!-- Nome, tamanho, cor -->
            <div class="flex flex-col justify-start gap-4">
                <span>{{ props.product.name }}</span>

                <div v-if="props.product.selectedSize" class="flex gap-10">
                    <span>Tamanho</span>
                    <span class="uppercase font-bold">{{ props.product.selectedSize }}</span>
                </div>

                <div v-if="props.product.selectedColor" class="flex items-center gap-10">
                    <span>Cor:</span>
                    <span class="font-bold">{{ props.product.selectedColor }}</span>
                    <!-- mostra o nome da cor em texto, sem depender de CSS color -->
                </div>
            </div>

            <!-- Preço unitário -->
            <span>R$ {{ props.productPrice.toFixed(2).replace('.', ',') }}</span>

            <!-- Botões de quantidade -->
            <div class="flex gap-[1vw] items-center">
                <div 
                    @click="remove"
                    class="w-[2vw] h-[2vw] aspect-square rounded-full flex items-center justify-center border-[.1vh] border-black-ls/40 cursor-pointer"
                >-</div>

                <span class="text-center">{{ props.product.quantity }}</span>

                <div 
                    @click="add"
                    class="rounded-full w-[2vw] h-[2vw] aspect-square flex items-center justify-center border-[.1vh] border-black-ls/40 cursor-pointer"
                >+</div>
            </div>

            <!-- Preço total -->
            <span>R$ {{ (props.productPrice * props.product.quantity).toFixed(2).replace('.', ',') }}</span>
        </div>
    </div>
</template>