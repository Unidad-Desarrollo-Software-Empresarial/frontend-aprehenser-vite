<template>
    <div class="bg-labels-grey flex h-[134px] items-center justify-center gap-8">
        <RouterLink exactActiveClass="mt-4 w-[100px] bg-btn-see-more hover:opacity-90 text-white py-2 px-4 rounded"
            class="mt-4 w-[200px] border border-btn-see-more hover:opacity-90 text-white py-2 px-4 rounded"
            :to="{ name: 'publicaciones' }">Revistas</RouterLink>
        <RouterLink exactActiveClass="mt-4 w-[100px] bg-btn-see-more hover:opacity-90 text-white py-2 px-4 rounded"
            class="mt-4 w-[200px] border border-btn-see-more hover:opacity-90 text-white py-2 px-4 rounded"
            :to="{ name: 'publicaciones/divulgaciones' }">Divulgaciones</RouterLink>
        <RouterLink exactActiveClass="mt-4 w-[100px] bg-btn-see-more hover:opacity-90 text-white py-2 px-4 rounded"
            class="mt-4 w-[250px] border border-btn-see-more hover:opacity-90 text-white py-2 px-4 rounded"
            :to="{ name: 'publicaciones/resultados-innovadores' }">Resultados Innovadores</RouterLink>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>