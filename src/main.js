import { createApp } from "vue";
import App from "./App.vue";
import { plugin as formkitPlugin } from "@formkit/vue";
import { createPinia } from "pinia";
import { defaultConfig } from "@formkit/vue";
import "./index.css";

const app = createApp(App);

const pinia = createPinia();
app.use(pinia);
app.use(formkitPlugin, defaultConfig());
app.mount("#app");
