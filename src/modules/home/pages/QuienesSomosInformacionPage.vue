<template>
    <MainLayout>
        <NavBarAprehenser />
        <div class="">
            <div class="flex flex-col justify-center items-center mx-auto pt-8 pb-4 px-12 md:px-24">
                <p class="font-sans text-2xl md:text-5xl font-bold">Información General</p>
                <div class="border-b border-divider-title h-5 w-[450px]"></div>
            </div>
            <div class="flex flex-col sm:flex-row gap-10 place-items-stretch px-12">
                <div class="text-justify">
                    <p>
                        En 2021 surgió Aprehenser, un sistema de Innovación Educativa con un propósito claro: impulsar
                        el
                        proceso de aprendizaje y enseñanza, otorgando un significado palpable al conocimiento que pueda
                        ser
                        aplicado en la vida cotidiana. Dentro de Aprehenser, los docentes encuentran un espacio que les
                        permite transformarse y desarrollarse, convirtiéndose en auténticos artífices de experiencias
                        educativas inmersivas. Este enfoque contribuye de manera integral a la formación de las
                        personas. Su
                        base se cimienta en el pilar esencial de la innovación educativa, definida como la planificada
                        implementación de un cambio significativo en el proceso de enseñanza-aprendizaje, involucrando
                        una
                        transformación en materiales, métodos, contenidos, evaluación y entornos de aprendizaje.
                        La innovación educativa se entrelaza con la noción de añadir valor y relevancia a la educación
                        de
                        los estudiantes y al desarrollo profesional de los docentes. Prioriza la formación integral y
                        unificadora de ambos actores, reconociéndolos como seres humanos, hijos de Dios, y valorando la
                        dignidad personal en los demás.
                    </p>
                </div>
                <div class="text-justify">
                    <p>
                        El proyecto toma su nombre de la esencia del "Aprehendizaje": dar un significado profundo al
                        conocimiento y hacerlo cobrar vida en quien lo adquiere. La "S" mayúscula se utiliza para
                        representar cómo la educación que brindamos y el desarrollo que fomentamos solo adquieren
                        sentido
                        cuando nos reconocemos como seres humanos y reconocemos al prójimo en su dignidad personal.
                        Aprehenser se propone como un espacio multidisciplinario y transdisciplinario, enraizado en la
                        innovación educativa, con el fin de fortalecer tanto el proceso de aprehendizaje como la
                        enseñanza.
                        Se apoya en líneas educativas fundamentales, como el proyecto "Magis", en la pedagogía del
                        éxtasis y
                        en metodologías eficaces que fomentan la participación activa de los estudiantes y la
                        investigación
                        científica en el entorno universitario. Esto respalda el desarrollo profesional del docente y
                        estimula la formación completa de los estudiantes, nutriendo sus habilidades tanto humanas como
                        profesionales.
                    </p>
                </div>
            </div>
            <br />
        </div>
        <FooterAprehenser />
    </MainLayout>

</template>

<script setup lang="ts">
import MainLayout from '../layouts/MainLayout.vue';

import NavBarAprehenser from '../components/NavBarAprehenser.vue';
import FooterAprehenser from '../components/FooterAprehenser.vue';
</script>

<style scoped></style>