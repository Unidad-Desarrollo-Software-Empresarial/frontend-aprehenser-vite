<template>
    <div class="flex max-w-auto shadow-sm max-h-40 justify-between items-center">
        <div class="block sm:hidden">
            <button><img class="h-9 pl-2" src="../assets/svg/menu-icon.svg" alt="menu-icon"></button>
        </div>
        <div class=" p-5 my-auto">
            <img src="../assets/svg/aprehenser-logo.svg" alt="Logo Aprehenser">
        </div>
        <div class="hidden sm:block max-w-auto justify-between">
            <ButtonNavBarComponent>Quiénes Somos</ButtonNavBarComponent>
            <ButtonNavBarComponent>Qué hacemos</ButtonNavBarComponent>
            <ButtonNavBarComponent>Proyectos</ButtonNavBarComponent>
            <ButtonNavBarComponent>Noticias</ButtonNavBarComponent>
            <ButtonNavBarComponent>Publicaciones</ButtonNavBarComponent>
        </div>
        <div class="p-5 my-auto">
            <img src="../assets/svg/pucesi-ibarra-logo.svg" alt="Logo Pu">
        </div>
    </div>
</template>

<script setup lang="ts">
import ButtonNavBarComponent from './ButtonNavBarComponent.vue';
</script>

<style scoped></style>