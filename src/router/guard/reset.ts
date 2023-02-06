import { Router } from "vue-router";
import { useAppStoreWithOut } from "@/stores/modules/app";
import { usePermissionStoreWithOut } from "@/stores/modules/permission";
import { useTagStoreWithOut } from "@/stores/modules/tagView";
import { useUserStoreWithOut } from "@/stores/modules/user";

export const createReset = (router: Router) => {
    router.afterEach((to) => {
        if (to.path === "/login") {
            const appStore = useAppStoreWithOut();
            const permissionStore = usePermissionStoreWithOut();
            const tagStore = useTagStoreWithOut();
            const userStore = useUserStoreWithOut();
            appStore.$reset();
            permissionStore.$reset();
            tagStore.$reset();
            userStore.$reset();
            return true;
        }
    });
};
