<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/todos">Liste</RouterLink>
        <RouterLink to="/about">A Propos</RouterLink>
        <RouterLink to="/login">Login/Logout</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>

<style scoped>
/* Les transitions se trouve dans le fichier main.css en début de fichier après les imports. */
</style>
