<script setup>
import {computed} from "vue";
import {storeToRefs} from "pinia";
import {useTodoStore} from "@/stores/todo.js";

const props = defineProps({ id: String })
const store = useTodoStore();
const {todos} = storeToRefs(store);

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
