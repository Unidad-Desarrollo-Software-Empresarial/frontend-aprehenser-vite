<template>
    <div class="px-5 py-4">

        <div class="flex flex-col-reverse sm:flex-row gap-5">
            <div>
                <img :src="urlMainImg" :alt="urlMainImg">
            </div>
            <div class="relative">
                <div class="w-full">
                    <img :src="urlSubImg" :alt="urlMainImg">
                </div>
                <div class="absolute bottom-0 bg-[#141D28] bg-opacity-80 w-full text-center items-center">
                    <p class="text-white font-poppins font-bold text-[16px] sm:text-[20px]">{{ title }}</p>
                </div>
            </div>
        </div>
        <div class="py-5">
            <p class="font-poppins text-[18px]">{{ content }}</p>
        </div>
        <div class="flex flex-row-reverse">
            {{ author }}
        </div>
    </div>
    <div class="bg-[#11BFDD] h-[23px] w-full"></div>
</template>

<script setup lang="ts">

defineProps({
    urlMainImg: { type: String, required: true },
    urlSubImg: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true }
})
</script>

<style scoped></style>