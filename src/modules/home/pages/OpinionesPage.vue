<template>
    <MainLayout>
        <NavBarAprehenser />
        <div class="flex flex-col justify-center items-center mx-auto pt-8 pb-4 px-12 md:px-24">
            <p class="font-sans text-2xl md:text-5xl font-bold">Opiniones</p>
            <div class="border-b border-divider-title h-5 w-[450px]"></div>
        </div>

        <div class="flex flex-col lg:flex-row items-center justify-center gap-4 p-4 ">
            <div class="w-[645px] flex flex-col items-center font-bold text-[24px]">
                <img src="https://s3-alpha-sig.figma.com/img/f94c/b748/dea24760f3bb807429b23f19c2a2568d?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JcWdQn6hD50G1WHLPS6SFMq9~Z3~8qEvI0zhLL4ZXsZgbjYvda-EyYJFnIDWhoUlSK2w1u6sOe-lsjzAfM84M2Ijaw-Ro-TQBOVoHhY18Ugc3vv1S3TyxT-BiwG1yOpQNwG9gpYQstxGDBu9UUmaJwawaTZAKy0dN1L9QwBOHtIu6y~hUuYFWp7~EuDXevvchk~aXCQfyFP5jCU2fFp8pJUc5SWuHWT9u9TIGDNXkzNlsG93T5foxXs3wC4xfFGMGDEdVIkDEPNe07RVZaoj20utQEw2z-BvH5D397Vgv6hvIBge7ecQi8PPvK0NqJQbLcjABpEazhCfXMbimhOs~w__"
                    alt="Prorector">
                    <p class="pt-4">Jesús Muñoz Diez, Ph.D.</p>
                    <p class="pb-4">PRORRECTOR PUCEI</p>
            </div>
            <div class="max-w-[645px]">
                <p class="text-justify text-[20px]">
                    “Aprehenser, tiene como objetivo mostrar que el aprendizaje va más allá de la adquisición de
                    conocimientos o la memorización; implica desarrollar una capacidad crítica hacia la vida y, lo más
                    fundamental, se centra en el aprendizaje para ser.
                    Por esto es crucial encontrar la satisfacción interna en nuestro espíritu, psicología y ser más
                    auténtico a través de nuestras acciones. Mediante la implementación de estrategias pedagógicas de
                    manera sencilla y humana para atraer a estudiantes, profesores y a toda nuestra comunidad académica,
                    a un ecosistema de Apehendizaje.”
                </p>
            </div>
        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '../layouts/MainLayout.vue';
import NavBarAprehenser from '../components/NavBarAprehenser.vue';
// import FooterAprehenser from '../components/FooterAprehenser.vue';
</script>

<style scoped></style>