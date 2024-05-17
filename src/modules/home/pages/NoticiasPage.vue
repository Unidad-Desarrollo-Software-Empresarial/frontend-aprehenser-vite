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
            <!-- <NoticiaAlternativaComponent 
            v-for="noticia in data?.noticias.noticias"
            :images="noticia.IMAGENES"
            :title="noticia.PAGN_TITULO"
            :content="noticia.PAGN_TEXTO"
            author="Maricela Ormaza"
            /> -->
            <NoticiaComponent 
            v-for="(noticia, index) in data?.noticias.noticias"
            :url-images="noticia.IMAGENES"
            :title="noticia.PAGN_TITULO"
            :content="noticia.PAGN_TEXTO"
            :author="noticia.PAGN_AUTOR"
            :is-reverse="index % 2 === 0"
            />
            
        </div>

        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '../layouts/MainLayout.vue';
import NoticiaComponent from '../components/NoticiaComponent.vue';
// import NoticiaAlternativaComponent from '../components/NoticiaAlternativaComponent.vue';
import { useNoticiasQuery } from '../queries/noticias.query';
import SpinnerComponent from '../components/SpinnerComponent.vue';

const {data, isLoading, isSuccess} = useNoticiasQuery()
</script>

<style scoped></style>