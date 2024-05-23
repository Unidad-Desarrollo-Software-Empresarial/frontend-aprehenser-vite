<template>
    <MainLayout>
        <p>Desarrollo y formacion</p>
        <pre>{{ route.params }}</pre>
        lololol
    </MainLayout>
</template>

<script setup lang="ts">

import { useRoute } from 'vue-router';
import MainLayout from '../layouts/MainLayout.vue';


const route = useRoute()
</script>

<style scoped></style>