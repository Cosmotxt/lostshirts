<script setup lang="ts">
import type { Product } from '../../products/models/product';
import CartIcon from '../../../core/components/icons/CartIcon.vue';
import FavoriteIcon from '../../../core/components/icons/FavoriteIcon.vue';

interface ProductFavoriteResumeProps {
    product: Product
}


const props = defineProps<ProductFavoriteResumeProps>()

</script>

<template>
    <div class="w-full bg-transparent border-b-[0.2vh] border-black/30 py-[3vh]">
        <div class="w-full font-orbitron font-medium grid grid-cols-5 items-center gap-[3vw]">
            <div class="aspect-square">
                <img 
                    :src="props.product.urlImage" 
                    alt=""
                    class="object-cover object-center"
                >
            </div>

            <div class="flex flex-col justify-start gap-4">
                <span>{{ props.product.name }}</span>
            </div>

            <span>
                R&#36; {{ (props.product.price).toFixed(2).replace('.', ',') }}
            </span>
            
            <FavoriteIcon :product="product" />
            
            <CartIcon :product="props.product"/>
        </div>
    </div>
</template>