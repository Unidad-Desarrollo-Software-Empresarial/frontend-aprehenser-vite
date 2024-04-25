<template>
    <MainLayout>
        <NavBarAprehenser />
        <div class="flex flex-col justify-center items-center mx-auto pt-8 pb-4 px-12 md:px-24">
            <p class="font-sans text-2xl md:text-5xl font-bold">Recursos Gráficos</p>
            <div class="border-b border-divider-title h-5 w-[450px]"></div>
        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '../layouts/MainLayout.vue';
import NavBarAprehenser from '../components/NavBarAprehenser.vue';
</script>

<style scoped></style>