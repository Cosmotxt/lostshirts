<script setup lang="ts">
import { storeToRefs } from 'pinia';
import ButtonBlack from '../../../core/components/ui/ButtonBlack.vue';
import { useCartStore } from '../../../core/stories/CartStore';

interface CartResumeProps {
    productTotalPrice: number,
} 

const cartResumeProps = defineProps<CartResumeProps>()
const { totalPrice } = storeToRefs(useCartStore())
</script>

<template>
    <div class="flex justify-center w-[40%] h-[60vh]">
        <div class="flex flex-col gap-[5vh] border-l-[.20vh] pl-[3vw] border-black/30">
            <div class="flex flex-col justify-start w-full gap-[2vh] text-black-ls ">
                <h2 class="font-bold text-subtitle-ls text-black-ls font-tomorrow text-center py-[.5vh] border-b-[.2vh] border-black/30">RESUMO DA COMPRA</h2>
    
                <ul class="flex flex-col gap-[1vh] py-[1vh] text-small-ls font-tomorrow w-full">
                   <li class="flex justify-between">
                        <span>Subtotal:</span>    
                        <span class="font-bold">R&#36; {{ totalPrice.toFixed(2).replace('.', ',') }}</span>   
                   </li> 
                   <li class="flex justify-between">
                        <span>Frete:</span>    
                        <span class="font-bold">R&#36; 0,00</span>   
                   </li> 
                </ul>
    
                <div class="flex justify-between w-full py-[1vh] uppercase text-subtitle-ls font-tomorrow border-t-[.2vh] border-black/30">
                    <span class="">Total</span>
                    <span class="font-bold">R&#36; {{ totalPrice.toFixed(2).replace('.', ',') }}</span>
                </div>
    
            </div>
            <div class="flex flex-col gap-[1vh]">
                <ButtonBlack text="FINALIZAR COMPRA" />
                <ButtonBlack text="CONTINUAR COMPRANDO" :secondary=true /> 
            </div>

        </div>

    </div>
</template>