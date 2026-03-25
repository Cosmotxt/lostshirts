<script setup lang="ts">
import ButtonBlack from '../../../core/components/ui/ButtonBlack.vue';
</script>

<template>
    <div class="flex justify-center w-[40%] h-[60vh]">
        <div class="flex flex-col gap-[5vh] border-l-[.20vh] pl-[3vw] border-black/30">
            <div class="flex flex-col justify-start w-full gap-[2vh] text-black-ls ">
                <h2 class="font-bold text-subtitle-ls text-black-ls font-tomorrow text-center py-[.5vh] border-b-[.2vh] border-black/30">RESUMO</h2>
            </div>
            <div class="flex flex-col gap-[1vh]">
                <router-link to="/#catalog">
                    <ButtonBlack text="VER PRODUTOS" />
                </router-link>
            </div>
        </div>
    </div>
</template>