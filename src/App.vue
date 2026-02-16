<script setup>
  import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="min-h-screen bg-gray-900 text-white font-sans">

    <header class="bg-gray-800 border-b border-gray-700 p-4 mb-6">
      <nav class="container mx-auto flex gap-4">
        <RouterLink to="/" class="hover:text-emerald-400">Minhas Tarefas</RouterLink>

        <RouterLink to="/sobre" class="hover:text-emerald-400">Sobre</RouterLink>
      </nav>
    </header>

    <main class="container mx-auto p-4">
      <RouterView />
    </main>

  </div>
</template>