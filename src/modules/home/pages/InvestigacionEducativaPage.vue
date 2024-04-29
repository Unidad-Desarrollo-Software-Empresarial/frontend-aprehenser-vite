<template>
    <MainLayout>
        <p>Lineas de investigacion</p>

        <p>Las líneas de acción del Sistema de Innovación Educativa "Aprehenser" desempeñan un papel esencial en la transformación y mejora continua de la educación. No solo impulsan la calidad de la enseñanza, sino que también fomentan la adaptación a los continuos cambios de la sociedad contemporánea.</p>

        <div class="border-b border-divider-title h-5 w-[450px]"></div>
        

        <div class="flex justify-between">
            <SideBarComponent />
            <div>Investigacion Educativa</div>
        </div>

    </MainLayout>
</template>

<script setup lang="ts">

import MainLayout from '../layouts/MainLayout.vue';
import SideBarComponent from '../components/SideBarComponent.vue';
</script>

<style scoped>

</style>