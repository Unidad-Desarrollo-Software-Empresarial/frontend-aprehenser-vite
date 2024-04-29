<template>
    <MainLayout>
        <div class="">
            <div class="flex flex-col justify-center items-center mx-auto pt-8 pb-4 px-12 md:px-24">
                <p class="font-sans text-2xl md:text-5xl font-bold">Proyectos de Innovación</p>
                <p class="font-sans text-2xl md:text-5xl font-bold">V convocatoria</p>
                <div class="border-b border-divider-title h-5 w-[450px]"></div>
            </div>
        </div>
        <div class="flex flex-wrap justify-center mx-auto">
            <BlockProjectRight />
        </div>
        <div class="flex flex-wrap justify-center mx-auto">
            <BlockProjectLeft />
        </div>
    </MainLayout>
</template>

<script setup lang="ts">
    import MainLayout from '../layouts/MainLayout.vue';
    import BlockProjectRight from '../components/BlockProjectRight.vue';
    import BlockProjectLeft from '../components/BlockProjectLeft.vue';
</script>

<style scoped></style>