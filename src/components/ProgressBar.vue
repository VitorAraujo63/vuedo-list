<script setup>
import { computed } from 'vue';

const props = defineProps({
    valor: {
        type: Number,
        default: 0
    },
    cor: {
        type: String,
        default: "emerald"
    }
})

const classesDeCor = {
    emerald: 'bg-emerald-500',
    red: 'bg-red-500',
    blue: 'bg-blue-500',
    orange: 'bg-orange-500',
}

const corAtual = computed(() => {
    return classesDeCor[props.cor] || classesDeCor.emerald
})
</script>

<template>
    <div class="w-full bg-gray-700 rounded-full h-4 mb-6">
        <div
            :class="[corAtual, 'h-4 rounded-full transition-all duration-500 ease-out']"
            :style="{ width: valor + '%' }"
        >
        </div>
    </div>
</template>