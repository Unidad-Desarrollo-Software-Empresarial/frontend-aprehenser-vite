<template>
    <MainLayout>
        <div v-if="!isOk">
            <SpinnerComponent />
        </div>

        <div v-else class="px-4 ">

            <div class="rounded-xl border m-6 p-4 max-w-[1200px] mx-auto">
                <p>{{ ambitoDetalle?.formacion.ambito.nombre }}</p>
            </div>

            <div class="rounded-xl border m-6 p-4 max-w-[1200px] mx-auto">
                <p class="text-justify">{{ ambitoDetalle?.formacion.ambito.texto }}</p>
            </div>

            <div class="p-5">
                <table id="table-cursos" class=" max-w-[1200px] mx-auto my-4 cell-border" style="width:100%">
                    <thead>
                        <tr>
                            <th class="uppercase"
                                v-for="item in Object.keys(ambitoDetalle?.formacion.cursos?.at(0) || {})">{{
                                    item }}</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>

        </div>
    </MainLayout>
</template>



<script setup lang="ts">

import { useRoute } from 'vue-router';
import MainLayout from '../layouts/MainLayout.vue';
import { onMounted, ref } from 'vue';
import { api } from '@/api/axios.api';
import SpinnerComponent from '../components/SpinnerComponent.vue';
import { DetalleFormacionByIDResponseInterface } from '../interfaces/detalle-formacion-by-id-response.interface';

import 'datatables.net';
import $ from 'jquery';

const route = useRoute()

const ambitoDetalle = ref<DetalleFormacionByIDResponseInterface>()

const isOk = ref(false)


onMounted(async () => {
    const res = await api.get<DetalleFormacionByIDResponseInterface>(`/detalle-formacion/${route.params.idAmbito}`)
    if (res.status === 200) {
        isOk.value = true
    }
    ambitoDetalle.value = res.data

    $.ajax({
        url: `${api.getUri()}/detalle-formacion/${route.params.idAmbito}`,
        type: 'GET',
        success: (response: DetalleFormacionByIDResponseInterface) => {

            $('#table-cursos').DataTable({
                language: {
                    url: 'https://cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json'
                },
                data: response.formacion.cursos,
                columns: Object.keys(response.formacion.cursos[0]).map(key => ({
                    title: key,
                    data: key
                })),
                columnDefs: [{
                    targets: 7,
                    render: (data, type, row) => {
                        console.log({type, row, data})
                        return `<img 
                                    src="${response.url}${data}" 
                                    alt="${row.tema}" 
                                    class="w-20 h-20 border-xl rounded"
                                >`
                    }
                }]

            });
        },
        error: (error) => {
            console.error('Error fetching data:', error);
            
        }
    });
})

</script>

<style scoped>
@import url('https://cdn.datatables.net/2.0.7/css/dataTables.dataTables.css');
@import url('https://cdn.datatables.net/2.0.7/css/dataTables.jqueryui.css');
@import url('https://code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css');
</style>