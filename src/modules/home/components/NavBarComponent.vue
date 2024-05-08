<template>
    <div v-if="inicioIsLoading" class="h-[40] flex items-center justify-center">
        <SpinnerComponent />
    </div>
    <div v-if="inicioIsSuccess" class="flex max-w-auto shadow-sm max-h-40 justify-between items-center">
        <div class="block md:hidden">
            <div class="text-right py-4 px-2">
                <!-- Drop down -->
                <Menu as="div" class="relative inline-block text-left">
                    <div>
                        <MenuButton
                            class="inline-flex w-full justify-center rounded-md bg-black/30 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                            <Bars3Icon class="h-5 w-5 text-white-200 hover:text-white-100" />
                        </MenuButton>
                    </div>

                    <transition enter-active-class="transition duration-200 ease-out"
                        enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                        leave-active-class="transition duration-75 ease-in"
                        leave-from-class="transform scale-100 opacity-100"
                        leave-to-class="transform scale-95 opacity-0">
                        <MenuItems
                            class="z-30 absolute mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                            <div class="flex flex-col gap-4 items-start py-4">
                                <div v-for="route in data">
                                    <MenuItem>
                                    <RouterLink 
                                        active-class="font-bold text-title-card"
                                        class="hover:rounded-xl my-auto mx-2 focus:outline-none whitespace-normal text-center"
                                        :to="{ name: route.MEN_ARCHIVO_RUTA_VUE }">
                                        {{ route.MEN_NOMBRE }}
                                    </RouterLink>
                                </MenuItem>
                                </div>
                                <!--  -->
                                <!--  -->
                                
                            </div>
                        </MenuItems>
                    </transition>
                </Menu>
            </div>
        </div>
        <div v-if="inicioIsError">{{  inicioError }}</div>
        <RouterLink :to="{ name: 'home' }">
            <div class=" p-5 my-auto max-w-[237px]">
                <img :src="`${inicioData?.url}${inicioData?.info.at(0)?.PAG_LOGO}`" alt="Logo Aprehenser">
            </div>
        </RouterLink>
        <div v-if="isLoading">
            Cargando...
        </div>
        <div v-if="isError">
            {{ error }}
        </div>
        <nav v-if="isSuccess" class="hidden md:flex gap-6">
            <!--  -->
            <RouterLink v-for="route in data" active-class="font-bold text-title-card"
                class=" my-auto mx-2 focus:outline-none whitespace-normal text-center flex items-center justify-center w-[56px]"
                :to="{ name: route.MEN_ARCHIVO_RUTA_VUE }">
                {{ route.MEN_NOMBRE }}
            </RouterLink>
        </nav>
        <div class="p-5 my-auto max-w-[307px]">
            <img :src="`${inicioData?.url}${inicioData?.info.at(0)?.PAG_LOGO_PUCE}`" alt="Logo Pu">
        </div>
    </div>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { Bars3Icon } from '@heroicons/vue/24/outline'

import { useMenuQuery } from '../queries/menu.query';
import { useInicioQuery } from '../queries/inicio.query';
import SpinnerComponent from './SpinnerComponent.vue';

const { data, isError, error, isLoading, isSuccess} = useMenuQuery()
const {data: inicioData, isLoading: inicioIsLoading, isSuccess: inicioIsSuccess, isError: inicioIsError, error: inicioError} = useInicioQuery()

</script>

<style scoped></style>