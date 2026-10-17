<script setup>
defineProps({
  todo: { type: Object, required: true}
})
const emit = defineEmits(['toggle', 'delete'])

</script>

<template>
  <li>
    <router-link :to="{name: 'detail', params:{id:todo.id}}">Details {{ todo.text }}</router-link>
    <input type="checkbox" :checked="todo.done" @change="emit('toggle', todo.id)">
    <button @click="emit('delete', todo.id)">Supprimer</button>
  </li>

</template>

<style scoped>

</style>
