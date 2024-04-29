<template>
    <MainLayout>
        <p class="text-[32px] md:text-[64px] text-[#37C3DD] font-bold text-center pt-[70px]">Lineas de investigacion</p>

        <div class="flex items-center justify-center ">
            <p class="text-justify max-w-[1000px] text-[20px]">Las líneas de acción del Sistema de Innovación Educativa "Aprehenser" desempeñan un papel esencial en la transformación y mejora continua de la educación. No solo impulsan la calidad de la enseñanza, sino que también fomentan la adaptación a los continuos cambios de la sociedad contemporánea.</p>
        </div>

        <div class="border-b-[5px] rounded border-divider-title max-w-[1200px] mx-auto py-[36px]"></div>

        <div class="flex flex-col md:flex-row justify-around ">
            <SideBarComponent class="flex flex-col px-4 py-[75px]" />
            <slot></slot>
        </div>

    </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '../layouts/MainLayout.vue';
import SideBarComponent from '../components/SideBarComponent.vue';
</script>

<style scoped>

</style>