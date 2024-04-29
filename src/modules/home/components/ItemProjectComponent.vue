<template>
    <div class="grid grid-cols-2 gap-10 place-items-stretch px-12 bg-yellow-800">
        <div class="text-justify">
            <p class="font-sans text-2xl md:text-2xl text-title-card font-bold ">{{ title }}</p>
            <div class="max-h-md p-8">
                <a href="#" class="block mt-1 text-lg leading-tight font-medium text-title-card hover:underline">{{
                    description }}</a>
                <button class="mt-4 bg-btn-see-more hover:opacity-90 text-white py-2 px-4 rounded">Ver más</button>
            </div>
        </div>
        <div class="bg-white rounded-xl shadow-md overflow-hidden max-w-sm m-3">
            <div class="flex-col">
                <div class="md:flex-shrink-0">
                    <img class="h-52 w-full object-cover " :src="imageUrl" alt="Background img">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true }
})
</script>

<style scoped></style>