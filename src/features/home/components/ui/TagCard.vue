<script setup lang="ts">
import ButtonGlass from './ButtonGlass.vue';
import { useRouter } from 'vue-router';

interface TagCardProps {
    imgSrc: string,
    btnName: string
    productId: number
}

const tagCardProps = defineProps<TagCardProps>();
const router = useRouter();
</script>

<template>
    <div class="tag-card aspect-3/4 bg-white h-[50vh] cursor-pointer"
        :style="{backgroundImage: `url('${tagCardProps.imgSrc}')`}"
        @click="router.push(`/produto/${tagCardProps.productId}`)"
    >
        <ButtonGlass :text="tagCardProps.btnName" />
    </div>
</template>