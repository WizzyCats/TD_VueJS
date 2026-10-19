<script setup>

import {useRouter} from "vue-router";
import {ref} from 'vue';

const router = useRouter();
const isLogged = ref(!!localStorage.getItem('token'))

function login(){
  localStorage.setItem('token', '1');
  router.push('/todos');
  isLogged.value =true;
}

function logout(){
  localStorage.removeItem('token');
  router.push('/');
  isLogged.value = false;
}

</script>

<template>
  <div>
    <h1>Connexion</h1>
    <div class="actions">
      <button v-if="!isLogged" @click="login()">Se Connecter</button>
      <button v-else @click="logout()">Se déconnecter</button>
    </div>
  </div>
</template>

<style scoped>
.actions {
  display: flex;
  justify-content: center;
}
</style>
