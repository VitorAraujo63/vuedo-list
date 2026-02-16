<script setup>
import { ref, onMounted } from 'vue';

const frase = ref(null)
const carregando = ref(true)
const erro = ref(false)

const buscarFrase = async () => {
    carregando.value = true
    erro.value = false

    try {
        const resposta = await fetch('https://dummyjson.com/quotes/random')

        const dados = await resposta.json()

        frase.value = dados
    } catch (e) {
        console.error("Erro ao buscar frase: ", e)
        erro.value = true
    } finally {
        carregando.value = false
    }
}

onMounted(() => {
    buscarFrase()
})

</script>


<template>
    <div class="bg-gray-800 p-4 rounded-lg mb-6 border-l-4 border-purple-500 shadow-md">
        <h3 class="text-purple-400 text-sm font-bold uppercase mb-2">
            Ispiração do dia
        </h3>

        <div v-if="carregando" class="animate-pulse flex space-x-4">
            <div class="h-2 bg-gray-600 rounded w-3/4"></div>
        </div>

        <div v-else-if="erro" class="text-red-400 text-sm">
            <p>Poxa, não consegui buscar inspiração hoje.</p>
            <button
                @click="buscarFrase"
                class="mt-2 text-xs underline hover:text-white"
            >
                Tentar novamente
            </button>
        </div>

        <div v-else class="text-gray-300 italic">
            "{{ frase.quote }}"
            <div class="text-right text-xs text-gray-500 mt-2 not-italic">
                - {{ frase.author }}
            </div>
        </div>
    </div>
</template>