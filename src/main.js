import { createApp } from "vue";
import axios from "axios";
import "./assets/style.css";
import App from "./App.vue";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

createApp(App).mount("#app");
