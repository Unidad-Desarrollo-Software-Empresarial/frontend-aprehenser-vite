<template>
    <PublicacionesLayout title="Revistas">
        <div class="flex justify-center gap-4 p-4">

            <div>
                <DropDownComponent title="Opciones de revistas" />
            </div>
            <div class="max-w-[365px]">
                <img src="https://s3-alpha-sig.figma.com/img/7d59/1fed/290e2401b2de5a46e467adbc1903d110?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JJahXyBLoTDpZrpRaHRUPen2vk5m9Z~wYPMajf-82ZGEtGO6-PDRl6GBI47GHvWrLwobzNN2RjO8VFXnIXsiekWxCBS-gbv~UKBFDbufyTHWLaFJF62FBD5Kf--OIcTxMuPxZO1nv0PXil9fLvDWDtAroNBRXOIm9-LbiGB3EBz2DKkzBMWi1C3Rh3J8CeHID23Zw1oXN~3TisQzSnL9E8JU5Ue4WvwLNk4owayPsV-jzlmtoy308MhxRidXROCCaYNaMyeqR4yPEzmuVWCVTJznj8bMwCDcRDgS1r3AkOi4zv6RD4Z6tU8Y9tcN7nMq9WHD43vCN6Nt-7eWtcwyzw__"
                    alt="">
            </div>
            <div class="max-w-[650px]">
                <p class="text-[24px]">
                    La Sede Ibarra de la Pontificia Universidad Católica del Ecuador impulsa la creatividad en la educación superior mediante su primer Convocatoria de Proyectos de Innovación Educativa "Aprehenser". Busca abordar los desafíos educativos liderando un cambio pedagógico y tecnológico con un enfoque holístico y vivencial. La innovación implica negociar roles para construir activamente conocimiento y comprometer a los estudiantes en un entorno social. Se destaca la formación colectiva en lugar de la individualización, fomentando el compromiso espiritual, físico e intelectual para mejorar el rendimiento académico y el crecimiento personal de estudiantes y docentes. La convocatoria anima a los docentes a presentar proyectos factibles con nuevas metodologías, productos multimedia y redes académicas para mejorar la interacción entre estudiantes y docentes a través de entornos virtuales basados en las líneas educativas esenciales de la PUCE.
                </p>
            </div>
        </div>

    </PublicacionesLayout>
</template>

<script setup lang="ts">
import DropDownComponent from '../components/DropDownComponent.vue';
import PublicacionesLayout from '../layouts/PublicacionesLayout.vue';
</script>

<style scoped></style>