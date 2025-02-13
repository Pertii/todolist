<script setup lang="ts">
import { useTaskStore } from '@/store/taskStore';

const taskStore = useTaskStore();
</script>

<template>
  <div>
    <h1>Le tue Task</h1>
    <ul>
      <li v-for="task in taskStore.tasks" :key="task.id">
        <span :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">
          {{ task.title }}
        </span>
        <button @click="taskStore.toggleTask(task.id)">
          {{ task.completed ? 'Ripristina' : 'Completa' }}
        </button>
        <button @click="taskStore.removeTask(task.id)">❌</button>
      </li>
    </ul>
    <button @click="taskStore.addTask('Nuova Task')">Aggiungi Task</button>
  </div>
</template>