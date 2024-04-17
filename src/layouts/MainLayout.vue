<template>
    <NavBarComponent />
    <div class="bg-slate-400 ">
        <slot />
    </div>
    <FooterComponent />
</template>

<script setup lang="ts">
import NavBarComponent from '../components/NavBarComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
</script>

<style scoped></style>