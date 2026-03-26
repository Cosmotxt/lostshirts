<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import { useCartStore } from '../../../core/stories/CartStore'
import products from '../service/productsResponse'

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
  <div v-if="product" class="min-h-screen bg-white-ls text-black-ls">

    <!-- Botão voltar -->
    <div class="px-8 pt-8">
      <button @click="router.back()" class="text-sm uppercase tracking-widest hover:opacity-60 transition-opacity">
        ← Voltar
      </button>
    </div>

    <div class="flex flex-col md:flex-row gap-12 px-8 py-10 max-w-5xl mx-auto">

      <div class="w-full md:w-1/2 aspect-3/4 bg-black-ls/10 overflow-hidden">
        <img :src="product.urlImage" alt="Foto do produto" class="w-full h-full object-cover object-center" />
      </div>

      <!-- Informações -->
      <div class="w-full md:w-1/2 flex flex-col justify-center gap-6">

        <span class="text-sm uppercase tracking-widest opacity-60">{{ product.category.name }}</span>
        <h1 class="text-4xl font-bold uppercase">{{ product.name }}</h1>
        <p class="text-2xl font-semibold">R${{ product.price.toFixed(2).replace('.', ',') }}</p>
        <p class="text-sm opacity-70 leading-relaxed">{{ product.description }}</p>

        <!-- CORES — bolinhas com nome ao lado quando selecionado -->
        <div v-if="product.colors">
          <p class="text-sm uppercase tracking-widest mb-3">
            Cor:
            <span v-if="selectedColor" class="font-bold normal-case tracking-normal ml-1">
              {{ selectedColor }}
            </span>
          </p>
          <div class="flex gap-3">
            <button
              v-for="color in product.colors"
              :key="color"
              @click="selectedColor = color"
              :title="color"
              :style="{ backgroundColor: colorMap[color] ?? '#ccc' }"
              :class="[
                'w-7 h-7 rounded-full transition-all',
                selectedColor === color
                  ? 'ring-2 ring-offset-2 ring-black-ls scale-110'
                  : 'hover:scale-110'
              ]"
            />
          </div>
        </div>

        <!-- TAMANHOS — só para roupas -->
        <div v-if="product.sizes && product.sizes.length">
          <p class="text-sm uppercase tracking-widest mb-2">Tamanho:</p>
          <div class="flex gap-2">
            <button
              v-for="size in product.sizes"
              :key="size"
              @click="selectedSize = size"
              :class="[
                'border px-4 py-2 text-sm transition-colors',
                selectedSize === size
                  ? 'bg-black-ls text-white-ls border-black-ls'
                  : 'border-black-ls hover:bg-black-ls hover:text-white-ls'
              ]"
            >
              {{ size }}
            </button>
          </div>
        </div>

        <!-- QUANTIDADE — só para caneca e botons -->
        <div v-if="product.type === 'mug' || product.type === 'button'">
          <p class="text-sm uppercase tracking-widest mb-2">Quantidade</p>
          <div class="flex items-center gap-3">
            <button @click="decrease" class="border border-black-ls px-3 py-1 text-lg hover:bg-black-ls hover:text-white-ls transition-colors">−</button>
            <span class="text-lg font-semibold w-6 text-center">{{ quantity }}</span>
            <button @click="increase" class="border border-black-ls px-3 py-1 text-lg hover:bg-black-ls hover:text-white-ls transition-colors">+</button>
          </div>
        </div>

        <!-- Botões de compra -->
        <div class="flex flex-col gap-3 mt-4">
          <div v-if="addedFeedback" class="text-center text-sm uppercase tracking-widest py-2 bg-green-100 text-green-800">
            ✓ Adicionado ao carrinho!
          </div>
          <button @click="buyNow" class="bg-black-ls text-white-ls py-3 uppercase tracking-widest text-sm hover:opacity-80 transition-opacity">
            Comprar agora
          </button>
          <button @click="addToCart" class="border border-black-ls py-3 uppercase tracking-widest text-sm hover:bg-black-ls hover:text-white-ls transition-colors">
            Adicionar ao carrinho
          </button>
        </div>

      </div>
    </div>
  </div>

  <!-- Produto não encontrado -->
  <div v-else class="min-h-screen flex flex-col items-center justify-center gap-4">
    <p class="text-xl">Produto não encontrado.</p>
    <button @click="router.push('/')" class="border border-black-ls px-6 py-2 text-sm uppercase tracking-widest hover:bg-black-ls hover:text-white-ls transition-colors">
      Voltar
    </button>
  </div>
</template>