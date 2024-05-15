<template>
    <MainLayout>
        <NavBarAprehenser />
        <div v-if="isLoading">
            <SpinnerComponent />
        </div>
        <div v-if="isSuccess">
            <div class="flex flex-col justify-center items-center mx-auto pt-8 pb-4 px-12 md:px-24">
                <p class="font-sans text-2xl md:text-5xl font-bold">{{ showedOption?.titulo }}</p>

                <div class="border-b border-divider-title h-5 w-[450px]"></div>

                <!-- -->
                <div class="flex flex-col-reverse sm:flex-row w-full justify-between p-8">
                    <div></div>
                    <div class="max-w-[502px]">
                        <img v-if="showedOption?.imagen" :src="`${data?.url}${showedOption?.imagen}`" alt="Portada Aprehenser">
                        <div v-else class="animate-pulse bg-gray-200 h-[200px] w-[200px]"></div>
                        <p class="text-[24px] py-[32px]">{{ showedOption?.texto }}</p>
                    </div>
                    <div>
                        <DropDownComponent :title="showedOption?.comboBox ?? 'Seleccione una opcion'"
                            :options="data?.recursos_graficos.detalles" @on-select="myAction" />
                    </div>
                </div>
            </div>
        </div>
    </MainLayout>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import MainLayout from '../layouts/MainLayout.vue';
import NavBarAprehenser from '../components/NavBarAprehenser.vue';
import DropDownComponent from '../components/DropDownComponent.vue';
import SpinnerComponent from '../components/SpinnerComponent.vue';
import { InformacionGeneralInterface } from '../interfaces/quienes-somos.interface';
import { useQuienesSomosQuery } from '../queries/quienes-somos.query';

const { data, isSuccess, isLoading } = useQuienesSomosQuery()

const showedOption = ref<InformacionGeneralInterface>(data.value?.recursos_graficos.detalles[0]!)

const myAction = (option: InformacionGeneralInterface) => {
    showedOption.value = option
}

</script>

<style scoped></style>