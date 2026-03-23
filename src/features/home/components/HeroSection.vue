<script setup lang="ts">    
    import HeaderPage from './HeaderPage.vue';
</script>

<template>
    <section id="hero-section" class="relative bg-black-ls h-screen w-full overflow-x-hidden">
        <HeaderPage />
        <div class="main-hero-content overflow-hidden absolute inset-4 bg-white-ls">

            <div class="h-full">
                <div class="h-full w-full relative">
                    <div class="absolute bottom-0 left-[50%] -translate-x-1/2">
                        <img src="/assets/images/hero/pokemon/colecao-pokemon-modelo.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template> 