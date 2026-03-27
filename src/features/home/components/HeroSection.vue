<script setup lang="ts">    
import ButtonBlack from '../../../core/components/ui/ButtonBlack.vue';
import HeaderPage from './HeaderPage.vue';

import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { onMounted, ref } from 'vue';

gsap.registerPlugin(ScrollTrigger,SplitText);

const guyImage = ref(null)
const cta = ref(null)
const title = ref()
const subTitle = ref()
const description = ref()
const subTextButton = ref()
const mainContent = ref()
const pokeballL = ref()
const pokeballR = ref()

onMounted(() => {
    const splittedTitle = new SplitText(title.value, {  type: "chars, words" })
    const splittedSubTitle = new SplitText(subTitle.value, { type: "chars, words"})
    const splittedDescription = new SplitText(description.value, { type: "lines"})

    const scrollTl = gsap.timeline({
        scrollTrigger: {
            trigger: mainContent.value,
            start: "top top",
            end: "bottom top",
            scrub: 2,
        },
    })

    gsap.timeline()
        .from(guyImage.value, {
            y: '14',
            duration: 1.1,
            opacity: 0,
            ease: 'power2.out'
        })
        .from(pokeballL.value, {
            rotate: -180,
            opacity: 0,
            duration: 1,
            ease: 'power2.out'
        }, '-=0.90')
        .from(pokeballR.value, {
            rotate: 180,
            opacity: 0,
            duration: 1,
            ease: 'power2.out'
        }, '-=0.90')
        .from(splittedTitle.chars, {
            y: '14',
            duration: 1.1,
            opacity: 0,
            stagger: 0.05,
            ease: 'power2.out',
        }, '-=0.95')
        .from(splittedSubTitle.chars, {
            y: '8',
            duration: 1.1,
            opacity: 0,
            stagger: 0.05,
            ease: 'power2.out',
        }, '-=0.95')
        .from(splittedDescription.lines, {
            y: '10',
            duration: 1,
            opacity: 0,
            stagger: 0.09,
            ease: 'power2.out',
        }, '-=0.95')
        .from(cta.value, {
            y: '14',
            duration: 1.1,
            opacity: 0,
            ease: 'power2.out'
        }, '-=0.95')
        .from(subTextButton.value, {
            y: '8',
            duration: 1.1,
            opacity: 0,
            ease: 'power2.out'
        }, '-=0.95')
        
       
    scrollTl.to(mainContent.value, {
        top: 0,
        left: 0,
        right: 0,
        height: '100vh',
        duration: 1.5
    })
    .to(guyImage.value, {
        y: '14',
        opacity: 0,
        duration: 1.5,
        ease: 'power2.out'
    }, '-=0.90')
    .to(splittedTitle.chars, {
        y: '-14',
        opacity: 0,
        duration: 1.5,
        stagger: 0.05,
        ease: 'power2.out',
    }, '-=0.90')
    .to(splittedSubTitle.chars, {
        y: '-14',
        opacity: 0,
        duration: 1.5,
        stagger: 0.05,
        ease: 'power2.out',
    }, '-=0.90')
    .to(splittedDescription.lines, {
        y: '-8',
        opacity: 0,
        duration: 1.5,
        stagger: 0.09,
        ease: 'power2.out',
    }, '-=0.90')
    .to(cta.value, {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: 'power2.out',
    }, '-=0.90')
    .to(subTextButton.value, {
        y: '-8',
        opacity: 0,
        duration: 1.5,
        ease: 'power2.out'
    }, '-=0.90')
    .to(pokeballL.value, {
        rotate: -180,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.90')
    .to(pokeballR.value, {
        rotate: 180,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.90')
})
</script>

<template>
    <section id="hero-section" class="relative -z-10 bg-black-ls min-h-[180vh] overflow-x-hidden">
        <div ref="mainContent" class="overflow-hidden fixed inset-[2vh] h-[96vh]">
            <div id="background-image" class="absolute blur-[3px] inset-0 w-full h-full bg-[url('/assets/images/hero/pokemon/background-hero.webp')] bg-center bg-cover">            </div>
            <div class="h-full">
                <div class="h-full w-full relative">
                    <div ref="guyImage" class="z-0 absolute w-[30%] bottom-0 left-[50%] -translate-x-1/2">
                        <img src="/assets/images/hero/pokemon/colecao-pikachu-modelo.png" alt="" />
                    </div>

                    <div class="w-full flex flex-col justify-center text-white-ls items-center gap-[15vh]">
                        <div class="flex flex-col leading-[21vh] mt-[10vh]">
                            <div class="w-full flex items-center justify-center gap-[2vw]">
                                <div class="w-[8%]">
                                    <img 
                                        ref="pokeballL"
                                        src="/assets/images/hero/pokemon/pokebola.svg" 
                                        alt=""
                                    >
                                </div>
                                <h1 ref="title" class="text-left font-stalinist font-extrabold text-title-ls text-red-ls mix-blend-darken">NOVA COLEÇÃO</h1>   
                                <div class="w-[8%]">
                                    <img 
                                        ref="pokeballR"
                                        src="/assets/images/hero/pokemon/pokebola.svg" 
                                        alt=""
                                    >
                                </div>
                            </div>
                            <span ref="subTitle" class="mix-blend-multiply text-left font-tomorrow font-extrabold text-super-giant-ls text-red-ls text-shadow-lg text-shadow-white ">POKEMON</span>
                        </div>
                        <div class="w-[90%] flex items-center justify-between text">
                            <div class="w-[30%] flex flex-col gap-[1vh] font-bold font-tomorrow">
                                <div ref="cta"><ButtonBlack text="EU QUERO!" add-class="bg-red-ls w-[60%] h-[12vh] text-subtitle-ls font-tomorrow font-black w-full" /></div>
                                <span ref="subTextButton" class="text-center font-dotgothic text-button-ls">São diversas opções pra você escolher!</span>
                            </div>
                            <p ref="description" class="w-[32%] text-right font-dotgothic font-bold text-button-ls">
                                Capture a essência da jornada Kanto com nossa nova coleção exclusiva de camisetas Pokémon! Cada peça foi desenvolvida para treinadores que buscam elevar seu estilo urbano, unindo tecidos de alta gramatura a estampas de alta definição que celebram o clássico. Seja para enfrentar o dia a dia ou dominar o próximo ginásio, vista a nostalgia e mostre que você está pronto para o próximo nível da evolução.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template> 