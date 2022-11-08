import { createApp } from "vue";
import App from "./App.vue";

import { setupPinia } from "./stores";
import router from "./router/index";

const app = createApp(App);

const setupPlugins = () => {
    // 注册pinia
    setupPinia(app);
};

setupPlugins();
app.use(router).mount("#app");
