<template>
  <NavBar />

  <router-view />
</template>

<script setup>
import { onMounted } from "vue";
import NavBar from "./components/NavBar.vue";
import { useNotesStore } from "./stores/notes";
const notesStore = useNotesStore();

onMounted(() => {
  notesStore.fetchNotes();
});
</script>
<style scoped>
nav ul {
  transition: all 0.3s ease-in-out;
}
</style>
