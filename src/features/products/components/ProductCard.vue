<script setup lang="ts">
    interface ProductCardProps {
        productName: string,
        productPrice: number,
        imgSrc?:string,
    }

    const productCardProps = defineProps<ProductCardProps>()
</script>

<template>
    <div class="relative tag-card overflow-hidden aspect-3/4 h-[30vh] bg-black-ls/20 backdrop-blur-sm">
        <img 
            src="/images/shirt-model.png" 
            alt=""
            class="object-cover object-center"
        >

        <div class="absolute bottom-0 left-0 bg-black-ls/20 backdrop-blur-sm w-full h-[5vh] py-10 z-10">
            <div class="flex flex-col items-center justify-center text-center h-full text-white-ls ">
                <span>{{ productCardProps.productName }}</span>
                <span>R&#36;{{ productCardProps.productPrice.toFixed(2).replace('.', ',') }}</span>
            </div>
        </div>
    </div>
</template>