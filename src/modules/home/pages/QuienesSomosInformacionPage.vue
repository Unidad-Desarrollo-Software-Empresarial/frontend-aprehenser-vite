<template>
    <MainLayout>
        <NavBarAprehenser />
        <div v-if="isLoading">
            <div class="flex items-center justify-center">
                <div class="w-6 h-6 border-t-2 border-blue-500 rounded-full animate-spin"></div>
            </div>
        </div>
        <div v-if="isSuccess" class="">
            <div class="flex flex-col justify-center items-center mx-auto pt-8 pb-4 px-12 md:px-24">
                <p class="font-sans text-2xl md:text-5xl font-bold">{{ data?.informacion_general.titulo }}</p>
                <div class="border-b border-divider-title h-5 w-[450px]"></div>
            </div>
            <div class="flex flex-col sm:flex-row gap-10 place-items-stretch px-12">
                <div class="text-justify" v-for="text in splitTextToColumns(data?.informacion_general.texto)">
                    <p>
                        {{ text }}
                    </p>
                </div>
            </div>
            <br />
        </div>
        <div>
            <div v-if="isLoadingInicio">
                <SpinnerComponent />
            </div>
            <img v-if="!isLoadingInicio" :src="`${dataInicio?.url}${data?.informacion_general.imagen}`"
                class="h-[795px] w-screen object-cover object-center overflow-x-scroll" :alt="data?.informacion_general.titulo">
        </div>
    </MainLayout>

</template>

<script setup lang="ts">
import MainLayout from '../layouts/MainLayout.vue';
import NavBarAprehenser from '../components/NavBarAprehenser.vue';
import { splitTextToColumns } from '../helpers/split-text-to-columns.helper';
import { useQuienesSomosQuery } from '../queries/quienes-somos.query';
import { useInicioQuery } from '../queries/inicio.query';
import SpinnerComponent from '../components/SpinnerComponent.vue';

const { data, isSuccess, isLoading } = useQuienesSomosQuery()
const { data: dataInicio, isLoading: isLoadingInicio } = useInicioQuery()


</script>

<style scoped></style>