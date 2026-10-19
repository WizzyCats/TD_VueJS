// tits prérequis
import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import {useFetch} from "@/composables/useFetch.js";

const API_URL = import.meta.env.VITE_API_URL;
let nextId = 4;

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
      id: nextId++,
      text: text,
      done: false
    })
  }

  // ici on gère le retour de l'api par la catégorie publisher et on garde les 5 premières valeurs de son sous tableau catégories dont chacune devient une tache.
  const { data, loading, error } = useFetch(API_URL);

  watch(data, (json) => {
    const publishers = json.facets.find(f => f.name === 'publisher')
    publishers.facets
      .slice(0, 5)
      .forEach(p => addTodo(p.name))
  })

  return { todos, remaining, toggleTodo, removeTodo, addTodo, loading, error }
})

