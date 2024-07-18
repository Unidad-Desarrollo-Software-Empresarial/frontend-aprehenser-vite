<template>
    <!-- <div v-if="open" class="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50"
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
    </div> -->
    <div v-if="open" tabindex="-1" aria-hidden="true"
        class=" fixed top-0 left-0 z-50 flex justify-center items-center w-full bg-gray-900 bg-opacity-50 h-full"
        @click="closeModal">
        <div class="relative p-4 w-full max-w-lg max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 " @click.stop>
                <!-- Modal header -->
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                        Ficha de inscripción
                    </h3>
                    <button @click="closeModal" type="button"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-toggle="crud-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <form class="p-4 md:p-5" @submit.prevent="addInscripcion">
                    <div class="grid gap-4 mb-4 grid-cols-2">
                        <div class="col-span-2">
                            <label for="name"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombres</label>
                            <input v-model="inscripcion.nombre" type="text" name="name" id="name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Nombres y apellidos" required>
                        </div>
                        <div class="col-span-2 sm:col-span-1">
                            <label for="identification"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Identificación</label>
                            <input v-model="inscripcion.cedula" type="text" name="identification" id="identification"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Cédula de identidad" required >
                        </div>
                        <div class="col-span-2 sm:col-span-1">
                            <label for="phone"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Teléfono</label>
                            <input v-model="inscripcion.telefono" type="text" name="phone" id="phone"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="+(593)" required>
                        </div>
                        <div class="col-span-2">
                            <label for="email"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo
                                electrónico</label>
                            <input v-model="inscripcion.email" type="text" name="email" id="email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="john@doe.com" required>
                        </div>
                    </div>
                    <button type="submit"
                        class="text-white inline-flex items-center bg-[#ff6f00] hover:bg-[#ff6f00]-800 focus:ring-4 focus:outline-none focus:ring-[#ff6f00]-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#ff6f00]-600 dark:hover:bg-[#ff6f00]-700 dark:focus:ring-[#ff6f00]-800">
                        <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                        Inscribirme
                    </button>
                </form>
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

const { open } = defineProps({
    open: {
        type: Boolean,
        default: false
    },
    // itemUpdate: {
    //     type: Number,
    //     default: null,
    //     required: false
    // }
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