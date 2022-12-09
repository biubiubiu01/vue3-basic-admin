import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import type { App } from "vue";

const store = createPinia();

export function setupPinia(app: App<Element>) {
    store.use(piniaPluginPersistedstate);
    app.use(store);
}

export { store };
