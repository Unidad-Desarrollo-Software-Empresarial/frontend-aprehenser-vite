<template>
    <div class="flex max-w-auto shadow-sm max-h-40 justify-between items-center">
        <div class="block md:hidden">
            <button><img class="h-9 pl-2" src="@/assets/svg/menu-icon.svg" alt="menu-icon"></button>
        </div>
        <RouterLink :to="{ name: 'home'}">
            <div class=" p-5 my-auto">
            <img src="@/assets/svg/aprehenser-logo.svg" alt="Logo Aprehenser">
        </div>
        </RouterLink>
        <div class="hidden md:block max-w-auto justify-between flex-row flex-wrap">
            <RouterLink 
                active-class="font-bold text-title-card"
                class="hover:bg-slate-50 hover:rounded-xl h-14 w-24 my-auto mx-2 focus:outline-none whitespace-nowrap"
                :to="{ name: 'quienes-somos' }"
            >
                Quiénes Somos
            </RouterLink>
            <RouterLink 
                active-class="font-bold text-title-card"
                class="hover:bg-slate-50 hover:rounded-xl h-14 w-24 my-auto mx-2 focus:outline-none whitespace-nowrap"
                :to="{ name: 'que-hacemos' }"
            >
                Qué hacemos
            </RouterLink>
            <RouterLink 
                active-class="font-bold text-title-card"
                class="hover:bg-slate-50 hover:rounded-xl h-14 w-24 my-auto mx-2 focus:outline-none"
                :to="{ name: 'proyectos'}"
            >
                Proyectos
            </RouterLink>
            <RouterLink 
                active-class="font-bold text-title-card"
                class="hover:bg-slate-50 hover:rounded-xl h-14 w-24 my-auto mx-2 focus:outline-none"
                :to="{ name: 'noticias'}"
            >
                Noticias
            </RouterLink>
            <RouterLink 
                active-class="font-bold text-title-card"
                class="hover:bg-slate-50 hover:rounded-xl h-14 w-24 my-auto mx-2 focus:outline-none"
                :to="{ name: 'publicaciones/revistas'}"
            >
                Publicaciones
            </RouterLink>
        </div>
        <div class="p-5 my-auto">
            <img src="@/assets/svg/pucesi-ibarra-logo.svg" alt="Logo Pu">
        </div>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
// import { HomeRoutes } from '../routes/HomeRoutes';

</script>

<style scoped></style>