<template>
    <div :class="[
        `sm:p-5 sm:m-2 sm:flex sm:justify-center sm:items-center`,
        isReverse ? `flex-row-reverse` : `flex-row`
    ]">
        <div class="max-w-[800px] min-w-[300px]">
            <p class="px-8 font-sans text-2xl md:text-2xl text-title-card font-bold ">{{ title }}</p>
            <div class="max-h-md p-8">
                <p class="block mt-1 text-lg leading-tight font-medium text-title-card hover:underline">{{
                    description }}</p>
                <button class="mt-4 bg-btn-see-more hover:opacity-90 text-white py-2 px-4 rounded">Ver más</button>
            </div>
            <div class="border-b-[5px] rounded border-divider-title max-w-[700px] mx-auto py-1 mb-4"></div>
        </div>
        <div class="max-w-[800px] min-w-[300px] my-auto">
            <div class="">
                <div class="p-2">
                    <Swiper :spaceBetween="0" :centeredSlides="false" :autoplay="{
                        delay: 2500,
                        disableOnInteraction: false,
                    }" :navigation="true" :pagination="{
                        clickable: true,
                        enabled: false
                    }" :modules="modules">

                        <SwiperSlide v-if="imageUrls?.length === 0">
                            <div class="animate-pulse bg-gray-200 h-[700px] w-[800px]"></div>
                        </SwiperSlide>
                        <SwiperSlide v-else v-for="url in imageUrls" class="">
                            <img class="object-cover rounded-[20px] mx-auto" :src="`${data?.url}${url}`" :alt="url">
                        </SwiperSlide>
                    </Swiper>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/swiper-bundle.css'
import { useInicioQuery } from '../queries/inicio.query';

const modules = [Autoplay, Pagination, Navigation]

const { data } = useInicioQuery()

defineProps({
    title: { type: String },
    description: { type: String },
    imageUrls: { type: Array<string> },
    isReverse: { type: Boolean, default: false }
})
</script>

<style scoped></style>