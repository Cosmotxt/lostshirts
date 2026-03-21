<script setup lang="ts">    
    import HeaderPage from './HeaderPage.vue';
</script>

<template>
    <section id="hero-section" class="relative bg-black-ls h-screen w-full overflow-x-hidden">
        <HeaderPage />
        <div class="main-hero-content overflow-hidden absolute inset-4 bg-white-ls">
            <img 
                src="/images/IMAGE-CAROUSEL.png" 
                alt="imagem do carrossel"
                class="object-center object-cover"    
            >
        </div>
    </section>
</template> 