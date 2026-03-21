<script setup lang="ts">
    import TagCard from './TagCard.vue';
</script>

<template>
    <section id="our-products" class="h-screen overflow-x-hidden bg-white-ls">
        <div class="flex flex-col justify-center items-center h-full gap-10">
            <h1 class="font-family-ls font-bold text-title-ls text-black-ls">NOSSOS PRODUTOS</h1>
            
            <div class="flex justify-around w-[90%]">
                <TagCard img-src="/images/shirt-model.png" btn-name="CAMISETA" />
                <TagCard img-src="/images/shirt-model.png" btn-name="MOLETOM" />
                <TagCard img-src="/images/shirt-model.png" btn-name="CANECA" />
                <TagCard img-src="/images/shirt-model.png" btn-name="BOTONS" />
            </div>
            
        </div>
    </section>
</template>