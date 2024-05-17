<template>
    <PublicacionesLayout title="Divulgaciones">

        <div class="max-w-[1000px] mx-auto p-5">
            <div class="md:space-x-4 grid grid-cols-1 md:grid-cols-2 ">
                <ItemDivulgacionComponent v-for="item in data?.contenido.at(1)?.divulgaciones" 
                    :title="item.texto"
                    :description="item.texto"
                    :image="`${data?.url}${item.imagen}`" />

            </div>
        </div>

    </PublicacionesLayout>
</template>

<script setup lang="ts">
import ItemDivulgacionComponent from '../components/ItemDivulgacionComponent.vue';
import PublicacionesLayout from '../layouts/PublicacionesLayout.vue';
import { usePublicacionesQuery } from '../queries/publicaciones.query';

const { data } = usePublicacionesQuery()


</script>

<style scoped></style>