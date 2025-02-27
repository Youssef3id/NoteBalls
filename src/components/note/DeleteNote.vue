<template>
  <div
    class="fixed inset-0 flex items-center justify-center bg-[#0a0a0a47]"
    @click="handleOutsideClick"
  >
    <div class="bg-white p-6 rounded-lg w-96" @click.stop>
      <h2 class="text-lg font-semibold text-gray-800">Are you sure?</h2>
      <p class="text-gray-600 mt-2">
        Do you really want to delete this item? This action cannot be undone.
      </p>
      <div class="flex justify-end mt-4 space-x-2">
        <button
          class="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 cursor-pointer"
          @click="closeModal"
        >
          Cancel
        </button>
        <button
          class="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 cursor-pointer"
          @click="notesStore.deleteNote(props.noteId)"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
/*
import
*/
import { useNotesStore } from "@/stores/notes";

/*
store
*/
const notesStore = useNotesStore();
/*
props
*/
const props = defineProps({
  modelValue: {
    type: Boolean,
  },
  noteId: {
    type: Number,
  },
});

/**
 * emit
 */
const emit = defineEmits(["update:modelValue"]);
/**
 * close modal
 */
const closeModal = () => {
  emit("update:modelValue", false);
};

/**
 * Handle clicks outside the modal
 */
const handleOutsideClick = (event) => {
  // Check if the click is outside the modal content
  const modalContent = event.currentTarget.querySelector(".bg-white");
  if (modalContent && !modalContent.contains(event.target)) {
    console.log(props);
    closeModal();
  }
};
</script>
