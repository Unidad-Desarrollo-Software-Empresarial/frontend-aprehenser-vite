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

        </div>
    </MainLayout>
</template>

<script setup lang="ts">

import { useRoute } from 'vue-router';
import MainLayout from '../layouts/MainLayout.vue';
import { onMounted, ref } from 'vue';
import { api } from '@/api/axios.api';
import SpinnerComponent from '../components/SpinnerComponent.vue';
import { DetalleFormacionByIdResponseInterface } from '../interfaces/detalle-formacion-by-id-response.interface';


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

</script>

<style scoped></style>