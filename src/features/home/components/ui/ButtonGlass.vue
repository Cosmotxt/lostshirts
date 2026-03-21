<script setup lang="ts">
    interface ButtonGlassProps {
        text: string
    }

    const buttonGlassProps = defineProps<ButtonGlassProps>();
</script>

<template>
    <button class="absolute bottom-[7vh] left-[50%] -translate-1/2 bg-black-ls/5 backdrop-blur-[5px] text-white-ls px-10 py-3 rounded-full border-[.1vh] border-white-ls/40 z-10">
        {{ buttonGlassProps.text }}
    </button>
</template>