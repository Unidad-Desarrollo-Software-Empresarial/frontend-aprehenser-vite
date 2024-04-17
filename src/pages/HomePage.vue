<template>
    <MainLayout>
        <div class="h-686 bg-slate-500 w-full h-full relative">
            <div class="h-200 sm:h-auto">
                <img class="relative" src="../assets/img/BackgroundMainImg.png" alt="Background img">
            </div>
            <div class="absolute inset-0 bg-black opacity-40"></div>
            <div class="absolute inset-0 flex items-center justify-center px-8 sm:px-16">
                <div class="flex flex-row md:mx-auto md:items-center">
                    <img class="h-24 hidden sm:block sm:h-36 sm:pb-4 md:h-auto" src="../assets/svg/aprehenser-isotipo.svg" alt="logo">
                    <img class="mx-10 hidden sm:block" src="../assets/svg/aprehenser-isotipo-barra.svg" alt="logo-bar">
                    <div class="w-max-1019">
                        <p class="text-white tracking-wider text-xs md:text-2xl text-wrap">
                            Aprehenser desarrolla y responde a la planificación estratégica anual, cuya misión estará siempre direccionada en el mejoramiento de la calidad educativa, mediante estrategias de innovación, acompañamiento, participación y capacitación docente.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </MainLayout>

</template>

<script setup lang="ts">
import MainLayout from '../layouts/MainLayout.vue';
</script>

<style scoped></style>