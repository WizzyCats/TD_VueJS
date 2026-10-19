<script setup>
import {ref} from 'vue'

const ajout = ref('');
const emit = defineEmits(['add']);

// Fonction va gérer l'action du bouton d'ajout de tâche (avec une verification si caleur vide)
function submit (){
  if(ajout.value === '') return
    ajout.value = emit('add', ajout.value);
    ajout.value = '';
}

</script>

<template>
  <form @submit.prevent="submit">
    <input v-model.trim="ajout" placeholder="Nouvelle tâche…" />
    <button>Ajouter</button>
  </form>
</template>

<style scoped>

</style>
