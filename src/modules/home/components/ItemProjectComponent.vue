<template>
    <div class="flex">
        <div class="max-w-[640px] bg-amber-400">
            <p class="font-sans text-2xl md:text-2xl text-title-card font-bold ">{{ title }}</p>
            <div class="max-h-md p-8">
                <a href="#" class="block mt-1 text-lg leading-tight font-medium text-title-card hover:underline">{{
                    description }}</a>
                <button class="mt-4 bg-btn-see-more hover:opacity-90 text-white py-2 px-4 rounded">Ver más</button>
            </div>
        </div>
        <div class="max-w-[710px] my-auto">
            <div class="">
                <div class="flex justify-end gap-2 my-2">
                    <div class="rounded-full bg-blue-300 w-24 h-8 flex justify-center items-center">Boton 1</div>
                    <div class="rounded-full bg-blue-300 w-24 h-8 flex justify-center items-center">Boton 2</div>
                </div>
                <div class="p-2">
                    <img class="object-cover rounded-[20px]" :src="imageUrl" alt="Background img">
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