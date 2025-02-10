import { defineStore } from 'pinia';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [] as Task[],
  }),

  getters: {
    completedTasks: (state) => state.tasks.filter(task => task.completed),
    pendingTasks: (state) => state.tasks.filter(task => !task.completed),
  },

  actions: {
    addTask(title: string) {
      this.tasks.push({
        id: Date.now(),
        title,
        completed: false,
      });
    },
    toggleTask(id: number) {
      const task = this.tasks.find(task => task.id === id);
      if (task) {
        task.completed = !task.completed;
      }
    },
    removeTask(id: number) {
      this.tasks = this.tasks.filter(task => task.id !== id);
    }
  }
});
