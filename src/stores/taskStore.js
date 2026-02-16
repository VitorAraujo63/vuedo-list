import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export const useTaskStore = defineStore('task', () => {

  const tarefas = ref([])

  const progresso = computed(() => {
    if (tarefas.value.length === 0) return 0
    const total = (tarefas.value.filter(t => t.finalizada).length / tarefas.value.length) * 100
    return total
  })

  const adicionarTarefa = (nome) => {
    if(nome.trim() === '') return
    tarefas.value.push({
      id: Date.now(),
      nome: nome,
      finalizada: false
    })
  }

  const removerTarefa = (id) => {
    tarefas.value = tarefas.value.filter(t => t.id !== id)
  }

  const toggleTarefa = (tarefa) => {
    tarefa.finalizada = !tarefa.finalizada
  }


  const tarefasSalvas = localStorage.getItem('minhas-tarefas-vue')
  if(tarefasSalvas) {
    tarefas.value = JSON.parse(tarefasSalvas)
  }

  watch(tarefas, (novoValor) => {
    localStorage.setItem('minhas-tarefas-vue', JSON.stringify(novoValor))
  }, { deep: true })

  return {
    tarefas,
    progresso,
    adicionarTarefa,
    removerTarefa,
    toggleTarefa
  }
})