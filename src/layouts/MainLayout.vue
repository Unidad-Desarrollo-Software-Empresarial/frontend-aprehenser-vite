<template>
    <NavBarComponent />
    <div class="">
        <slot />
    </div>
    <FooterComponent />
</template>

<script setup lang="ts">
import NavBarComponent from '../components/NavBarComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
</script>

<style scoped></style>