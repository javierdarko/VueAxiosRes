import { createApp } from "vue";
import App from "./App.vue";
import { plugin as formkitPlugin } from "@formkit/vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { defaultConfig } from "@formkit/vue";
import "./index.css";

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);
app.use(formkitPlugin, defaultConfig());
app.mount("#app");
