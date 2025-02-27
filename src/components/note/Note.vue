<template>
  <div
    className="bg-white shadow-md rounded-md p-4 w-full max-w-2xl mx-auto border border-gray-200 mt-5"
  >
    <p className="text-gray-800">{{ note.content }}</p>
    <div className="flex justify-end items-center mt-3 space-x-2">
      <div class="flex px-3 py-1 justify-end mb-2">
        <small class="text-gray-500">{{ characterLength }} characters</small>
      </div>
      <RouterLink
        :to="`/editNote/${props.note.id}`"
        className="px-3 py-1 bg-[#EFF5FB] text-[#296FA8] rounded-md hover:scale-105 transition cursor-pointer"
      >
        Edit
      </RouterLink>
      <button
        className="px-3 py-1 bg-[#FEECF0] text-[#DA3335] rounded-md hover:scale-105 transition cursor-pointer"
        @click="modals.isDeleteNote = true"
      >
        Delete
      </button>
      <DeleteNote
        v-if="modals.isDeleteNote"
        v-model="modals.isDeleteNote"
        :noteId="note.id"
      />
    </div>
  </div>
</template>

<script setup>
/* import */
import { computed, reactive } from "vue";

import DeleteNote from "./DeleteNote.vue";
/*
props
*/
const props = defineProps({
  note: {
    type: Object,
  },
});

/**
 * computed
 */
const characterLength = computed(() => {
  return props.note.content.length;
});

/**
 * models
 */
const modals = reactive({
  isDeleteNote: false,
});
</script>
