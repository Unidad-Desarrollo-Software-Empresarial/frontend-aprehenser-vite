<template>
    <MainLayout>
        <PublicacionesNavBarComponent />
        <div class="w-full flex items-center justify-center">
            <p class="text-center text-[64px] text-[#37C3DD] font-bold font-sans">{{  title }}</p>
        </div>
        <div class="border-b-[5px] rounded border-divider-title max-w-[1200px] mx-auto py-1"></div>
        <slot></slot>
    </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from './MainLayout.vue';
import PublicacionesNavBarComponent from '../components/PublicacionesNavBarComponent.vue';

defineProps({
    title: {type: String, required: true}
})
</script>

<style scoped>

</style>