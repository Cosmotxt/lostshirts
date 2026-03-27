<script setup lang="ts">
import ProductCard from '../../products/components/ProductCard.vue';
import products from '../../products/service/productsResponse';
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { onMounted, ref } from 'vue';

gsap.registerPlugin(ScrollTrigger,SplitText);

interface CatalogSectionProps {
    title: string,
}   

const catalogSectionProps = defineProps<CatalogSectionProps>()

const mainContainer = ref()
const sectionTitle = ref()


onMounted(() => {
    const splittedSectionTitle = new SplitText(sectionTitle.value, {  type: "chars" })
    
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: mainContainer.value,
            start: 'top bottom',
            end: '40% center',
            scrub: 2,
        }
    })

    tl.fromTo(mainContainer.value,
        { 
            clipPath: 'inset(20% 20% 20% 20% round 20px)', // Começa como um retângulo menor no centro
            
        },
        {
            clipPath: 'inset(0% 0% 0% 0% round 0px)', // Abre totalmente
            opacity: 1,
            duration:1,
            ease: 'none',

        }
    ).from(splittedSectionTitle.chars, {
        opacity: 0,
        y: 20,         
        stagger: 0.1,
        duration: 1,
        ease: 'power2.out',
    });
})


</script>

<template>
    <div ref="mainContainer" class="py-[5vw] bg-white-ls flex flex-col gap-[10vh] justify-start items-center">
        <h1 ref="sectionTitle" class="text-title-ls font-tomorrow font-bold text-black-ls uppercase">{{ catalogSectionProps.title }}</h1>
        <div class="flex justify-around w-[95%] flex-wrap gap-y-[2vh]">
            <div v-for="product in products" :key="product.id">
                <ProductCard 
                    :product="product"
                />
            </div>
        </div>
    </div>
</template>