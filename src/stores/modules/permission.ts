import { defineStore } from "pinia";
import { store } from "../index";
import { AppRouteType } from "@/router/types";

interface PermissionState {
    route: AppRouteType[];
}

export const usePermission = defineStore({
    id: "permission",
    persist: true,
    state: (): PermissionState => ({
        route: []
    }),
    getters: {},
    actions: {}
});

// 便于外部使用
export const usePermissionStoreWithOut = () => {
    return usePermission(store);
};
