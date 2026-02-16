<script setup>
import { ref, computed } from 'vue'
import ProgressBar from '../components/ProgressBar.vue'
import { useTaskStore } from '../stores/taskStore';
import { useFormatDate } from '../composables/useFormatDate'
import QuoteWidget from '@/components/QuoteWidget.vue';
import Modal from '@/components/Modal.vue';

const store = useTaskStore()
const tituloDoProjeto = ref('Minha VueDo List');
const novaTarefa = ref('')
const { formatarData } = useFormatDate()

const mostrarModal = ref(false)
const idParaExcluir = ref(null)

const adicionarTarefaLocal = () => {
  if(novaTarefa.value.trim() === '') return

  store.adicionarTarefa(novaTarefa.value)

  novaTarefa.value = ''
}

const temTarefas = computed(() => {
  return store.tarefas.length > 0
})

const abrirModalExclusao = (id) => {
    idParaExcluir.value = id
    mostrarModal.value = true
}

const confirmarExclusao = () => {
    if (idParaExcluir.value) {
        store.removerTarefa(idParaExcluir.value)
        mostrarModal.value = false
        idParaExcluir.value = null
    }
}

</script>

<template>
  <div class="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10 px-4">
    
    <div class="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-xl">

      <div class="mb-6 text-center">
        <h1 class="text-3xl font-bold text-emerald-400 mb-4">
          {{ tituloDoProjeto }}
        </h1>

        <Transition
            enter-active-class="transition duration-1000 ease-out"
            enter-from-class="opacity-0 -traslate-y-4"
            enter-to-class="opacity-100 translate-y-0"
        >
            <QuoteWidget />
        </Transition>
      </div>

      <p class="text-gray-400 mb-4 text-sm">
        Você tem <span class="font-bold text-emerald-400"> {{ store.tarefas.filter(t => !t.finalizada).length }} tarefas pendentes</span>
      </p>

      <div class="flex gap-2 mb-8">
        <input 
          v-model="novaTarefa"
          type="text"
          placeholder="Digite uma nova tarefa..."
          class="flex-1 p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder-gray-500"
          @keyup.enter="adicionarTarefaLocal"
        >
        <button 
          @click="adicionarTarefaLocal"
          class="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2 rounded font-bold transition-colors"
        >
          +
        </button>
      </div>

        <div v-if="temTarefas">
            <TransitionGroup 
                tag="div" 
                class="space-y-3 relative"
                enter-active-class="transition-all duration-500 ease-out"
                enter-from-class="opacity-0 -translate-x-10"
                enter-to-class="opacity-100 translate-x-0"
                leave-active-class="transition-all duration-500 ease-in absolute w-full"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0 scale-90"
                move-class="transition-all duration-500 ease-in-out"
            >
                <div
                    v-for="tarefa in store.tarefas"
                    :key="tarefa.id"
                    class="bg-gray-700 p-4 rounded flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 w-full"
                >
                    <div class="flex flex-col">
                        <span 
                        class="font-medium text-lg"
                        :class="{ 'line-through text-gray-500': tarefa.finalizada }"
                        >
                        {{ tarefa.nome }}
                        </span>
                        
                        <div class="flex gap-2 items-center mt-1">
                            <span class="text-[10px] text-gray-400 bg-gray-800 px-2 py-0.5 rounded">
                                📅 {{ formatarData(tarefa.id) }}
                            </span>
                            <span class="text-[10px] uppercase font-bold" :class="tarefa.finalizada ? 'text-emerald-400' : 'text-orange-400'">
                                {{ tarefa.finalizada ? 'Concluída' : 'Pendente' }}
                            </span>
                        </div>
                    </div>

                    <div class="flex gap-2 self-end sm:self-center">
                        <button 
                            @click="store.toggleTarefa(tarefa)" 
                            class="p-2 rounded transition hover:bg-gray-600"
                            :title="tarefa.finalizada ? 'Reabrir' : 'Concluir'"
                        >
                        {{ tarefa.finalizada ? '↩️' : '✅'}}
                        </button>

                        <RouterLink
                            :to="{ name: 'detalhes', params: { id: tarefa.id } }"
                            class="p-2 rounded text-blue-400 hover:bg-gray-600 hover:text-blue-300 transition"
                            title="Detalhes"
                        >
                            ℹ️
                        </RouterLink>

                        <button 
                            @click="abrirModalExclusao(tarefa.id)"
                            class="p-2 rounded text-red-400 hover:bg-gray-600 hover:text-red-300 transition"
                            title="Excluir"
                        >
                            🗑️
                        </button>
                    </div>
                </div>
            </TransitionGroup>
        </div>

      <div v-else class="text-center py-10 text-gray-500">
        <p class="text-4xl mb-2">🎉</p>
        <p>Tudo limpo! Aproveite seu dia.</p>
      </div>
      
      <div class="mt-6 pt-6 border-t border-gray-700">
         <ProgressBar :valor="store.progresso" cor="emerald"/>
      </div>

    </div>
  </div>

    <Modal :show="mostrarModal" @close="mostrarModal = false">
        <div class="text-center">
            <h2 class="text-xl font-bold text-white mb-2">Tem certeza?</h2>
            <p class="text-gray-400 mb-6">Essa ação não pode ser desfeita.</p>

            <div class="flex justify-center gap-4">
                <button
                    @click="mostrarModal = false"
                    class="bg-gray-600 hover:bg-gray-500 px-4 py-2 rounded text-white"
                >
                    Cancelar
                </button>

                <button
                    @click="confirmarExclusao"
                    class="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white font-bold"
                >
                    Sim, excluir!
                </button>
            </div>
        </div>
    </Modal>
</template>

<style scoped></style>
