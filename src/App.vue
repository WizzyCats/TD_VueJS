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

  <RouterView />
</template>

<style scoped>
</style>
