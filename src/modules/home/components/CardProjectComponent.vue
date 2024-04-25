<template>
    <div class="bg-white rounded-xl shadow-md overflow-hidden max-w-sm m-3">
        <div class="flex-col">
            <div class="md:flex-shrink-0">
                <img class="h-52 w-full object-cover " src="@/assets/img/BackgroundMainImg.png"
                    alt="Background img">
            </div>
            <div class="max-h-md p-8">
                <a href="#" class="block mt-1 text-lg leading-tight font-medium text-title-card hover:underline">{{ title }}</a>
                <button class="mt-4 bg-btn-see-more hover:opacity-90 text-white font-bold py-2 px-4 rounded">Ver más</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    title: {type: String, required: true},
})

</script>

<style scoped></style>