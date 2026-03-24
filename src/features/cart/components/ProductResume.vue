<script setup lang="ts">
import { useCartStore } from '../../../core/stories/CartStore'
import type { Product } from '../../products/models/product';

interface ProductResumeProps {
    productImg: string    
    productTitle: string,
    productSize: string,
    productColor: string,
    productPrice: number,
    product: Product
}

const productResumeProps = defineProps<ProductResumeProps>()

const cartStore = useCartStore()

</script>

<template>
    <div class="w-full bg-transparent border-b-[0.2vh] border-black/30 py-[3vh]">
        <div class="w-full font-orbitron font-medium grid grid-cols-5 items-center gap-[3vw]">
            <div class="aspect-square ">
                <img 
                    :src="productResumeProps.productImg" 
                    alt=""
                    class="object-cover object-center"
                >
            </div>

            <div class="flex flex-col justify-start gap-4">
                <span>{{ productResumeProps.productTitle }}</span>
                <div class="flex gap-10">
                    <span>Tamanho</span>
                    <div class="uppercase font-bold">{{ productResumeProps.productSize }}</div>
                </div>
                <div class="flex items-center gap-10">
                    <span>Cor:</span>
                    <div 
                        class="aspect-square rounded-full h-[2vh]"
                        :style='{
                            backgroundColor: `${productResumeProps.productColor}`
                        }'
                    ></div>
                </div>
            </div>

            <span>
                R&#36; {{ (productResumeProps.productPrice).toFixed(2).replace('.', ',') }}
            </span>
            
            <div class="flex gap-[1vw] items-center">
                <div @click="cartStore.removeItems(product)" class="w-[2vw] h-[2vw] aspect-square rounded-full flex items-center justify-center border-[.1vh] border-black-ls/40 cursor-pointer">-</div>
                <span class="text-center">{{ cartStore.productQuantity(product.id) }}</span>
                <div @click="cartStore.addItems(product)" class="rounded-full w-[2vw] h-[2vw] aspect-square flex items-center justify-center border-[.1vh] border-black-ls/40 cursor-pointer">+</div>
            </div>
            
            <span>R&#36; {{ (productResumeProps.productPrice * cartStore.productQuantity(product.id)).toFixed(2).replace('.', ',') }}</span>
        </div>
    </div>
</template>