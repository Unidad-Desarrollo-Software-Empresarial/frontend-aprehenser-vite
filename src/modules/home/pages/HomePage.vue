<template>
    <MainLayout>
        <div class="h-686 bg-slate-500 w-full h-full relative">
            <div class="h-200 sm:h-auto">
                <img class="relative" src="../../../assets/img/BackgroundMainImg.png" alt="Background img">
            </div>
            <div class="absolute inset-0 bg-black opacity-40"></div>
            <div class="absolute inset-0 flex items-center justify-center px-8 sm:px-16">
                <div class="flex flex-row md:mx-auto md:items-center">
                    <img class="h-24 hidden sm:block sm:h-36 sm:pb-4 md:h-auto"
                        src="../../../assets/svg/aprehenser-isotipo.svg" alt="logo">
                    <img class="mx-10 hidden sm:block" src="../../../assets/svg/aprehenser-isotipo-barra.svg" alt="logo-bar">
                    <div class="w-max-1019">
                        <p class="text-white tracking-wider text-xs md:text-2xl text-wrap">
                            Aprehenser desarrolla y responde a la planificación estratégica anual, cuya misión estará
                            siempre direccionada en el mejoramiento de la calidad educativa, mediante estrategias de
                            innovación, acompañamiento, participación y capacitación docente.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="md:h-32 p-8 mx-auto bg-labels-grey flex flex-col sm:flex-row md:justify-between md:items-center">
            <a href="" class="p-8 hover:opacity-80 hover:border hover:rounded-lg">
                <p class="text-white text-xl sm:text-xl md:text-2xl font-semibold whitespace-nowrap">Proyectos +</p>
            </a>
            <a href="" class="p-8 hover:opacity-80 hover:border hover:rounded-lg ">
                <p class="text-white text-xl sm:text-xl md:text-2xl font-semibold whitespace-nowrap">Docentes +</p>
            </a>
            <a href="" class="p-8 hover:opacity-80 hover:border hover:rounded-lg ">
                <p class="text-white text-xl sm:text-xl md:text-2xl font-semibold whitespace-nowrap">Estudiantes +</p>
            </a>
            <a href="" class="p-8 hover:opacity-80 hover:border hover:rounded-lg ">
                <p class="text-white text-xl sm:text-xl md:text-2xl font-semibold whitespace-nowrap">Publicaciones +</p>
            </a>
        </div>
        <div class="flex flex-col justify-center items-center mx-auto pt-8 pb-4 px-12 md:px-24">
            <p class="text-labels-grey font-open-sans text-2xl md:text-5xl font-bold">Proyectos en marcha</p>
            <div class="border-b border-divider-title h-5 w-full"></div>
        </div>
        <div class="flex flex-wrap justify-center mx-auto">
            <CardProjectComponent
                title="Av. Padre Aurelio Espinosa Pólit: Paisaje arbóreo e interacciones materiales" />
            <CardProjectComponent
                title="Diseño y desarrollo de un prototipo inalámbrico de monitorización de la calidad de la ventilación del aire en espacios interiores en la PUCE IBARRA" />
            <CardProjectComponent title="ComuniSalud" />
        </div>
        <div>
            <video loop autoplay muted>
                <source src="https://s3-figma-videos-production-sig.figma.com/video/1242858492981883810/TEAM/f295/3f18/-9f4b-4628-ba1f-917b92ff45c0?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a9J5KzCE6olpMGX1KEIUc5znIHBplqWBWOB26gcwkH7czVOr7jreq3TvUDoStjZ~abrbkkeyWPyZPTRAfALTM-Bdd2VE9-Sk4oq0H~eQ1bxUmkhWWMk24vLxrbbSPQQPaqmP7f7ISleSWbWw4hcNJKPWUeCEKEMjQ1eUe2qyajJ2TV~Tv-4cO1cTueR6-3ku0lAwiuQMPFTskbUbFHW5S3Cbb2SAnRXvi2yZ3vMMKIsLfUCNjx4WXGfdL2A7vTiF79GlHVRwDhyhhJ7woGaQ4bL47k4eYUZWJW8LdS7PjziLJfNeTfhXBGAM15Np03dgTApi7bnEk0PJYtJSsMWs8A__" type="video/mp4">
            </video>

        </div>
    </MainLayout>

</template>

<script setup lang="ts">
import MainLayout from '../layouts/MainLayout.vue';
import CardProjectComponent from '../components/CardProjectComponent.vue';

// import bgImg from '../../../assets/img/BackgroundMainImg.png'
</script>

<style scoped></style>