<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useFavoriteStore } from '../../../core/stories/FavoriteStore';
import HeaderPage from '../../home/components/HeaderPage.vue';
import FavoriteResume from '../components/FavoriteResume.vue';
import ProductFavoriteResume from '../components/ProductFavoriteResume.vue';

const favoriteStore = useFavoriteStore()
const { items } = storeToRefs(favoriteStore)

</script>

<template>
    <section class="relative overflow-x-hidden bg-black-ls h-screen">
        <HeaderPage />
        <div class="absolute inset-[2vh] flex items-start justify-center bg-white-ls overflow-y-scroll py-[10vh] box-border">
            <div class="flex justify-center items-center w-[85%] bg-white-card-ls">
                <div class="flex flex-col justify-start h-[90%] w-[90%] py-[3vh]">
                    <h1 class="text-title-ls text-black-ls font-bold font-tomorrow uppercase">Favoritos</h1>
                    <div class="flex">
                        <ul class="flex flex-col w-[85%] h-[70%] gap-[6vh]">
                            <li v-for="product in items">
                                <ProductFavoriteResume 
                                    :product="product"
                                />
                            </li>
                        </ul>
                        <FavoriteResume />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>