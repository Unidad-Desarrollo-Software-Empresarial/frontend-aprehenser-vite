<template>
    <div>
        <RouterLink :to="{ name: 'que-hacemos'}" exact-active-class="bg-labels-grey text-white" class="p-4 border-t border-b">Innovacion Educativa</RouterLink>
        <RouterLink :to="{ name: 'que-hacemos/formacion-docente'}" exact-active-class="bg-labels-grey text-white"  class="p-4 border-t border-b">Desarrollo y formacion docente continua</RouterLink>
        <RouterLink :to="{ name: 'que-hacemos/investigacion-educativa'}" exact-active-class="bg-labels-grey text-white" class="p-4 border-t border-b">Investigacion educativa</RouterLink>
        <RouterLink :to="{ name: 'que-hacemos/laboratorio-pucesi-lab'}" exact-active-class="bg-labels-grey text-white" class="p-4 border-t border-b">Laboratorio de Innovacion Educativa PUCESI-LAB</RouterLink>
        <RouterLink :to="{ name: 'que-hacemos/impactos'}" exact-active-class="bg-labels-grey text-white" class="p-4 border-t border-b">Visibilidad, difusion e impactos</RouterLink>
        <RouterLink :to="{ name: 'que-hacemos/mejora-continua'}" exact-active-class="bg-labels-grey text-white" class="p-4 border-t border-b">Evaluacion para la mejora continua</RouterLink>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>