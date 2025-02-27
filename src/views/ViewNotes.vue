<template>
  <AddEditNote v-model="newNote">
    <template #button>
      <button
        class="bg-green-500 text-white px-4 py-2 rounded-md"
        :class="{
          'opacity-75 cursor-not-allowed': newNote.length === 0,
          'cursor-pointer': newNote.length > 0,
        }"
        @click="addNote"
        :disabled="newNote.length === 0"
      >
        Add New Note
      </button>
    </template>
  </AddEditNote>

  <Note
    v-for="note in notesStore.notes"
    :key="note.id"
    :note="note"
    @deleteNote="deleteNote"
  />
</template>

<script setup>
/* import */
import { useNotesStore } from "@/stores/notes";
import AddEditNote from "@/components/note/AddEditNote.vue";
import Note from "@/components/note/Note.vue";

import { ref } from "vue";

/*
stores
*/
const notesStore = useNotesStore();

/*
notes
*/
const newNote = ref("");

/*
methods
*/
const addNote = () => {
  notesStore.addNote(newNote.value);
  newNote.value = "";
};
</script>
