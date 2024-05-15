<template>
    <MainLayout>
        <div v-if="isLoading">
            <SpinnerComponent />
        </div>
        <div v-if="isSuccess" class="px-4">
            <p class="text-[32px] md:text-[64px] text-[#37C3DD] font-bold text-center pt-[70px]">{{ data?.titulo.titulo
                }}
            </p>

            <div class="flex items-center justify-center ">
                <p class="text-justify max-w-[1000px] text-[20px]">{{ data?.titulo.texto }}</p>
            </div>

            <div class="border-b-[5px] rounded border-divider-title max-w-[1200px] mx-auto py-[36px]"></div>

            <div class="flex flex-col md:flex-row justify-around ">
                <div class="flex flex-col">
                    <button v-for="item in data?.trabajos"
                        :class="[`p-4 border-t border-b flex`, { 'bg-[#A5A5A5] text-white': showedOption === item }]"
                        @click="selectOption(item)">{{ item.titulo }}</button>
                </div>
                <div class="flex flex-col items-center">
                    <p class="p-4 text-[32px] text-[#37C3DD] font-bold">{{ showedOption.titulo }}</p>
                    <img :src="`${data?.url}${showedOption.imagen}`" :alt="showedOption.imagen" class="max-w-[846px]">
                    <p class="max-w-[846px] py-[42px]">{{ showedOption.texto }}</p>
                </div>
            </div>
        </div>
        <div v-if="isError">{{ error }}</div>
    </MainLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import MainLayout from '../layouts/MainLayout.vue';
import { useQueHacemosQuery } from '../queries/que-hacemos.query';
import SpinnerComponent from '../components/SpinnerComponent.vue';
import { Trabajo } from '../interfaces/que-hacemos.interface';

const { data, isLoading, isSuccess, isError, error } = useQueHacemosQuery()

const showedOption = ref(data.value?.trabajos[0]!)

const selectOption = (option: Trabajo) => {
    showedOption.value = option
}
</script>

<style scoped></style>