<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import { useCartStore } from '../../../core/stories/CartStore'
import products from '../service/productsResponse'
import HeaderPage from '../../home/components/HeaderPage.vue'
import ColorOptions from '../../../core/components/ColorOptions.vue'
import SizesOptions from '../../../core/components/sizesOptions.vue'
import ButtonBlack from '../../../core/components/ui/ButtonBlack.vue'
import FavoriteIcon from '../../../core/components/icons/FavoriteIcon.vue'
import ButtonAddToCart from '../../../core/components/ui/ButtonAddToCart.vue'

const route = useRoute()
const router = useRouter()
const cartStore = useCartStore()

// Mapa de nomes de cores para valores CSS
const colorMap: Record<string, string> = {
  'Preta': '#1a1a1a',
  'Branco': '#f5f5f5',
  'Cinza': '#888888',
  'Amarelo': '#f5c518',
}


 
const product = products.find(p => p.id === Number(route.params.id))

const selectedSize = ref<string | null>(null)
const selectedColor = ref<string | null>(null)
const quantity = ref(1)

function increase() { quantity.value++ }
function decrease() { if (quantity.value > 1) quantity.value-- }

const addedFeedback = ref(false)

function addToCart() {
  if (!product) return
  cartStore.addItems(product, selectedSize.value ?? undefined, selectedColor.value ?? undefined, quantity.value)
  addedFeedback.value = true
  setTimeout(() => addedFeedback.value = false, 2000)
}

function buyNow() {
  if (!product) return
  cartStore.addItems(product, selectedSize.value ?? undefined, selectedColor.value ?? undefined, quantity.value)
  router.push('/carrinho')
}
</script>

<template>
  <HeaderPage />
  <div class="h-screen w-screen flex justify-center items-center bg-white-ls">
    <div v-if="product" class="flex items-center justify-center w-[85%] h-[80%] bg-white-card-ls">
      <div class="flex w-[90%] h-[85%] ">
        <div class="flex flex-col justify-start items-start gap-[3vh]">
          <div class="top-0 flex flex-col justify-start text-left gap-[1vh]">
            <span class="py-[.5vh] px-[1vw] w-fit bg-white-ls border border-black-ls/10 text-black-ls/60 rounded-full font-quantico font-light">{{  product.type  }}</span>
            <h1 class="font-quantico font-extrabold text-title-ls leading-[8vh]">{{ product.name }}</h1>
          </div>
          
          <div class="flex flex-col items-start gap-[6vh]">
            <div class="flex items-end gap-[1vh]">
              <span class="font-tomorrow font-extrabold text-title-ls text-black-ls leading-[8vh]">R&#36; {{ product.price.toFixed(2).replace('.', ',')}}</span>
              <span class="font-quantico font-normal text-small-ls">ou 10x de {{ (product.price / 10).toFixed(2).replace('.', ',') }} sem juros</span>
            </div>
            
            <div class="flex justify-start font-quantico  ">
              <div class="flex flex-col items-start justify-start gap-[2vw]">
                <span>Cores: </span>
                <span>Tamanho: </span>
              </div>
              <div class="flex flex-col items-start justify-start ml-[1vw] gap-[2vw]">
                <SizesOptions :product="product" />
                <ColorOptions :product="product" />
              </div>
            </div>

            <div class="flex justify-around items-center gap-[2vw] font-quantico">
              <ButtonBlack text="Comprar agora" />
              <ButtonAddToCart :product="product" />
              <FavoriteIcon :product="product" className="text-[3vh]" />
            </div>
          </div>

        </div>
        <div class="aspect-square overflow-hidden">
          <img 
            :src="product.urlImage" 
            alt=""
            class="object-cover object-center"  
          >
        </div>
      </div>
    </div>
    <div v-else>

    </div>
  </div>
</template>