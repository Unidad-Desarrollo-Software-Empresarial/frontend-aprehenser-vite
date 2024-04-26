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
                    role="COORDINADORA DEL SISTEMA DE INNOVACIÓN EDUCATIVA" email="amculqui1@pucesi.edu.ec"
                    bio="Doctora en Comunicación e información contemporánea, Máster en Comunicación e Industrias Creativas, por la Universidad Santiago de Compostela. Licenciada en Comunicadora Social por la Pontificia Universidad Católica del Ecuador Ibarra.
                    Coordinadora del sistema de innovación educativa y desarrollo docente. Docente titular en la escuela de Comunicación Social." />
                <MiembroEquipoComponent url="https://placehold.co/367x440" name="Verónica Maribel Chávez Fuentes"
                    role="RESPONSABLE DE INNOVACIÓN EDUCATIVA" email="vmchavez1@pucesi.edu.ec" bio="Máster en Innovación Educativa, por la Universidad Internacional de la Rioja, Máster en Diseño de Moda, por la Universidad Internacional de Valencia, Licenciada en Diseño y Producción de vestuario, por la Pontificia Universidad Católica del Ecuador Ibarra. Responsable de Innovación Educativa, Docente de la escuela de Arquitectura, Diseño y Artes, Responsable académica 2018-2021." />
                <MiembroEquipoComponent url="https://placehold.co/367x440" name="Carmen Rocio Carchi Taez"
                    role="RESPONSABLE DE CAPACITACIÓN DOCENTE" email="ccarchi@pucesi.edu.ec" bio="Magíster en gestión Universitaria, por la Universidad del Espíritu Santo, Licenciada en Ciencias de la educación, especialista en docencia en secretariado." />
                <MiembroEquipoComponent url="https://placehold.co/367x440" name="Pablo Alejandro Dávila Oña"
                    role="RESPONSABLE DE EVALUACIÓN DOCENTE" email="padavila@pucesi.edu.ec" bio="Magister en Tecnología para la Gestión y Práctica Docente, por la PUCE-SI. 11 años de experiencia docente universitaria. Docente de la Maestría en Innovación Educativa, la Maestría en Pedagogía del Inglés como Lengua Extranjera, Maestría en Negocios Internacionales y varias asignaturas de Grado y Nivel Técnico y Tecnológico (PUCE - TEC). Asesor de Trabajos de Titulación de Grado y Posgrado." />
                <MiembroEquipoComponent url="https://placehold.co/367x440" name="Patricio Ricardo Ruiz Quiranza"
                    role="RESPONSABLE DE TECNOLOGÍAS EDUCATIVAS Y AULAS VIRTUALES" email="rruiz@pucesi.edu.ec" bio="Magíster en Tecnologías para la Gestión y Práctica Docente, por la Pontificia Universidad Católica del Ecuador Ibarra,  Ingeniero en Sistemas, por la Pontificia Universidad Católica del Ecuador Ibarra. Responsable de Tecnologías Educativas, Administrador del Campus Virtual de la PUCE Ibarra, Docente de la escuela de Ingeniería." />
                <MiembroEquipoComponent url="https://placehold.co/367x440" name="José Luis Ibarra Estévez"
                    role="PROGRAMADOR" email="jibarra@pucesi.edu.ec" bio="Magíster en Tecnologías para la Gestión y Práctica docente, Máster Universitario en ingeniería de software y sistemas informáticos, docente titular de la Escuela de Ingeniería."/>
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