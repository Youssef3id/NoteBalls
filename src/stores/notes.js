import { defineStore } from "pinia";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/includes/firebase";

export const useNotesStore = defineStore("notes", {
  // State: reactive state of the store
  state: () => ({
    notes: [],
  }),
  actions: {
    async fetchNotes() {
      const notesRef = collection(db, "notes");

      onSnapshot(notesRef, (snapshot) => {
        this.notes = [];

        snapshot.forEach((doc) => {
          this.notes.unshift({
            id: doc.id,
            content: doc.data().content,
          });
        });
      });
    },
    async addNote(noteContent) {
      const docRef = await addDoc(collection(db, "notes"), {
        id: Date.now().toString(),
        content: noteContent,
      });
    },

    async deleteNote(noteId) {
      try {
        await deleteDoc(doc(db, "notes", noteId));
        console.log(`Note with ID ${noteId} deleted successfully!`);
      } catch (error) {
        console.error("Error deleting note:", error);
      }
    },
    async updateNote(noteId, newContent) {
      try {
        const noteRef = doc(db, "notes", noteId);
        await updateDoc(noteRef, {
          content: newContent,
        });
        console.log(`Note with ID ${noteId} updated successfully!`);
      } catch (error) {
        console.error("Error updating note:", error);
      }
    },
  },
  getters: {
    getNoteById: (state) => {
      return (id) => state.notes.find((note) => note.id === id);
    },
  },
});
