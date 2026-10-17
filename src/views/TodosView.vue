<script setup>
import {useTodoStore} from "@/stores/todo.js";
import {storeToRefs} from "pinia";
import TodoItem from "@/components/TodoItem.vue";
import TodoForm from "@/components/TodoForm.vue";

const store = useTodoStore();
const {todos, remaining} = storeToRefs(store);
const {toggleTodo, removeTodo, addTodo} = store;

</script>

<template>
  <h1>Il reste {{remaining}} tâche(s)</h1>
  <TodoForm @add="addTodo"/>
  <ul>
    <TodoItem v-for=" todo in todos" :key="todo.id" :todo="todo" @toggle="toggleTodo" @delete="removeTodo"/>
  </ul>

</template>

<style scoped>

</style>
