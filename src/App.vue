<template>
  <NavBar />

  <router-view />
</template>

<script setup>
import ViewNotes from "./views/ViewNotes.vue";
import ViewStats from "./views/ViewStats.vue";
import NavBar from "./components/NavBar.vue";
</script>
<style scoped>
nav ul {
  transition: all 0.3s ease-in-out;
}
</style>
