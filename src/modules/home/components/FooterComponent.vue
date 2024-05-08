<template>
    <div class="w-full h-max-481 bg-footer-bg grid grid-cols-1 md:grid-cols-3">
        <div class="p-8">
            <p class="text-footer-title-text text-xl font-monserrat tracking-widest ">
                SOBRE NOSOTROS
            </p>

            <div v-if="isLoading" class="flex items-center justify-center">
                <div class="w-6 h-6 border-t-2 border-blue-500 rounded-full animate-spin"></div>
            </div>

            <div v-if="isSuccess" class="pt-12">
                <p class="text-white text-sm md:text-lg text-left font-poppins tracking-wider">
                    {{ data?.info.at(0)?.PAG_NOSOTROS }}
                </p>
            </div>
            <div class="flex gap-x-12 pt-8">
                <a href=""><img src="@/assets/svg/facebook-icon.svg" alt="facebook-icon"></a>
                <a href=""><img src="@/assets/svg/instagram-icon.svg" alt="instagram-icon"></a>
            </div>
        </div>
        <div class="p-8 my-auto flex-col gap-8">
            <div class="flex">
                <img src="@/assets/svg/arrow-right-blue.svg" alt="">
                <p class="text-white">Convocatorias</p>
            </div>
            <div class="border-b border-divider-footer my-4 px-4"></div>
            <div class="flex">
                <img src="@/assets/svg/arrow-right-blue.svg" alt="">
                <p class="text-white">Revistas</p>

            </div>
            <div class="border-b border-divider-footer my-4 px-4"></div>
            <div class="flex">
                <img src="@/assets/svg/arrow-right-blue.svg" alt="">
                <p class="text-white">Nuestras noticias</p>
            </div>
            <div class="border-b border-divider-footer my-4 px-4"></div>
            <div class="py-8 px-2">
                <img class="mx-auto" src="@/assets/svg/aprehenser-logo-footer.svg" alt="aprehenser-logo-footer">
            </div>
        </div>
        <div class="p-8">
            <p class="text-footer-title-text text-xl font-monserrat tracking-widest ">CONTACTOS</p>
            <div class="pt-8">
                <div class="flex gap-4">
                    <img src="@/assets/svg/pointer-location-map.svg" alt="pointer-location">
                    <p class="font-poppins text-white">Dirección: </p>
                </div>
                <div class="pl-6 pt-2">
                    <p class="font-poppins text-white">Av. Jorge Guzmán Rueda y Av. Aurelio Espinosa Pólit. ciudadela
                        "La Victoria", Ecuador</p>
                </div>
            </div>
            <div class="border-b border-divider-footer my-4 px-4"></div>
            <div>
                <div class="flex gap-4">
                    <img src="@/assets/svg/phone-contact.svg" alt="phone-contact">
                    <p class="font-poppins text-white">Teléfono:</p>
                </div>
                <div class="pl-8 pt-2">
                    <p class="font-poppins text-white">(593) 06 2994 700 ext. 2057</p>
                </div>
            </div>
            <div class="border-b border-divider-footer my-4 px-4"></div>
            <div>
                <div class="flex gap-4">
                    <img src="@/assets/svg/mail-contact.svg" alt="mail-contact">
                    <p class="font-poppins text-white">Correo:</p>
                </div>
                <div class="pl-8 pt-2">
                    <p class="font-poppins text-white">aprehenser@pucesi.edu.ec</p>
                </div>
            </div>
            <div class="border-b border-divider-footer my-4 px-4"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useInicioQuery } from '../queries/inicio.query';



const { data, isLoading, isSuccess } = useInicioQuery()
</script>

<style scoped></style>