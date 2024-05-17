<template>
    <PublicacionesLayout title="Revistas">
        
        <div v-if="isLoading">
            <SpinnerComponent />
        </div>
        <div v-if="isSuccess" class="flex justify-center gap-4 p-4">
            <div>
                <div class="text-right py-4 px-2">
                    <!-- Drop down -->
                    <Menu as="div" class="relative inline-block text-left">
                        <div>
                            <MenuButton
                                class="inline-flex w-full justify-center rounded-md bg-black/30 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                                Seleccione una convocatoria
                            </MenuButton>
                        </div>
                        <transition enter-active-class="transition duration-100 ease-out"
                            enter-from-class="transform scale-95 opacity-0"
                            enter-to-class="transform scale-100 opacity-100"
                            leave-active-class="transition duration-75 ease-in"
                            leave-from-class="transform scale-100 opacity-100"
                            leave-to-class="transform scale-95 opacity-0">
                            <MenuItems
                                class="absolute mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                                <div class="px-1 py-1">
                                    <MenuItem v-slot="{ active }" v-for="optionMenu in data?.revistas">
                                    <button :class="[
                                        active ? 'bg-black/30 text-white' : 'text-gray-900',
                                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                    ]" @click="onSelect(optionMenu)">
                                        {{ optionMenu.convocatoria }}
                                    </button>
                                    </MenuItem>
                                </div>
                            </MenuItems>
                        </transition>
                    </Menu>
                </div>
            </div>
            <div class="max-w-[365px]">
                <img :src="`${data?.url}${showedOption?.imagen}`"
                    :alt="showedOption?.imagen">
            </div>
            <div class="max-w-[650px]">
                <p class="text-[24px]">
                    {{ showedOption?.texto }}
                </p>
            </div>
        </div>

        <div v-if="isError">
            <pre>{{ error }}</pre>
        </div>

    </PublicacionesLayout>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

import PublicacionesLayout from '../layouts/PublicacionesLayout.vue';
import { usePublicacionesQuery } from '../queries/publicaciones.query';
import { onMounted, ref } from 'vue';
import { RevistaInterface } from '../interfaces/publicaciones-response.interface';
import SpinnerComponent from '../components/SpinnerComponent.vue';

const { data, isError, error, isLoading, isSuccess } = usePublicacionesQuery()

const showedOption = ref<RevistaInterface>()

onMounted(() => {
    showedOption.value = data?.value?.revistas[0]
})

const onSelect = (option: RevistaInterface) => {
    showedOption.value = option
}
</script>

<style scoped></style>