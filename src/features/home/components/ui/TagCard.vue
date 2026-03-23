<script setup lang="ts">
import ButtonGlass from './ButtonGlass.vue';

interface TagCardProps {
    imgSrc: string,
    btnName: string
}

const tagCardProps = defineProps<TagCardProps>();
</script>

<template>
    <div class="tag-card aspect-3/4 bg-white h-[50vh]"
        :style="{backgroundImage: `url('${tagCardProps.imgSrc}')`}"
    >
        <ButtonGlass :text="tagCardProps.btnName" />
    </div>
</template>