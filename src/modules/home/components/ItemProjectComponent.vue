<template>
    <div class="flex">
        <div class="max-w-[500px]">
            <p class="px-8 font-sans text-2xl md:text-2xl text-title-card font-bold ">{{ title }}</p>
            <div class="max-h-md p-8">
                <p href="" class="block mt-1 text-lg leading-tight font-medium text-title-card hover:underline">{{
                    description }}</p>
                <button class="mt-4 bg-btn-see-more hover:opacity-90 text-white py-2 px-4 rounded">Ver más</button>
            </div>
        </div>
        <div class="max-w-[710px] my-auto">
            <div class="">
                <!-- <div class="flex justify-end gap-2 my-2">
                    <div class="rounded-full bg-[#10B0CB] w-[57px] h-[33px] flex justify-center items-center hover:cursor-pointer hover:ring-1"
                        >

                        <ArrowLeftIcon class="text-white h-5 font-bold" />
                    </div>
                    <div class="rounded-full bg-[#10B0CB] w-[57px] h-[33px] flex justify-center items-center hover:cursor-pointer hover:ring-1"
                        >
                        <ArrowRightIcon class="text-white h-5 font-bold" />
                    </div>
                </div> -->
                <div class="p-2">
                    <!-- <img class="object-cover rounded-[20px]" :src="imageUrl" alt="Background img"> -->
                    <Swiper :spaceBetween="0" :centeredSlides="true" :autoplay="{
                        delay: 2500,
                        disableOnInteraction: false,
                    }" :navigation="true" :pagination="{
                            clickable: true
                        }" :modules="modules">
                        <SwiperSlide>
                            <img class="object-cover rounded-[20px]" :src="imageUrl">
                        </SwiperSlide>
                        <SwiperSlide>
                            <img class="object-cover rounded-[20px]" :src="imageUrl">
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

// import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/vue/24/outline'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/swiper-bundle.css'


// const slideNext = () => {
//     // $refs.swiperRef.swiper.slideNext()
//     console.log("next")
// }

// const slidePrev = () => {
//     // $refs.swiperRef.swiper.slidePrev()
//     console.log("prev")
// }


const modules = [Autoplay, Pagination, Navigation]

defineProps({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true }
})
</script>

<style scoped></style>