<template>
    <div class="text-right py-4 px-2">
        <!-- Drop down -->
        <Menu as="div" class="relative inline-block text-left">
            <div>
                <MenuButton
                    class="inline-flex w-full justify-center rounded-md bg-black/30 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                    {{ title }}
                </MenuButton>
            </div>

            <transition enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0">
                <MenuItems
                    class="absolute mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                    <div class="px-1 py-1">
                        <MenuItem v-slot="{ active }" v-for="optionMenu in options">
                        <button :class="[
                            active ? 'bg-black/30 text-white' : 'text-gray-900',
                            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                        ]"
                            @click="emit('select', optionMenu)"
                        >
                            {{ optionMenu.comboBox }}
                        </button>
                        </MenuItem>
                        
                    </div>
                </MenuItems>
            </transition>
        </Menu>
    </div>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
// import { ChevronDownIcon, PencilIcon, DocumentDuplicateIcon, ArchiveBoxIcon, ArrowTopRightOnSquareIcon, TrashIcon } from '@heroicons/vue/24/outline'

import { InformacionGeneral } from '../interfaces/quienes-somos.interface';

defineProps({
    title: { type: String, required: false },
    options: Array<InformacionGeneral>
})

defineEmits({
    select: (option: InformacionGeneral) => true
})

const emit = (event: string, option: InformacionGeneral) => {
    console.log(option)
}

</script>

<style scoped></style>