import { createApp } from "vue";
import { createPinia } from "pinia";
import axios from "axios";
import "./assets/style.css";
import App from "./App.vue";
import router from "./router";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount("#app");
