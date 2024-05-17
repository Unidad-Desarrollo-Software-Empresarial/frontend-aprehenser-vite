<template>
    <div class="px-5 py-4">
        <div class="flex items-center justify-center max-w-[1200px] mx-auto">
            <div class="flex flex-col-reverse md:flex-row gap-5 max-w-[1500px]">
                <div class="max-w-[700px] md:w-[700px] pl-2">
                    <div v-if="urlImages?.length === 0">
                        <SpinnerComponent />
                    </div>
                    <img v-else class="object-cover w-[700px]" :src="`${data?.url}${urlImages?.at(0)}`" :alt="urlImages?.at(0)">
                </div>
                <div class="w-[500px] pr-2">
                    <div class="">
                        <div v-if="urlImages?.length === 0">
                            <SpinnerComponent />
                        </div>
                        <img v-else class="object-contain w-full" :src="`${data?.url}${urlImages?.at(1)}`" :alt="urlImages?.at(0)">
                    </div>
                    <div class="bg-[#141D28] bg-opacity-80 w-full text-center items-center">
                        <p class="text-white font-poppins font-bold text-[16px] sm:text-[20px]">{{ title }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="max-w-[1200px] mx-auto">
            <div class="py-4">
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
    // urlMainImg: { type: String },
    // urlSubImg: { type: String },
    urlImages: { type: Array<string>},
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true }
})
</script>

<style scoped></style>