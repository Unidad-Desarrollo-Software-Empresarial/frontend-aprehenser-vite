<template>
    <div class="px-5 py-4">
        <div class="flex items-center justify-center max-w-[1200px] mx-auto">
            <div :class="[
                `flex flex-col-reverse gap-4 max-w-[1200px] md:h-[400px] justify-center items-end`,
                isReverse ? `md:flex-row` : `md:flex-row-reverse`
            ]">
                <div class="max-h-[700px] flex flex-col justify-center items-center ">
                    <div v-if="urlImages?.length === 0">
                        <SpinnerComponent />
                    </div>
                    <img v-else class="object-contain h-[400px]" :src="`${data?.url}${urlImages?.at(0)}`"
                        :alt="urlImages?.at(0)">
                </div>
                <div class="md:w-[500px] md:object-contain">
                    <div class="flex flex-col justify-center items-center">
                        <div v-if="urlImages?.length === 0">
                            <SpinnerComponent />
                        </div>
                        <img v-else class="md:w-full md:object-cover" :src="`${data?.url}${urlImages?.at(1)}`"
                            :alt="urlImages?.at(0)">
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
    urlImages: { type: Array<string> },
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    isReverse: { type: Boolean, default: false }
})
</script>

<style scoped></style>