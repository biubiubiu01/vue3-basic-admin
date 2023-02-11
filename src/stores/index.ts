import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import type { App } from "vue";
import { usePermissionStoreWithOut } from "@/stores/modules/permission";
import { useTagStoreWithOut } from "@/stores/modules/tagView";
import { useUserStoreWithOut } from "@/stores/modules/user";

const store = createPinia();

export function setupPinia(app: App<Element>) {
    store.use(piniaPluginPersistedstate);
    app.use(store);
}

export function storeReset() {
    const permissionStore = usePermissionStoreWithOut();
    const tagStore = useTagStoreWithOut();
    const userStore = useUserStoreWithOut();
    permissionStore.$reset();
    tagStore.$reset();
    userStore.$reset();
}

export { store };
