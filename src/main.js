import { createApp } from 'vue';
import App from './App.vue';
import { plugin as formkitPlugin } from '@formkit/vue';
import { createPinia } from 'pinia';
import { defaultConfig } from '@formkit/vue';
import './index.css';
import StudentsTable from './components/StudentsTable.vue';
import PokeTable from './components/PokeTable.vue';

const app = createApp(StudentsTable);

const pinia = createPinia();
app.use(pinia);
app.use(formkitPlugin, defaultConfig());
app.mount('#app');
