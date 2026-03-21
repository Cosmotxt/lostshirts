<script setup lang="ts">
    import HeaderPage from '../../home/components/HeaderPage.vue';
    import CartResume from '../components/CartResume.vue';
    import ProductResume from '../components/ProductResume.vue';
</script>

<template>
    <section class="relative overflow-x-hidden bg-black-ls h-screen">
        <HeaderPage />
        <div class="absolute inset-[2vh] flex items-start justify-center bg-white-ls overflow-y-scroll py-[10vh] box-border">
            <div class="flex justify-center items-center w-[85%] bg-white-card-ls">
                <div class="flex flex-col justify-start h-[90%] w-[90%] py-[3vh]">
                    <h1 class="text-title-ls text-black-ls font-bold font-orbitron uppercase">Carrinho</h1>
                    <div class="flex">
                        <ul class="flex flex-col w-[85%] h-[70%] gap-[6vh]">
                            <li>
                                <ProductResume 
                                    product-img="/images/shirt-model-2.jpg" 
                                    product-title="Camisinha estourada"
                                    product-size="G"
                                    :product-price=25
                                    product-color="#AAAAAA"
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