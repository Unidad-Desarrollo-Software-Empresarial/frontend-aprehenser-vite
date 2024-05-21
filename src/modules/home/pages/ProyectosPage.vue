<template>
    <MainLayout>
        <div class="w-full flex items-center justify-center py-2">
            <p class="text-center text-[64px] text-[#37C3DD] font-bold font-sans">Convocatorias</p>
        </div>

        <div class="border-b-[5px] rounded border-divider-title max-w-[1200px] mx-auto py-1 mb-4"></div>
        <div class="w-full flex items-center justify-center py-2">
            <p class="text-center text-[32px] text-[#37C3DD] font-bold font-sans">{{ showedProjects?.CONV_NOMBRE }}</p>
        </div>
        <div>
            <div v-if="isPending">
                <SpinnerComponent />
            </div>
            <div v-else class="text-right py-4 md:pr-[80px]">
                <!-- Drop down -->
                <Menu as="div" class="relative inline-block text-left">
                    <div>
                        <MenuButton
                            class="inline-flex w-full justify-center rounded-md bg-black/30 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                            {{ showedProjects?.CONV_NOMBRE || 'Seleccione una convocatoria' }}
                        </MenuButton>
                    </div>
                    <transition enter-active-class="transition duration-100 ease-out"
                        enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                        leave-active-class="transition duration-75 ease-in"
                        leave-from-class="transform scale-100 opacity-100"
                        leave-to-class="transform scale-95 opacity-0">
                        <MenuItems
                            class="absolute mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                            <div class="px-1 py-1">
                                <MenuItem v-slot="{ active }" v-for="optionMenu in data?.convocatorias">
                                <button :class="[
                                    active ? 'bg-black/30 text-white' : 'text-gray-900',
                                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                ]" @click="selectOption(optionMenu)">
                                    {{ optionMenu.CONV_NOMBRE }}
                                </button>
                                </MenuItem>
                            </div>
                        </MenuItems>
                    </transition>
                </Menu>
            </div>
        </div>
        <div class="flex-column">
            <div v-for="(project, index) in showedProjects?.PROYECTOS">
                <ItemProjectComponent :title="project?.PRO_NOMBRE" :description="project?.DETP_LINEACIONES.at(0)!"
                    :imageUrls="project?.IMAGENES" :isReverse="index % 2 === 0" :id-proyecto="project.PRO_ID" />
            </div>
        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';

import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

import ItemProjectComponent from '../components/ItemProjectComponent.vue';
import MainLayout from '../layouts/MainLayout.vue';
import { useProyectosQuery } from '../queries/proyectos.query';
import { ConvocatoriaInterface } from '../interfaces/proyectos-response.interface';
import SpinnerComponent from '../components/SpinnerComponent.vue';


const { data, isPending } = useProyectosQuery()

const showedProjects = ref<ConvocatoriaInterface>()

watch(data, (newData) => {
    if(newData?.convocatorias){
        console.log("Data actualizada")
        showedProjects.value = newData.convocatorias[0]
    }else {
        console.log("Retorno de pagina", data)
    }
})

onMounted(() => {
    if(data?.value?.convocatorias){
        showedProjects.value = data.value.convocatorias[0]
    }
})

const selectOption = (option: ConvocatoriaInterface) => {
    showedProjects.value = option
}
</script>

<style scoped></style>