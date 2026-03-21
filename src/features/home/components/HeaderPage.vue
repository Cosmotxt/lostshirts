<script setup lang="ts">

</script>

<template>
    <div class="absolute top-0 left-0 z-99 w-screen">
        <div class=" mx-auto bg-black-ls w-[85%] py-3 [clip-path:url(#header-clip)]">
            <div class="flex justify-between items-center mx-auto w-[80%]">
                <nav>
                    <ul class="flex items-center gap-14 text-white-ls text-small-ls font-family-ls">
                        <li><a href="">CATEGORIAS</a></li>
                        <li><a href="">PROMOÇÕES</a></li>
                        <li><a href="">COMPRE PELO WHATSAPP</a></li>
                    </ul>
                </nav>
    
                <a href="/">
                    <img src="/images/logo.png" alt="logotipo do site" class="w-[8vw]">
                </a>
                    
    
                <ul class="flex items-center gap-14 text-white-ls text-small-ls font-family-ls">
                    <li><a href="">BUSCAR PRODUTO</a></li>
                    <li><a href="/carrinho">CARRINHO</a></li>
                    <li><a href="">ENTRAR / CADASTRAR</a></li>
                </ul>
            </div>
        </div>
        <svg width="0" height="0" class="absolute">
            <defs>
                <clipPath id="header-clip" clipPathUnits="objectBoundingBox">
                    <path d="M 0,0 
                            H 1 
                            L 0.9753,0.5323 
                            C 0.9617,0.8271 0.9405,1 0.9180,1 
                            H 0.0835 
                            C 0.0617,1 0.0411,0.8378 0.0274,0.5586 
                            L 0,0 
                            Z" />
                </clipPath>
            </defs>
        </svg>
    </div>
</template>