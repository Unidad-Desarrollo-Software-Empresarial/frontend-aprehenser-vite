<template>
    <div class="p-8 max-w-md h-[650px] flex flex-col justify-center items-center hover:cursor-pointer" @click="selectPerson">
        <div class="align-top h-[450px]">
            <img class="w-[367px] h-[440px]" :src="url">
        </div>
        <div class="h-[100px]">
            <p class="font-sans text-[32px] font-bold text-center">{{ name }}</p>
        </div>
        <div class="algin-bottom h-[100px] ">
            <p class="font-sans text-[20px] font-bold text-footer-title-text uppercase text-center">{{ role }}</p>
        </div>
    </div>
    <div v-if="isOpen" class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-miembro-equipo" role="dialog"
        aria-modal="true" @click="isOpen = false">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-4">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <span class="hidden sm:inline-block align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div class="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-6xl sm:w-full" @click.stop>
                <div class="flex flex-col sm:flex-row items-center">
                    <div class="p-4"><img :src="url" alt=""></div>
                    <div>
                        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                                {{ name }}
                            </h3>
                            <!-- ... -->
                        </div>
                        <div class="px-4">
                            <h4 class="underline">{{ email }}</h4>
                        </div>
                        <div class="border-b border-title-card m-4 "></div>
                        <div class="px-4">
                            <p>{{ bio }}</p>
                        </div>

                        <div class="px-4 pt-12 pb-4 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button type="button"
                                class="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                @click="isOpen = false">
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


defineProps({
    url: { type: String, required: false },
    name: String,
    role: String,
    email: String,
    bio: String,
})

const isOpen = ref(false)

const selectPerson = () => {
    isOpen.value = !isOpen.value
}
</script>

<style scoped></style>