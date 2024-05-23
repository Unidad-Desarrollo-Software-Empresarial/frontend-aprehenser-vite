<template>
    <MainLayout>
        <div v-if="!isOk">
            <SpinnerComponent />
        </div>

        <div v-else>

            <p>{{ ambitoDetalle?.ambito.nombre }}</p>
            <p>{{ ambitoDetalle?.ambito.texto }}</p>


            <div>
                <p>Cursos</p>
                <div>
                    <pre>{{ ambitoDetalle?.cursos }}</pre>
                </div>
            </div>


            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Tema</th>
                            <th>Duración</th>
                            <th>Itinerario</th>
                            <th>Fecha Inicio</th>
                            <th>Fecha Fin</th>
                            <th>Estado Id</th>
                            <th>Tipo</th>
                            <th>Imagen</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="curso in table.getRowModel().rows" :key="curso.id">
                            <td>{{ curso. }}</td>
                            <td>{{ curso.duracion }}</td>
                            <td>{{ curso.itinerario }}</td>
                            <td>{{ curso.inicio }}</td>
                            <td>{{ curso.fin }}</td>
                            <td>{{ curso.estadoId }}</td>
                            <td>{{ curso.tipo }}</td>
                            <td>{{ curso.imagen }}</td>
                        </tr>
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
import { CursoInterface, DetalleFormacionByIdResponseInterface } from '../interfaces/detalle-formacion-by-id-response.interface';
import { ColumnDef, getCoreRowModel, useVueTable } from '@tanstack/vue-table';





const route = useRoute()

const ambitoDetalle = ref<DetalleFormacionByIdResponseInterface>()

const isOk = ref(false)

onMounted(async () => {
    const response = await api.get<DetalleFormacionByIdResponseInterface>(`/detalle-formacion/${route.params.idAmbito}`)
    console.log(response.data)
    if (response.status === 200) {
        isOk.value = true
    }
    ambitoDetalle.value = response.data
})


const columns: ColumnDef<CursoInterface>[] = []

const table = useVueTable({
    columns,
    data: ambitoDetalle.value?.cursos,
    getCoreRowModel: getCoreRowModel()
})


</script>

<style scoped></style>