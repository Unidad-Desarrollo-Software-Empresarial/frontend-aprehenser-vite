<template>
    <MainLayout>
        <div class="h-686 bg-slate-500 w-full h-full relative">
            <div class="z-0 h-200 sm:h-auto ">
                <Swiper :spaceBetween="0" :centeredSlides="true" :autoplay="{
                    delay: 2500,
                    disableOnInteraction: false,
                }" :navigation="false" :modules="modules">
                    <SwiperSlide v-for="slide in data?.banner">
                        <img class="w-full" :src="`${data?.url}${slide.PWC_IMAGEN}`" :alt="slide.PWC_IMAGEN">
                    </SwiperSlide>
                </Swiper>
            </div>
            <div class="z-10 absolute inset-0 bg-black opacity-40"></div>
            <div class="z-20 absolute inset-0 flex items-center justify-center px-8 sm:px-16">
                <div class="flex flex-row md:mx-auto md:items-center">
                    <img class="h-24 hidden sm:block sm:h-36 sm:pb-4 md:h-auto"
                        :src="`${data?.url}${data?.info.at(0)?.PAG_ICONO_1}`" alt="logo">
                    <div class="w-max-1019">
                        <p class="text-white tracking-wider text-xs md:text-2xl text-wrap max-w-[1024px]">
                            {{ data?.info.at(0)?.PAG_TEXTO }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="isLoading" class="z-60 w-screen h-screen bg-labels-grey/10 flex items-center justify-center">
            <SpinnerComponent />
        </div>
        <div v-if="isSuccess"
            class="md:h-32 p-8 mx-auto bg-labels-grey flex flex-col sm:flex-row md:justify-between md:items-center">
            <p
                class="p-8 hover:opacity-80 hover:border hover:rounded-lg hover:cursor-default text-white text-xl sm:text-xl md:text-2xl font-semibold whitespace-nowrap">
                {{ data?.resumen.proyectos }}+ Proyectos</p>
            <p
                class="p-8 hover:opacity-80 hover:border hover:rounded-lg hover:cursor-default text-white text-xl sm:text-xl md:text-2xl font-semibold whitespace-nowrap">
                {{ data?.resumen.profesores }}+ Docentes</p>
            <p
                class="p-8 hover:opacity-80 hover:border hover:rounded-lg hover:cursor-default text-white text-xl sm:text-xl md:text-2xl font-semibold whitespace-nowrap">
                {{ data?.resumen.estudiantes }}+ Estudiantes</p>
            <p
                class="p-8 hover:opacity-80 hover:border hover:rounded-lg hover:cursor-default text-white text-xl sm:text-xl md:text-2xl font-semibold whitespace-nowrap">
                {{ data?.resumen.publicaciones }}+ Publicaciones</p>
        </div>
        <div class="flex flex-col justify-center items-center mx-auto pt-8 pb-4 px-12 md:px-24">
            <p class="text-labels-grey font-open-sans text-2xl md:text-5xl font-bold">Proyectos en marcha</p>
            <div class="border-b border-divider-title h-5 w-full"></div>
        </div>
        <div class="flex flex-wrap justify-center mx-auto max-w-[1500px]">
            <CardProjectComponent v-for="project in data?.proyectos_en_marcha" :title="project.PRO_NOMBRE"
                :image="`${data?.url}${project.PRO_IMAGEN}`" :idProyecto="project.PRO_ID" />
        </div>

        <div class="max-w-[1140px] mx-auto ">
            <div class="flex flex-col justify-center items-center mx-auto pt-8 pb-4 px-12 md:px-24">
                <p class="text-labels-grey font-open-sans text-2xl md:text-5xl font-bold">{{
                    data?.formacion.contenido.at(0)?.titulo }}</p>
                <div class="border-b border-divider-title h-5 w-full"></div>
            </div>
            <p class="text-2xl px-4">
                {{ data?.formacion.contenido.at(0)?.texto }}
            </p>
            <button 
                @click="$router.push('/desarrollo-formacion/1')"
                class="bg-btn-see-more hover:opacity-90 text-white font-bold py-2 px-4 my-4 mx-4 rounded">Leer
                más</button>

            <div class="flex flex-wrap  justify-center sm:justify-center gap-3 p-4 ">
                <div class="bg-slate-500/50 rounded-2xl hover:bg-btn-see-more hover:text-white hover:cursor-pointer " v-for="curso in data?.formacion.ambitos">
                    <img class="rounded-2xl w-[260px]" :src="`${data?.url}${curso.imagen}`" :alt="`${curso.imagen}`"
                        :key="`${curso.imagen}`">
                    <div class="py-4 max-w-[259px]">
                        <p class="text-center overflow-hidden text-lg font-bold">{{ curso.nombre }}</p>
                    </div>
                </div>
            </div>
        </div>


        <div class="w-full flex items-center justify-center">
            <video loop autoplay muted>
                <source :src="`${data?.url}${data?.info.at(0)?.PAG_VIDEO}`" type="video/mp4">
            </video>
        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css'

import SpinnerComponent from '../components/SpinnerComponent.vue';
import MainLayout from '../layouts/MainLayout.vue';
import CardProjectComponent from '../components/CardProjectComponent.vue';
import { useInicioQuery } from '../queries/inicio.query';

const modules = [Autoplay, Pagination, Navigation]

const { data, isLoading, isSuccess } = useInicioQuery()

</script>

<style scoped></style>