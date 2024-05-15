<template>
    <MainLayout>
        <NavBarAprehenser />
        <div v-if="isLoading">
            <SpinnerComponent />
        </div>
        <div v-if="isSuccess">
            <div class="flex flex-col justify-center items-center mx-auto pt-8 pb-4 px-12 md:px-24">
                <p class="font-sans text-2xl md:text-5xl font-bold">{{ data?.opiniones.nombre }}</p>
                <div class="border-b border-divider-title h-5 w-[450px]"></div>
            </div>
            <div class="flex flex-col lg:flex-row items-center justify-center gap-4 p-4 ">
                <div class="w-[645px] flex flex-col items-center font-bold text-[24px]">
                    <img :src="`${data?.url}${data?.opiniones.opinion.imagen}`" alt="Prorector">
                    <p class="pt-4">{{ data?.opiniones.opinion.nombre }}</p>
                    <p class="pb-4">{{ data?.opiniones.opinion.cargo }}</p>
                </div>
                <div class="max-w-[645px]">
                    <p class="text-justify text-[20px]">
                        {{ data?.opiniones.opinion.texto }}
                    </p>
                </div>
            </div>
        </div>

    </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '../layouts/MainLayout.vue';
import NavBarAprehenser from '../components/NavBarAprehenser.vue';
import { useQuienesSomosQuery } from '../queries/quienes-somos.query';
import SpinnerComponent from '../components/SpinnerComponent.vue';

const { data, isSuccess, isLoading } = useQuienesSomosQuery()

</script>

<style scoped></style>