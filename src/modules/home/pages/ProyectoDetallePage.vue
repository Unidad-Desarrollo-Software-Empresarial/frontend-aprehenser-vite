<template>
    <MainLayout>
        <div v-if="!isOk" class="w-screen h-[800px] flex justify-center items-center">
            <SpinnerComponent />
        </div>
        <div v-else class="max-w-[1280px] mx-auto">
            <div class="border rounded-xl p-4 my-4 mx-4">
                <p class="text-xl">Proyecto: {{ detalleProyecto?.contenido.titulo }}</p>
            </div>
            <div class="border rounded-xl p-4 my-4 mx-4">
                <p>Coordinador: {{ detalleProyecto?.contenido.coordinador }}</p>
                <p>Escuela: {{ detalleProyecto?.contenido.escuela }}</p>
                <p>Lineacion: {{ detalleProyecto?.contenido.lineacion }}</p>
            </div>

            <div >
                <div v-if="detalleProyecto!.contenido.participantes.length === 0"></div>
                <div v-else class="border rounded-xl p-4 mx-4">
                    <p>Participantes:</p>
                    <ul>
                        <li v-for="participante in detalleProyecto?.contenido.participantes">{{ participante }}</li>
                    </ul>
                </div>
            </div>

            <div class="border rounded-xl p-4 my-4 mx-4">
                <p class="text-justify">Descripcion: {{ detalleProyecto?.contenido.descripcion }}</p>
            </div>

            <div class="flex flex-wrap p-4 gap-6 mx-auto">
                <div v-for="image in detalleProyecto?.contenido.imagenes">
                    <img class="max-w-[400px] mx-auto" :src="`${detalleProyecto?.url}${image}`" :alt="image">
                </div>
            </div>
            <div>
                <video loop autoplay muted>
                    <source :src="`${detalleProyecto?.url}${detalleProyecto?.contenido.video}`" type="video/mp4">
                </video>
            </div>

        </div>

    </MainLayout>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import MainLayout from '../layouts/MainLayout.vue';
import { useRoute } from 'vue-router';
import { api } from '@/api/axios.api';
import { DetalleProyectosResponseInterface } from '../interfaces/detalle-proyectos-response';
import SpinnerComponent from '../components/SpinnerComponent.vue';


// import { Swiper, SwiperSlide } from 'swiper/vue'
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import 'swiper/swiper-bundle.css'

// const modules = [Autoplay, Pagination, Navigation]

const route = useRoute()
const detalleProyecto = ref<DetalleProyectosResponseInterface>()
const isOk = ref(false)

onMounted(async () => {
    const response = await api.get<DetalleProyectosResponseInterface>(`detalle-proyectos/${route.params.idProyecto}`)
    if (response.status === 200) {
        isOk.value = true
    }
    detalleProyecto.value = response.data
})

</script>

<style scoped></style>