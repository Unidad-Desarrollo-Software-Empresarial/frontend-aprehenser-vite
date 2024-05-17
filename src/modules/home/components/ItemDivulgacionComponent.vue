<template>
    <div class="flex flex-col max-w-[410px] items-center border rounded-lg m-4 p-4">
        <p class="py-4">{{ title }}</p>
        <img :src="image" :alt="image">
        <p class="py-4 px-6 text-justify">{{ description }}</p>
        <img class="max-w-[60px]" src="@/assets/svg/document-divulgacion.svg" alt="icon-assets">
    </div>
</template>

<script setup lang="ts">
defineProps({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true }
})
</script>

<style scoped></style>