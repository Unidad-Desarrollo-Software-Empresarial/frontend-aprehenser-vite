<template>
    <MainLayout>
        <div class="">
            <NavBarAprehenser />
            <div class="flex flex-col justify-center items-center mx-auto pt-8 pb-4 px-12 md:px-24">
                <p class="font-sans text-2xl md:text-5xl font-bold">Equipo</p>
                <div class="border-b border-divider-title h-5 w-[450px]"></div>
            </div>
            <!-- Primera Sección -->
            <div class="flex flex-wrap w-full justify-center">
                <MiembroEquipoComponent url="https://placehold.co/367x440" name="Augusta Yadira Cueva"
                    role="directora academica" email="aycueva@pucesi.edu.ec"
                    bio="Doctora en ciencias biomoleculares y genéticas por la Universidad de Pavia, Italia. Docente titular. Ingeniera en gestión ambiental." />
                <MiembroEquipoComponent url="https://placehold.co/367x440" name="Ana Magali Culqui Medina"
                    role="COORDINADORA DEL SISTEMA DE INNOVACIÓN EDUCATIVA" />
                <MiembroEquipoComponent url="https://placehold.co/367x440" name="Verónica Maribel Chávez Fuentes"
                    role="RESPONSABLE DE INNOVACIÓN EDUCATIVA" />
                <MiembroEquipoComponent url="https://placehold.co/367x440" name="Carmen Rocio Carchi Taez"
                    role="RESPONSABLE DE CAPACITACIÓN DOCENTE" />
                <MiembroEquipoComponent url="https://placehold.co/367x440" name="Pablo Alejandro Dávila Oña"
                    role="RESPONSABLE DE EVALUACIÓN DOCENTE" />
                <MiembroEquipoComponent url="https://placehold.co/367x440" name="Patricio Ricardo Ruiz Quiranza"
                    role="RESPONSABLE DE TECNOLOGÍAS EDUCATIVAS Y AULAS VIRTUALES" />
                <MiembroEquipoComponent url="https://placehold.co/367x440" name="José Luis Ibarra Estévez"
                    role="PROGRAMADOR" />
            </div>
            <!-- Tercera Sección -->

            <FooterAprehenser />
        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '../layouts/MainLayout.vue';
import NavBarAprehenser from '../components/NavBarAprehenser.vue';
import FooterAprehenser from '../components/FooterAprehenser.vue';

import MiembroEquipoComponent from '../components/MiembroEquipoComponent.vue';
</script>

<style scoped></style>