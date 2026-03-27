<script setup lang="ts">

</script>

<template>
    <div class="fixed top-0 left-0 z-99 w-screen">
        <div class="mx-auto bg-black-ls w-[85%] py-3 [clip-path:url(#header-clip)]">
            <div class="flex justify-between items-center mx-auto w-[80%]">
                <nav>
                    <ul class="flex items-center gap-14 text-white-ls text-small-ls font-family-ls">
                        <li class="flex items-center gap-[.5vw] cursor-pointer">
                            <router-link to="">CATEGORIAS</router-link>
                            <span class="pi pi-chevron-down"></span>
                        </li>
                        <li class="flex items-center gap-[.5vw] cursor-pointer">
                            <router-link to="">PROMOÇÕES</router-link>
                            <span class="pi pi-chevron-down"></span>
                        </li>
                        <li class="flex items-center gap-[.5vw] cursor-pointer">
                            <router-link to="">COMPRE PELO WHATSAPP</router-link>
                            <span class="pi pi-chevron-down"></span>
                        </li>
                    </ul>
                </nav>

                <router-link to="/">
                    <img src="/assets/images/logo.svg" alt="logotipo do site" class="w-[8vw]">
                </router-link>
                    
    
                <ul class="flex items-end gap-14 text-white-ls text-small-ls font-family-ls">
                    <li>
                        <router-link to="" class="flex flex-col items-center gap-[.5vh]">
                            <i class="pi pi-search text-button-ls"></i>
                            <span>PRODUTO</span>
                        </router-link>
                    </li>
                    <li class="">
                        <router-link to="/favoritos" class="flex flex-col items-center gap-[.5vh]">
                            <i class="pi pi-heart text-button-ls"></i>
                            <span>FAVORITOS</span>
                        </router-link>
                    </li>
                    <li class="flex flex-col items-center gap-[.5vh]">
                        <router-link to="/carrinho" class="flex flex-col items-center gap-[.5vh]">    
                        <i class="pi pi-shopping-cart text-button-ls"></i>
                        <span>CARRINHO</span>
                        </router-link>
                    </li>
                    <li class="flex flex-col items-center gap-[.5vh]">
                        <router-link to="/carrinho" class="flex flex-col items-center gap-[.5vh]">
                        <i class="pi pi-user text-button-ls"></i>
                        <span>ENTRAR / CADASTRAR</span> 
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <svg width="0" height="0" class="absolute">
            <defs>
                <clipPath id="header-clip" clipPathUnits="objectBoundingBox">
                    <path d="M 0,0 H 1 L 0.9753,0.5323 C 0.9617,0.8271 0.9405,1 0.9180,1 H 0.0835 C 0.0617,1 0.0411,0.8378 0.0274,0.5586 L 0,0 Z" />
                </clipPath>
            </defs>
        </svg>
    </div>
</template>