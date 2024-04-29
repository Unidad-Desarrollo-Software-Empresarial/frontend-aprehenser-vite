<template>
    <div class="grid grid-cols-2 gap-10 place-items-stretch px-12">
        <div class="bg-white rounded-xl shadow-md overflow-hidden max-w-sm m-3">
            <div class="flex-col">
                <div class="md:flex-shrink-0">
                    <img class="h-52 w-full object-cover " src="@/assets/svg/design-educative.svg" alt="Background img">
                </div>
            </div>
        </div>
        <div class="text-justify">
            <p class="font-sans text-2xl md:text-2xl text-title-card font-bold " >Design Thinking Educative</p>
            <p>El enfoque del Design Thinking Educative DTE se caracteriza por ser un método de aprendizaje experiencial, que facilita la comprensión y asimilación, mediante un proceso cognitivo dinámico y creativo a través de los pasos: empatía, definición, ideación, prototipado y testeo. Esta metodología se basa en el trabajo en equipo para estimular y desarrollar la inteligencia y el pensamiento creativo en el estudiante quien finalmente evidencia un producto de aprendizaje concreto.</p>
            <div class="max-h-md p-8">
                <a href="#" class="block mt-1 text-lg leading-tight font-medium text-title-card hover:underline">{{ titles }}</a>
                <button class="mt-4 bg-btn-see-more hover:opacity-90 text-white py-2 px-4 rounded">Ver más</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    titles: {type: String, required: true},
})
</script>

<style scoped>

</style>