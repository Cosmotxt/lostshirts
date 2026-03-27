<script setup lang="ts">
import { ref } from 'vue';

interface ButtonBlackProps {
    text: string,
    addClass?: string,
    secondary?: boolean,
}

const buttonBlackProps = defineProps<ButtonBlackProps>()
const root = ref(null)

defineExpose({
    root
})

</script>

<template>
    <button 
        ref="root"
        :class="[
            addClass, 
            'bg-transparente border border-black-ls text-black-ls font-medium uppercase py-[2vh] px-[4vw] cursor-pointer'
        ]"
        v-if="buttonBlackProps.secondary"
    >
        {{ buttonBlackProps.text }}
    </button>

    <button 
        ref="root"
        :class="[
            addClass,
            'bg-black-ls text-white-ls font-medium uppercase py-[2vh] px-[4vw] cursor-pointer hover:bg-red-ls hover:scale-101 duration-500'
        ]"
        v-else
    >
        {{ buttonBlackProps.text }}
    </button>
</template>