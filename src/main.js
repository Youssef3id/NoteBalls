import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Import router from the new file
import { createPinia } from "pinia"; // Import Pinia

// Create the Pinia instance
const pinia = createPinia();

// Use Pinia in your application
createApp(App)
  .use(router)
  .use(pinia) // Add Pinia to your app
  .mount("#app");
