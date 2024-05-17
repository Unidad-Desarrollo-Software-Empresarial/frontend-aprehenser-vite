<!-- <template>
    <div class="px-5 py-4">

        <div class="max-w-[1500px] mx-auto">
            <div class="">

                <div class="">
                    <div class="">
                        <div v-if="isLoading">
                            <SpinnerComponent />
                        </div>
                        <div>
                            <div class="p-2">
                                <Swiper :spaceBetween="0" :centeredSlides="false" :autoplay="{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }" :navigation="true" :pagination="{
                                    clickable: true,
                                    enabled: false
                                }" :modules="modules">

                                    <SwiperSlide v-if="images?.length === 0">
                                        <div class="animate-pulse bg-gray-200 h-[700px] w-[800px]"></div>
                                    </SwiperSlide>
                                    <SwiperSlide v-else v-for="url in images" class="">
                                        <img class="object-cover rounded-[20px] mx-auto align-middle items-stretch" :src="`${data?.url}${url}`"
                                            :alt="url">
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div class="bg-[#141D28] bg-opacity-80 w-full text-center items-center">
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


import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/swiper-bundle.css'
import { useInicioQuery } from '../queries/inicio.query';
import SpinnerComponent from './SpinnerComponent.vue';
const modules = [Autoplay, Pagination, Navigation]
const { data, isLoading } = useInicioQuery()

defineProps({
    images: { type: Array<string> },
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true }
})
</script>

<style scoped></style> -->