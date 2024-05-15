<template>
    <MainLayout>
        <div v-if="isLoading">
            <SpinnerComponent />
        </div>
        <div v-if="isSuccess" class="">
            <NavBarAprehenser />


            <EquipoSeccionComponent :title="data?.equipo.nombre || 'Sin nombre'" :team="data?.equipo.Equipo || []" />
            <EquipoSeccionComponent title="Colaboradores"
                :team="data?.equipo.Colaboradores || []" />
            <!-- Tercera Sección -->

            <img :src="`${data?.url}${data?.equipo.imagen.at(0)?.imagen}`" class="min-h-[795px] w-full object-cover object-center"
                :alt="`${data?.url}${data?.equipo.imagen}`">
        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '../layouts/MainLayout.vue';
import NavBarAprehenser from '../components/NavBarAprehenser.vue';

import EquipoSeccionComponent from '../components/EquipoSeccionComponent.vue';
import { useQuienesSomosQuery } from '../queries/quienes-somos.query';
import SpinnerComponent from '../components/SpinnerComponent.vue';


const { data, isLoading, isSuccess } = useQuienesSomosQuery()
</script>

<style scoped></style>