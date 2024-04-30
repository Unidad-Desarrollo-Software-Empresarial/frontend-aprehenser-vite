<template>
    <div class="flex max-w-auto shadow-sm max-h-40 justify-between items-center">
        <div class="block md:hidden">
            <!-- <button><img class="h-9 pl-2" src="@/assets/svg/menu-icon.svg" alt="menu-icon"></button> -->
            <!--  -->
            <!--  -->
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
                            class="absolute mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                            <div class="flex flex-col gap-4 items-start py-4">
                                <MenuItem>
                                <RouterLink active-class="font-bold text-title-card"
                                    class="hover:rounded-xl my-auto mx-2 focus:outline-none whitespace-normal text-center"
                                    :to="{ name: 'quienes-somos' }">
                                    Quiénes Somos
                                </RouterLink>
                            </MenuItem>
                            <MenuItem>
                                <RouterLink active-class="font-bold text-title-card"
                                    class="hover:rounded-xl my-auto mx-2 focus:outline-none whitespace-normal text-center"
                                    :to="{ name: 'que-hacemos' }">
                                    Qué hacemos
                                </RouterLink>
                            </MenuItem>
                            <MenuItem>
                                <RouterLink active-class="font-bold text-title-card"
                                    class="hover:rounded-xl my-auto mx-2 focus:outline-none whitespace-normal text-center"
                                    :to="{ name: 'proyectos' }">
                                    Proyectos
                                </RouterLink>
                            </MenuItem>
                            <MenuItem>
                                <RouterLink active-class="font-bold text-title-card"
                                    class="hover:rounded-xl my-auto mx-2 focus:outline-none whitespace-normal text-center "
                                    :to="{ name: 'noticias' }">
                                    Noticias
                                </RouterLink>
                            </MenuItem>
                            <MenuItem>
                                <RouterLink active-class="font-bold text-title-card"
                                    class="hover:rounded-xl my-auto mx-2 focus:outline-none whitespace-normal text-center"
                                    :to="{ name: 'publicaciones/revistas' }">
                                    Publicaciones
                                </RouterLink>
                            </MenuItem>
                            </div>
                        </MenuItems>
                    </transition>
                </Menu>
            </div>
        </div>
        <RouterLink :to="{ name: 'home' }">
            <div class=" p-5 my-auto">
                <img src="@/assets/svg/aprehenser-logo.svg" alt="Logo Aprehenser">
            </div>
        </RouterLink>
        <nav class="hidden md:flex gap-6">
            <RouterLink active-class="font-bold text-title-card"
                class="hover:bg-slate-50 hover:rounded-xl my-auto mx-2 focus:outline-none whitespace-normal text-center flex items-center justify-center w-[56px]"
                :to="{ name: 'quienes-somos' }">
                Quiénes Somos
            </RouterLink>
            <RouterLink active-class="font-bold text-title-card"
                class="hover:bg-slate-50 hover:rounded-xl my-auto mx-2 focus:outline-none whitespace-normal text-center flex items-center justify-center w-[57px]"
                :to="{ name: 'que-hacemos' }">
                Qué hacemos
            </RouterLink>
            <RouterLink active-class="font-bold text-title-card"
                class="hover:bg-slate-50 hover:rounded-xl my-auto mx-2 focus:outline-none whitespace-normal text-center flex items-center justify-center w-[57px]"
                :to="{ name: 'proyectos' }">
                Proyectos
            </RouterLink>
            <RouterLink active-class="font-bold text-title-card"
                class="hover:bg-slate-50 hover:rounded-xl my-auto mx-2 focus:outline-none whitespace-normal text-center flex items-center justify-center w-[57px]"
                :to="{ name: 'noticias' }">
                Noticias
            </RouterLink>
            <RouterLink active-class="font-bold text-title-card"
                class="hover:bg-slate-50 hover:rounded-xl my-auto mx-2 focus:outline-none whitespace-normal text-center flex items-center justify-center w-[57px]"
                :to="{ name: 'publicaciones/revistas' }">
                Publicaciones
            </RouterLink>
        </nav>
        <div class="p-5 my-auto">
            <img src="@/assets/svg/pucesi-ibarra-logo.svg" alt="Logo Pu">
        </div>
    </div>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { Bars3Icon } from '@heroicons/vue/24/outline'

</script>

<style scoped></style>