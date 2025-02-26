import { createRouter, createWebHashHistory } from "vue-router";

// Import your views/pages
// Assuming you have or will create a Home.vue component in the views folder
import ViewStats from "../views/ViewStats.vue";
import ViewNotes from "../views/ViewNotes.vue";
import ViewEditNote from "../views/ViewEditNote.vue";
// Define your routes
const routes = [
  {
    path: "/",
    name: "notes",
    component: ViewNotes,
  },
  {
    path: "/stats",
    name: "stats",
    component: ViewStats,
  },
  {
    path: "/editNote/:id",
    name: "editNote",
    component: ViewEditNote,
  },
];

// Create router instance
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
