<template>
    <div v-if="open" class="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50"
        @click="closeModal">

        <div class="bg-white rounded shadow-lg max-w-[400px] min-w-[350px] overflow-auto" @click.stop>
            <div class="px-4 py-2 flex justify-between items-center">
                <h2 class="text-xl">Ficha de inscripción</h2>
                <button @click="closeModal"
                    class="bg-red-400 rounded-xl px-3 py-2 text-xs text-slate-100">Cerrar</button>
            </div>
            <div class="p-4">
                <form @submit.prevent="addInscripcion">
                    <div class="mb-4">
                        <label class="block mb-2" for="name">Nombres y Apellidos</label>
                        <input v-model="inscripcion.nombre" id="name" type="text"
                            class="w-full px-3 py-2 border rounded" required>
                    </div>
                    <div class="mb-4">
                        <label class="block mb-2" for="email">Correo</label>
                        <input v-model="inscripcion.email" id="email" type="text"
                            class="w-full px-3 py-2 border rounded" required>
                    </div>
                    <div class="mb-4">
                        <label class="block mb-2" for="cedula">Cédula</label>
                        <input v-model="inscripcion.cedula" id="cedula" type="text"
                            class="w-full px-3 py-2 border rounded" required>
                    </div>
                    <div class="mb-4">
                        <label class="block mb-2" for="telefono">Teléfono</label>
                        <input v-model="inscripcion.telefono" id="telefono" type="text"
                            class="w-full px-3 py-2 border rounded" required>
                    </div>

                    <button type="submit" class="px-4 py-2 text-white bg-blue-500 rounded">Inscribirse</button>
                </form>
                <pre>{{ itemUpdate }}</pre>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';


const inscripcion = ref({
    nombre: "",
    email: "",
    cedula: "",
    telefono: "",
});

const { itemUpdate, open } = defineProps({
    open: {
        type: Boolean,
        default: false
    },
    itemUpdate: {
        type: Number,
        default: null,
        required: false
    }
})

const emit = defineEmits(['close', 'inscribir'])


const addInscripcion = async () => {
    emit('inscribir', inscripcion.value)
    inscripcion.value = {

        nombre: "",
        email: "",
        cedula: "",
        telefono: "",
    }
}

const closeModal = () => {
    emit('close')
}

</script>

<style scoped></style>