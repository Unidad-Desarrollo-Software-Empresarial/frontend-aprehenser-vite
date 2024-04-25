<template>
    <MainLayout>
        <div class="">
            <NavBarAprehenser />
            <div class="flex flex-col justify-center items-center mx-auto pt-8 pb-4 px-12 md:px-24">
                <p class="font-sans text-2xl md:text-5xl font-bold">Equipo</p>
                <div class="border-b border-divider-title h-5 w-[450px]"></div>
            </div>
            <!-- Primera Sección -->
            <div class="grid grid-cols-3 gap-10 place-items-stretch px-12">
                <div class="text-center">
                    <img src="../../../assets/svg/directora-academica.svg" class="h-56 w-full h-full relative" alt="directora">
                </div>
                <div class="text-center">
                    <img src="../../../assets/svg/coordinadora-innovacion.svg" class="h-56 w-full h-full relative" alt="coordinadora">
                </div>
                <div class="text-center">
                    <img src="../../../assets/svg/responsable-innovacion.svg" class="h-56 w-full h-full relative" alt="responsable">
                </div>
            </div>
            <!-- <div class="flex flex-wrap justify-center mx-auto px-12"> -->
            <div class="grid grid-cols-3 gap-10 place-items-stretch px-12">
                <div class="flex flex-wrap justify-center mx-auto gap-10 place-items-stretch px-12">
                    <p class="font-sans text-2xl md:text-4xl font-bold">Augusta Yadira Cueva Aguila</p>
                </div>
                <div class="text-center">
                    <p class="font-sans text-2xl md:text-4xl font-bold">Ana Magali Culqui Medina</p>
                    
                </div>
                <div class="text-center">
                    <p class="font-sans text-2xl md:text-4xl font-bold">Verónica Maribel Chávez Fuentes</p>
                    
                </div>
            </div>
            <div class="grid grid-cols-3 gap-10 place-items-stretch px-12">
                <div class="flex flex-wrap justify-center mx-auto text-center">
                    <p class="font-sans text-2xl md:text-2xl font-bold text-footer-title-text">DIRECTORA ACADÉMICA</p>
                </div>
                <div class="flex flex-wrap justify-center mx-auto text-center">
                    <p class="font-sans text-2xl md:text-2xl font-bold text-footer-title-text">COORDINADORA DEL SISTEMA DE INNOVACIÓN EDUCATIVA</p>
                </div>
                <div class="flex flex-wrap justify-center mx-auto text-center">
                    <p class="font-sans text-2xl md:text-2xl font-bold text-footer-title-text">RESPONSABLE DE INNOVACIÓN EDUCATIVA</p>
                </div>
            </div>
            <br />

            <!-- Segunda Sección -->
            <div class="grid grid-cols-3 gap-10 place-items-stretch px-12">
                <div class="text-center">
                    <img src="../../../assets/svg/responsable-capacitacion.svg" class="h-56 w-full h-full relative" alt="directora">
                </div>
                <div class="text-center">
                    <img src="../../../assets/svg/responsable-evaluacion.svg" class="h-56 w-full h-full relative" alt="coordinadora">
                </div>
                <div class="text-center">
                    <img src="../../../assets/svg/responsable-tecnologias.svg" class="h-56 w-full h-full relative" alt="responsable">
                </div>
            </div>
            <!-- <div class="flex flex-wrap justify-center mx-auto px-12"> -->
            <div class="grid grid-cols-3 gap-10 place-items-stretch px-12">
                <div class="flex flex-wrap justify-center mx-auto gap-10 place-items-stretch px-12">
                    <p class="font-sans text-2xl md:text-4xl font-bold">Carmen Rocio Carchi Taez</p>
                </div>
                <div class="text-center">
                    <p class="font-sans text-2xl md:text-4xl font-bold">Pablo Alejandro Dávila Oña</p>
                    
                </div>
                <div class="text-center">
                    <p class="font-sans text-2xl md:text-4xl font-bold">Patricio Ricardo Ruiz Quiranza</p>
                    
                </div>
            </div>
            <div class="grid grid-cols-3 gap-10 place-items-stretch px-12">
                <div class="flex flex-wrap justify-center mx-auto text-center">
                    <p class="font-sans text-2xl md:text-2xl font-bold text-footer-title-text">RESPONSABLE DE CAPACITACIÓN DOCENTE</p>
                </div>
                <div class="flex flex-wrap justify-center mx-auto text-center">
                    <p class="font-sans text-2xl md:text-2xl font-bold text-footer-title-text">RESPONSABLE DE EVALUACIÓN DOCENTE</p>
                </div>
                <div class="flex flex-wrap justify-center mx-auto text-center">
                    <p class="font-sans text-2xl md:text-2xl font-bold text-footer-title-text">RESPONSABLE DE TECNOLOGÍAS EDUCATIVAS Y AULAS VIRTUALES</p>
                </div>
            </div>
            <br />
            <!-- Tercera Sección -->
            <div class="grid grid-cols-3 gap-10 place-items-stretch px-12">
                <div class="text-center">
                    
                </div>
                <div class="text-center">
                    <img src="../../../assets/svg/programador.svg" class="h-56 w-full h-full relative" alt="coordinadora">
                </div>
                <div class="text-center">
                    
                </div>
            </div>
            <!-- <div class="flex flex-wrap justify-center mx-auto px-12"> -->
            <div class="grid grid-cols-3 gap-10 place-items-stretch px-12">
                <div class="flex flex-wrap justify-center mx-auto gap-10 place-items-stretch px-12">
                </div>
                <div class="text-center">
                    <p class="font-sans text-2xl md:text-4xl font-bold">José Luis Ibarra Estévez</p>
                    
                </div>
                <div class="text-center">
                   
                </div>
            </div>
            <div class="grid grid-cols-3 gap-10 place-items-stretch px-12">
                <div class="flex flex-wrap justify-center mx-auto text-center">
                </div>
                <div class="flex flex-wrap justify-center mx-auto text-center">
                    <p class="font-sans text-2xl md:text-2xl font-bold text-footer-title-text">PROGRAMADOR</p>
                </div>
                <div class="flex flex-wrap justify-center mx-auto text-center">
                </div>
            </div>
            <FooterAprehenser />
        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '../layouts/MainLayout.vue';
import NavBarAprehenser from '../components/NavBarAprehenser.vue';
import FooterAprehenser from '../components/FooterAprehenser.vue';
</script>

<style scoped></style>