import { defineStore } from "pinia";

export const useNotesStore = defineStore("notes", {
  // State: reactive state of the store
  state: () => ({
    notes: [
      {
        id: 1,
        content: "This is a sample note. You can edit or delete it.",
      },
      {
        id: 2,
        content: "any thig for note 2",
      },
    ],
  }),
  actions: {
    addNote(noteContent) {
      this.notes.push({
        id: Date.now(),
        content: noteContent,
      });
    },
    deleteNote(id) {
      this.notes = this.notes.filter((note) => note.id !== id);
    },
  },
  getters: {
    getNoteById: (state) => {
      return (id) => state.notes.find((note) => note.id === parseInt(id));
    },
  },

  // Getters: computed state based on the state
  // getters: {
  //   getNoteById: (state) => {
  //     return (id) => state.notes.find((note) => note.id === id);
  //   },
  //   totalNotes: (state) => state.notes.length,
  // },

  // // Actions: methods that can modify the state
  // actions: {
  //   addNote(note) {
  //     this.notes.push({ ...note, id: Date.now() });
  //   },
  //   deleteNote(id) {
  //     const index = this.notes.findIndex((note) => note.id === id);
  //     if (index !== -1) {
  //       this.notes.splice(index, 1);
  //     }
  //   },
  //   updateNote(id, updatedNote) {
  //     const index = this.notes.findIndex((note) => note.id === id);
  //     if (index !== -1) {
  //       this.notes[index] = { ...this.notes[index], ...updatedNote };
  //     }
  //   },
  // },
});
