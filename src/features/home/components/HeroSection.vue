<script setup lang="ts">    
    import ButtonBlack from '../../../core/components/ui/ButtonBlack.vue';
import HeaderPage from './HeaderPage.vue';
</script>

<template>
    <section id="hero-section" class="relative bg-black-ls h-screen w-full overflow-x-hidden">
        <HeaderPage />
        <div class="main-hero-content overflow-hidden absolute inset-4">
            <div id="background-image" class="absolute blur-[3px] inset-0 bg-amber-300 w-full h-full bg-[url('/assets/images/hero/pokemon/background-hero.webp')] bg-center bg-cover">
                
            </div>
            <div class="z-50 absolute flex items-center justify-between w-full h-full ">
                <div class="bg-red-ls animate-pulse duration-1000 p-[12vh] -translate-1/2 blur-[12vw] rounded-full"></div>
                <div class="bg-red-ls animate-pulse duration-1000 p-[12vh] translate-1/2 blur-[12vw] rounded-full"></div>
            </div>
            <div class="h-full">
                <div class="h-full w-full relative">
                    <div class="absolute w-[30%] bottom-0 left-[50%] -translate-x-1/2">
                        <img src="/assets/images/hero/pokemon/colecao-pikachu-modelo.png" alt="" />
                    </div>

                    <div class="w-full flex flex-col justify-center text-white-ls items-center gap-[15vh]">
                        <div class="flex flex-col leading-[21vh] mt-[10vh]">
                            <div class="w-full flex items-center justify-center gap-[2vw]">
                                <div class="w-[8%]">
                                    <img 
                                        src="/assets/images/hero/pokemon/pokebola.svg" 
                                        alt=""
                                    >
                                </div>
                                <h1 class="text-left font-stalinist font-extrabold text-title-ls text-white-ls">NOVA COLEÇÃO</h1>   
                                <div class="w-[8%]">
                                    <img 
                                        src="/assets/images/hero/pokemon/pokebola.svg" 
                                        alt=""
                                    >
                                </div>
                            </div>
                            <span class="text-left font-tomorrow font-extrabold text-super-giant-ls text-white-ls text-shadow-lg text-shadow-red-ls">POKEMON</span>
                        </div>
                        <div class="w-[90%] flex items-center justify-between text">
                            <div class="w-[30%] flex flex-col gap-[1vh] font-bold font-tomorrow">
                                <ButtonBlack text="EU QUERO!" add-class="bg-red-ls w-[60%] h-[12vh] text-subtitle-ls font-tomorrow font-black w-full" />
                                <span class="text-center font-dotgothic text-button-ls">São diversas opções pra você escolher!</span>
                            </div>
                            <p class="w-[32%] text-right font-dotgothic font-bold text-button-ls">
                                Capture a essência da jornada Kanto com nossa nova coleção exclusiva de camisetas Pokémon! Cada peça foi desenvolvida para treinadores que buscam elevar seu estilo urbano, unindo tecidos de alta gramatura a estampas de alta definição que celebram o clássico. Seja para enfrentar o dia a dia ou dominar o próximo ginásio, vista a nostalgia e mostre que você está pronto para o próximo nível da evolução.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template> 