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
                <SideBarComponent class="flex flex-col px-4 py-[75px]" />
                <slot></slot>
            </div>
        </div>

    </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '../layouts/MainLayout.vue';
import SideBarComponent from '../components/SideBarComponent.vue';
import { useQueHacemosQuery } from '../queries/que-hacemos.query';
import SpinnerComponent from '../components/SpinnerComponent.vue';

const { data, isLoading, isSuccess } = useQueHacemosQuery()
</script>

<style scoped></style>