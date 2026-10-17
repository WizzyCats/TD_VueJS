// tits prérequis
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// Liste des tâches et des actions
export const useTodoStore = defineStore('todo', () => {
  const todos = ref([
    {
      id: 1,
      text: "Tache 1",
      done: false
    },
    {
      id: 2,
      text: "Tache 2",
      done: false
    },
    {
      id: 3,
      text: "Tache 3",
      done: true
    }
  ])

  // Ici on gère les actions et les tâches pas encore terminées
  const remaining = computed(() => todos.value.filter(t => !t.done).length)

  function toggleTodo(id) {
    const todo = todos.value.find(t => t.id === id)
    todo.done = !todo.done
  }

  function removeTodo(id) {
    todos.value = todos.value.filter(t => t.id !== id)
  }

  function addTodo(text) {
    todos.value.push({
      id: Date.now(),
      text: text,
      done: false
    })
  }

  return { todos, remaining, toggleTodo, removeTodo, addTodo }
})
