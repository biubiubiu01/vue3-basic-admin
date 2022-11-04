import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import type { App } from "vue";

const pinia = createPinia();

export function setupPinia(app: App<Element>) {
  pinia.use(piniaPluginPersistedstate);
  app.use(pinia);
}
