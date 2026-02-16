<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useTaskStore } from '@/stores/taskStore';
import { computed } from 'vue';
import { useFormatDate } from '@/composables/useFormatDate';


const route = useRoute()
const router = useRouter()
const store = useTaskStore()
const { formatarData } = useFormatDate()

const idDaRota = route.params.id

const tarefaEncontrada = computed(() => {
    return store.tarefas.find(t => t.id == idDaRota)
})

const voltar = () => {
    router.push('/')
}
</script>

<template>
    <div class="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10">
        <div class="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-xl">

            <div v-if="tarefaEncontrada">
                <h1 class="text-3xl font-bold text-emerald-400 mb-4">
                    {{ tarefaEncontrada.nome }}
                </h1>

                <div class="bg-gray-700 p-4 rounded mb-6">
                    <p><strong>Status:</strong> {{ tarefaEncontrada.finalizada ? 'Concluida' : 'Pendente' }}</p>
                    <p><strong>ID:</strong> {{ tarefaEncontrada.id }}</p>
                    <p><strong>Criada em:</strong>{{ formatarData(tarefaEncontrada.id) }}</p>
                </div>

                <div class="flex gap-4">
                    <button
                        @click="store.toggleTarefa(tarefaEncontrada)"
                        class="bg-emerald-600 px-4 py-2 rounded hover:bg-emerald-500"
                    >
                        {{ tarefaEncontrada.finalizada ? 'Reabrir' : 'Concluir' }}
                    </button>

                    <button
                        @click="store.removerTarefa(tarefaEncontrada.id); voltar()"
                        class="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
                    >
                        Excluir e Voltar
                    </button>
                </div>
            </div>

            <div v-else class="text-center">
                <h2 class="text-red-400 text-xl font-bold">Tarefa não encontrada!</h2>
            </div>

            <button
                @click="voltar"
                class="mt-6 text-gray-400 hover:text-white underline"
            >
                &larr; Voltar para lista
            </button>
        </div>
    </div>
</template>