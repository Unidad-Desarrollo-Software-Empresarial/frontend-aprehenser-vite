<template>
    <MainLayout>
        <div v-if="isLoading">
            <SpinnerComponent />
        </div>
        <div v-if="isSuccess">
            <div class="h-[122px] w-full bg-[#848484] items-center justify-center align-center flex">
            <p class="text-center text-white text-[26px] md:text-[52px]">{{ data?.noticias.texto_logo }}</p>
        </div>
        <div class="border-b-[5px] rounded border-divider-title max-w-[1200px] mx-auto py-1"></div>

        <div>
            <NoticiaComponent 
            v-for="noticia in data?.noticias.noticias"
            :url-main-img="noticia.IMAGENES.at(0)"
            :url-sub-img="noticia.IMAGENES.at(1)"
            :title="noticia.PAGN_TITULO"
            :content="noticia.PAGN_TEXTO"
            author="Maricela Ormaza"
            />
            
        </div>

        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '../layouts/MainLayout.vue';
import NoticiaComponent from '../components/NoticiaComponent.vue';
import { useNoticiasQuery } from '../queries/noticias.query';
import SpinnerComponent from '../components/SpinnerComponent.vue';

const {data, isLoading, isSuccess} = useNoticiasQuery()
</script>

<style scoped></style>