<template>
  <AddEditNote v-model="newNote" bgColor="#344aad">
    <template #button>
      <div class="flex justify-between">
        <button
          class="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
          :class="{
            'opacity-75 cursor-not-allowed': newNote.length === 0,
            'cursor-pointer hover:scale-105 transition-all duration-300':
              newNote.length > 0,
          }"
          @click="addNote"
          :disabled="newNote.length === 0"
        >
          Save
        </button>
        <button
          @click="$router.back()"
          class="bg-red-500 text-white px-4 py-2 rounded-md hover:scale-105 transition-all duration-300"
        >
          cancel
        </button>
      </div>
    </template>
  </AddEditNote>
</template>

<script setup>
/* 
imports
*/
import { ref } from "vue";
import AddEditNote from "@/components/note/AddEditNote.vue";
import { useRoute } from "vue-router";
import { useNotesStore } from "@/stores/notes";

/*
route
*/
const route = useRoute();

/*  
newNote
*/
const newNote = ref("");
const notesStore = useNotesStore();
newNote.value = notesStore.getNoteById(route.params.id).content;
</script>
