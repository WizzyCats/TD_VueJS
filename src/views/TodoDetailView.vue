<script setup>
import {computed} from "vue";
import {storeToRefs} from "pinia";
import {useTodoStore} from "@/stores/todo.js";


const props = defineProps({ id: String }) // Récupère la prop par id de la tâche depuis l’URL
const store = useTodoStore(); // On récupère les tâches et fonctions contenues dans le store
const {todos} = storeToRefs(store); // On sort la liste et on la garde réactive

// On parcours la liste et on renvoi la tache dont l'id correspond ou un undefine si id pas dans la liste après avoir converti l’id de l’URL en nombre
const todo = computed(() => todos.value.find(t => t.id === Number(props.id)))

</script>

<template>
  <div>
    <div v-if="todo">
      <h1>{{ todo.text }}</h1>
      <p v-if="todo.done">Terminée</p>
      <p v-else>En Cours</p>
    </div>
    <p v-else>Tâche Introuvable</p>
  </div>
</template>

<style scoped>

</style>
