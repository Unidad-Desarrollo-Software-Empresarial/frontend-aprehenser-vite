<template>
    <div class="px-5 py-4">

        <div class="flex items-center justify-center">
            <div class="flex flex-col-reverse sm:flex-row gap-5 max-w-[1500px]">
                <div>
                    <div v-if="!urlMainImg">
                        <SpinnerComponent />
                    </div>
                    <img v-else :src="`${data?.url}${urlMainImg}`" :alt="urlMainImg">
                </div>
                <div class="relative">
                    <div class="w-full">
                        <div v-if="!urlSubImg">
                            <SpinnerComponent />
                        </div>
                        <img v-else :src="`${data?.url}${urlSubImg}`" :alt="urlMainImg">
                    </div>
                    <div class="absolute bottom-0 bg-[#141D28] bg-opacity-80 w-full text-center items-center">
                        <p class="text-white font-poppins font-bold text-[16px] sm:text-[20px]">{{ title }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="max-w-[1500px] mx-auto">
            <div class="py-5">
                <p class="font-poppins text-[18px] text-justify">{{ content }}</p>
                <div class="flex flex-row-reverse">
                    {{ author }}
                </div>
                <div class="bg-[#11BFDD] h-[23px] w-full"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useInicioQuery } from '../queries/inicio.query';
import SpinnerComponent from './SpinnerComponent.vue';

const { data } = useInicioQuery()

defineProps({
    urlMainImg: { type: String },
    urlSubImg: { type: String },
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true }
})
</script>

<style scoped></style>