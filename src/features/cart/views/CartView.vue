<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCartStore } from '../../../core/stories/CartStore';
import HeaderPage from '../../home/components/HeaderPage.vue';
import CartResume from '../components/CartResume.vue';
import ProductResume from '../components/ProductResume.vue';

const cartStore = useCartStore()
const { items } = storeToRefs(cartStore)



</script>

<template>
    <section class="relative overflow-x-hidden bg-black-ls h-screen">
        <HeaderPage />
        <div class="absolute inset-[2vh] flex items-start justify-center bg-white-ls overflow-y-scroll py-[10vh] box-border">
            <div class="flex justify-center items-center w-[85%] bg-white-card-ls">
                <div class="flex flex-col justify-start h-[90%] w-[90%] py-[3vh]">
                    <h1 class="text-title-ls text-black-ls font-bold font-tomorrow uppercase">Carrinho</h1>
                    <div class="flex">
                        <ul class="flex flex-col w-[85%] h-[70%] gap-[6vh]">
                            <li v-for="product in items">
                                <ProductResume 
                                    product-img="/images/assets/shirt-model-2.jpg" 
                                    :product-title="product.name"
                                    product-size="G"
                                    :product-price=product.price
                                    product-color="#AAAAAA"
                                    :product=product
                                />
                            </li>
                        </ul>
                        <CartResume :product-total-price=240.00 />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>