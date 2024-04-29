<template>
    <MainLayout>
        <NavBarAprehenser />
        <div class="flex flex-col justify-center items-center mx-auto pt-8 pb-4 px-12 md:px-24">
            <p class="font-sans text-2xl md:text-5xl font-bold">Imagen Institucional</p>
            <div class="border-b border-divider-title h-5 w-[450px]"></div>

            <!-- -->
            <div class="flex flex-col-reverse sm:flex-row w-full justify-between p-8">
                <div></div>
                <div class="max-w-[502px]">
                    <img src="https://s3-alpha-sig.figma.com/img/6a42/60fe/47e9e1904fa40ca03b9fa624407b1f43?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oRJSksgTdqKTI5nvIMor9Opd5Ua8j8f-Gw-7asG6KUhfIexP5lRikUk1kIdBtTPFEOL-ho7tczcupLdChAyBAUIbOzb-dMsqPtRL1w9uPh4XTPf2CN~RamAa~DwXwxtrm4HmZHF-3kA~qC7fuckZRE20XZef6r7PCAvGZj86Q4kIK9-YSq-vL18dXgTqKgnJTBMs-tYagLjFNF-wDp4t1uSWt0UaUIpq5Sm4FJaqKNRF42JXSpi-0snyJe~BGkFVN6Wo8295PK4tZvr6ygs5kuTQCt~zx8HgtWFVAwemXs~LMMsKDYJA1IKmpdTnukiW~j3oALsO1WAObpcx~4LkZA__"
                        alt="Portada Aprehenser">
                    <p class="text-[24px] py-[32px]">Este manual actúa como una referencia y guía para el correcto uso y
                        aplicación de los elementos
                        de la marca, como el logotipo, colores, tipografías y otros elementos gráficos que representan
                        la imagen de la empresa de Aprehenser.</p>
                </div>
                <div>
                    <DropDownComponent title="Recursos Graficos" />
                </div>
            </div>
        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '../layouts/MainLayout.vue';
import NavBarAprehenser from '../components/NavBarAprehenser.vue';
import DropDownComponent from '../components/DropDownComponent.vue';
</script>

<style scoped></style>