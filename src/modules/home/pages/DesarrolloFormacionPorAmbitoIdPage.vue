<template>
    <MainLayout>
        <div v-if="isLoading">
            <SpinnerComponent />
        </div>

        <div v-else class="px-4 ">

            <div class="rounded-xl border m-6 p-4 max-w-[1200px] mx-auto">
                <p>{{ data?.formacion.ambito.nombre }}</p>
            </div>

            <div class="rounded-xl border m-6 p-4 max-w-[1200px] mx-auto">
                <p class="text-justify">{{ data?.formacion.ambito.texto }}</p>
            </div>

            <CustomDataTable class="m-6 p-4 max-w-[1200px] mx-auto" :data="data?.formacion.cursos" :url="data?.url"
                @inscription="inscription" />

        </div>
    </MainLayout>
    <ModalComponent :open="isModalOpen" @close="closeModal" @inscribir="makeInscription" />
</template>



<script setup lang="ts">

import { useRoute } from 'vue-router';
import MainLayout from '../layouts/MainLayout.vue';
import SpinnerComponent from '../components/SpinnerComponent.vue';
import { useDetalleFormacionQuery } from '../queries/detalle-formacion.query';
import CustomDataTable from '../components/CustomDataTable.vue';
import ModalComponent from '../components/ModalComponent.vue';
import { ref } from 'vue';
import { InscripcionParticipante } from '../interfaces/inscripcion-participante';
import { InscripcionCurso } from '../interfaces/inscripcion-curso';
import { useInscripcionCursoQuery } from '../queries/inscripcion-curso.query';


const route = useRoute()

const isModalOpen = ref(false)

const inscripcion = ref<InscripcionParticipante>({
    nombre: "",
    email: "",
    cedula: "",
    telefono: "",
});

const curso = ref<InscripcionCurso>({
    id: "",
    nombre: "",
    descripcion: "",
    fechaInicio: "",
    fechaFin: "",
    horas: "",
    costo: "",
    url: "",
    inscripcion: "",
});


const { data, isLoading } = useDetalleFormacionQuery(`${route.params.idAmbito}`)

const inscription = (cursoI: any) => {
    curso.value.id = cursoI[0]
    isModalOpen.value = true
}

const mutation = useInscripcionCursoQuery()

const makeInscription = async (participante: InscripcionParticipante) => {
    inscripcion.value = participante
    isModalOpen.value = false

    // Hacer peticiones para inscribir al participante en el curso 

    mutation.mutateAsync({
        DESC_ID: +curso.value.id,
        REC_CEDULA: participante.cedula,
        REC_CORREO: participante.email,
        REC_NOMBRES: participante.nombre,
        REC_TELEFONO: participante.telefono,
    })


}

const closeModal = () => {
    isModalOpen.value = false
}

</script>

<style scoped></style>