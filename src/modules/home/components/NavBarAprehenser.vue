<template>
    <div class="md:h-32 p-8 mx-auto bg-labels-grey flex flex-col sm:flex-row md:justify-between md:items-center">
        <div class="w-full flex items-center justify-center h-56 gap-12 content-center px-10">
            <!-- <button class=""></button> -->
            <RouterLink exactActiveClass="mt-4 w-[200px] bg-btn-see-more hover:opacity-90 text-white py-2 px-4 rounded"
                class="mt-4 w-[200px] border border-btn-see-more hover:opacity-90 text-white py-2 px-4 rounded"
                :to="{ name: 'quienes-somos'}">Información General</RouterLink>
            <RouterLink exactActiveClass="mt-4 w-[100px] bg-btn-see-more hover:opacity-90 text-white py-2 px-4 rounded"
                class="mt-4 w-[100px] border border-btn-see-more hover:opacity-90 text-white py-2 px-4 rounded"
                :to="{ name: 'quienes-somos/equipo'}">Equipo</RouterLink>
            <button
                class="mt-4 w-[150px] border border-btn-see-more hover:opacity-90 text-white py-2 px-4 rounded">Opiniones</button>
            <button
                class="mt-4 w-[180px] border border-btn-see-more hover:opacity-90 text-white py-2 px-4 rounded">Recursos
                Gráficos</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
// import { HomeRoutes } from '../routes/HomeRoutes';
</script>

<style scoped></style>