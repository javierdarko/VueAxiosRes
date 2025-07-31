import { createApp } from "vue";
import App from "./App.vue";
import { plugin, defaultConfig } from '@formkit/vue'
import { myFormkitConfig } from "../formkit.config.js"; // ajusta ruta si está en raíz
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import "./index.css";

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);

app.use(plugin, defaultConfig(myFormkitConfig));

app.mount("#app");
