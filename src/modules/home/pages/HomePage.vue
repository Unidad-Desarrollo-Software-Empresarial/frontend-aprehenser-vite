<template>
    <MainLayout>
        <div class="h-686 relative h-full w-full bg-slate-500">
            <div class="h-200 z-0 sm:h-auto">
                <Swiper :spaceBetween="0" :centeredSlides="true" :autoplay="{
                    delay: 2500,
                    disableOnInteraction: false,
                }" :navigation="false" :modules="modules">
                    <SwiperSlide v-for="slide in data?.banner">
                        <img class="w-full" :src="`${data?.url}${slide.PWC_IMAGEN}`" :alt="slide.PWC_IMAGEN" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div class="absolute inset-0 z-10 bg-black opacity-40"></div>
            <div class="absolute inset-0 z-20 flex items-center justify-center px-8 sm:px-16">
                <div class="flex flex-row md:mx-auto md:items-center">
                    <img class="hidden h-24 sm:block sm:h-36 sm:pb-4 md:h-auto"
                        :src="`${data?.url}${data?.info.at(0)?.PAG_ICONO_1}`" alt="logo" />
                    <div class="w-max-1019">
                        <p class="max-w-[1024px] text-wrap text-xs tracking-wider text-white md:text-2xl">
                            {{ data?.info.at(0)?.PAG_TEXTO }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="isLoading" class="z-60 flex h-screen w-screen items-center justify-center bg-labels-grey/10">
            <SpinnerComponent />
        </div>
        <div v-if="isSuccess"
            class="mx-auto flex flex-col bg-labels-grey p-8 sm:flex-row md:h-32 md:items-center md:justify-between">
            <p
                class="whitespace-nowrap p-8 text-xl font-semibold text-white hover:cursor-default hover:rounded-lg hover:border hover:opacity-80 sm:text-xl md:text-2xl">
                {{ data?.resumen.proyectos }}+ Proyectos
            </p>
            <p
                class="whitespace-nowrap p-8 text-xl font-semibold text-white hover:cursor-default hover:rounded-lg hover:border hover:opacity-80 sm:text-xl md:text-2xl">
                {{ data?.resumen.profesores }}+ Docentes
            </p>
            <p
                class="whitespace-nowrap p-8 text-xl font-semibold text-white hover:cursor-default hover:rounded-lg hover:border hover:opacity-80 sm:text-xl md:text-2xl">
                {{ data?.resumen.estudiantes }}+ Estudiantes
            </p>
            <p
                class="whitespace-nowrap p-8 text-xl font-semibold text-white hover:cursor-default hover:rounded-lg hover:border hover:opacity-80 sm:text-xl md:text-2xl">
                {{ data?.resumen.publicaciones }}+ Publicaciones
            </p>
        </div>
        <div class="mx-auto flex flex-col items-center justify-center px-12 pb-4 pt-8 md:px-24">
            <p class="font-open-sans text-2xl font-bold text-labels-grey md:text-5xl">
                Proyectos en marcha
            </p>
            <div class="h-5 w-full border-b border-divider-title"></div>
        </div>
        <div class="mx-auto flex max-w-[1500px] flex-wrap justify-center">
            <CardProjectComponent v-for="project in data?.proyectos_en_marcha" :title="project.PRO_NOMBRE"
                :image="`${data?.url}${project.PRO_IMAGEN}`" :idProyecto="project.PRO_ID" />
        </div>

        <div class="mx-auto ">
            <div class="mx-auto flex flex-col items-center justify-center px-12 pb-4 pt-8 md:px-24">
                <p class="font-open-sans text-2xl font-bold text-labels-grey md:text-5xl">
                    {{ data?.formacion.contenido.at(0)?.titulo }}
                </p>
                <div class="h-5 w-full border-b border-divider-title"></div>
            </div>
            <!-- Modificar -->
            <div class="flex flex-col lg:flex-row-reverse items-center justify-center">
                <div class="max-w-[400px]">
                    <p class="px-4 text-xl text-justify">
                        {{ data?.formacion.contenido.at(0)?.texto }}
                    </p>
                    <button @click="$router.push('/desarrollo-formacion/1')"
                        class="mx-4 my-4 rounded bg-btn-see-more px-4 py-2 font-bold text-white hover:opacity-90">
                        Leer más
                    </button>
                </div>

                <div class="flex flex-wrap gap-3.5 p-4  rounded-2xl mx-4 items-center justify-center max-w-[650px]">
                    <div class="rounded-2xl bg-slate-300/30 hover:cursor-pointer hover:bg-btn-see-more hover:text-white"
                        v-for="curso in data?.formacion.ambitos">
                        <img class="rounded-2xl object-cover object-top w-[300px] h-[175px]" :src="`${data?.url}${curso.imagen}`" :alt="`${curso.imagen}`"
                            :key="`${curso.imagen}`" />
                        <div class="max-w-[259px] py-4">
                            <p class="overflow-hidden text-center text-lg font-bold">
                                {{ curso.nombre }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="flex w-full items-center justify-center">
            <video loop autoplay muted>
                <source :src="`${data?.url}${data?.info.at(0)?.PAG_VIDEO}`" type="video/mp4" />
            </video>
        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

import SpinnerComponent from "../components/SpinnerComponent.vue";
import MainLayout from "../layouts/MainLayout.vue";
import CardProjectComponent from "../components/CardProjectComponent.vue";
import { useInicioQuery } from "../queries/inicio.query";

const modules = [Autoplay, Pagination, Navigation];

const { data, isLoading, isSuccess } = useInicioQuery();
</script>

<style scoped></style>
