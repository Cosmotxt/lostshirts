<script setup lang="ts">
import TagCard from './ui/TagCard.vue';
</script>

<template>
    <section id="our-products" class="h-screen overflow-x-hidden bg-white-ls">
        <div class="flex flex-col justify-center items-center h-full gap-10">
            <h1 class="font-tomorrow font-bold text-title-ls text-black-ls">NOSSOS PRODUTOS</h1>
            
            <div class="flex justify-around w-[90%]">
                <TagCard img-src="/assets/images/shirt-model.png" btn-name="CAMISETA" :product-id="1"/>
                <TagCard img-src="/assets/images/shirt-model.png" btn-name="MOLETOM" :product-id="2" />
                <TagCard img-src="/assets/images/shirt-model.png" btn-name="CANECA" :product-id="3"/>
                <TagCard img-src="/assets/images/shirt-model.png" btn-name="BOTONS" :product-id="4" />
            </div>
            
        </div>
    </section>
</template>