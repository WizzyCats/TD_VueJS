<script setup>
import {useTodoStore} from "@/stores/todo.js";
import {storeToRefs} from "pinia";
import TodoItem from "@/components/TodoItem.vue";
import TodoForm from "@/components/TodoForm.vue";

const store = useTodoStore();
const {todos, remaining, loading, error} = storeToRefs(store);
const {toggleTodo, removeTodo, addTodo} = store;

</script>

<template>
  <div>
    <h1>Il reste {{remaining}} tâche(s)</h1>
    <p v-if="loading">Chargement des taches en cours</p>
    <p v-if="error">Erreur {{error.message}}</p>
    <TodoForm @add="addTodo"/>
    <TransitionGroup name="list" tag="ul">
      <TodoItem v-for=" todo in todos" :key="todo.id" :todo="todo" @toggle="toggleTodo" @delete="removeTodo"/>
    </TransitionGroup>
  </div>
 </template>

<style scoped>

</style>
