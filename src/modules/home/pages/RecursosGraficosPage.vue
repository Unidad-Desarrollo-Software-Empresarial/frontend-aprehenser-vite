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
                    <div class="text-right py-4 px-2">
                        <!-- Drop down -->
                        <Menu as="div" class="relative inline-block text-left">
                            <div>
                                <MenuButton
                                    class="inline-flex w-full justify-center rounded-md bg-black/30 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                                    Options
                                    <ChevronDownIcon class="ml-2 h-5 w-5 text-white-200 hover:text-white-100" />
                                </MenuButton>
                            </div>

                            <transition enter-active-class="transition duration-100 ease-out"
                                enter-from-class="transform scale-95 opacity-0"
                                enter-to-class="transform scale-100 opacity-100"
                                leave-active-class="transition duration-75 ease-in"
                                leave-from-class="transform scale-100 opacity-100"
                                leave-to-class="transform scale-95 opacity-0">
                                <MenuItems
                                    class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                                    <div class="px-1 py-1">
                                        <MenuItem v-slot="{ active }">
                                        <button :class="[
                                            active ? 'bg-black/30 text-white' : 'text-gray-900',
                                            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                        ]">
                                            <PencilIcon :active="active" class="mr-2 h-5 w-5 text-black-400"
                                                aria-hidden="true" />
                                            Edit
                                        </button>
                                        </MenuItem>
                                        <MenuItem v-slot="{ active }">
                                        <button :class="[
                                            active ? 'bg-black/30 text-white' : 'text-gray-900',
                                            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                        ]">
                                            <DocumentDuplicateIcon :active="active" class="mr-2 h-5 w-5 text-black-400"
                                                aria-hidden="true" />
                                            Duplicate
                                        </button>
                                        </MenuItem>
                                    </div>
                                    <div class="px-1 py-1">
                                        <MenuItem v-slot="{ active }">
                                        <button :class="[
                                            active ? 'bg-black/30 text-white' : 'text-gray-900',
                                            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                        ]">
                                            <ArchiveBoxIcon :active="active" class="mr-2 h-5 w-5 text-black-400"
                                                aria-hidden="true" />
                                            Archive
                                        </button>
                                        </MenuItem>
                                        <MenuItem v-slot="{ active }">
                                        <button :class="[
                                            active ? 'bg-black/30 text-white' : 'text-gray-900',
                                            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                        ]">
                                            <ArrowTopRightOnSquareIcon :active="active"
                                                class="mr-2 h-5 w-5 text-black-400" aria-hidden="true" />
                                            Move
                                        </button>
                                        </MenuItem>
                                    </div>

                                    <div class="px-1 py-1">
                                        <MenuItem v-slot="{ active }">
                                        <button :class="[
                                            active ? 'bg-black/30 text-white' : 'text-gray-900',
                                            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                        ]">
                                            <TrashIcon :active="active" class="mr-2 h-5 w-5 text-black-400"
                                                aria-hidden="true" />
                                            Delete
                                        </button>
                                        </MenuItem>
                                    </div>
                                </MenuItems>
                            </transition>
                        </Menu>
                    </div>
                </div>
            </div>
        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '../layouts/MainLayout.vue';
import NavBarAprehenser from '../components/NavBarAprehenser.vue';

import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

import { ChevronDownIcon, PencilIcon, DocumentDuplicateIcon, ArchiveBoxIcon, ArrowTopRightOnSquareIcon, TrashIcon } from '@heroicons/vue/24/outline'
</script>

<style scoped></style>