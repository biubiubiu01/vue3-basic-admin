import { defineStore } from "pinia";
import { store } from "../index";
import { useUserStore } from "./user";
import { AppRouteType } from "@/router/types";
import { asyncRoutes } from "@/router/basic";
import router from "@/router/index";
import { deepClone } from "@/utils";

interface PermissionState {
    route: AppRouteType[];
}

export const usePermissionStore = defineStore({
    id: "permission",
    state: (): PermissionState => ({
        route: []
    }),
    getters: {
        getRoute(): AppRouteType[] {
            return this.route;
        }
    },
    actions: {
        setRoute(routeList: AppRouteType[]) {
            this.route = routeList;
        },

        async initRoute() {
            const useStore = useUserStore();
            const routeList = filterAsyncRoute(asyncRoutes, useStore.getRoleIds);
            sortRoute(routeList);
            this.setRoute(routeList);
            return routeList;
        },

        async changeRole() {
            const routeList = await this.initRoute();
            routeList.forEach((route) => {
                router.addRoute(route);
            });
        }
    }
});

function filterAsyncRoute(routes: AppRouteType[], role: string[]): AppRouteType[] {
    const arr: AppRouteType[] = [];
    routes.forEach((item) => {
        const temp = { ...item };
        if (hasRole(temp, role)) {
            if (temp.children) {
                temp.children = filterAsyncRoute(temp.children, role);
            }
            arr.push(temp);
        }
    });
    return arr;
}

function hasRole(route: AppRouteType, role: string[]) {
    if (route.meta && route.meta.permission) {
        return role.includes(route?.meta?.permission);
    }
    return true;
}

function sortRoute(route: AppRouteType[]) {
    route.sort((a, b) => {
        return a.meta!.sort! - b.meta!.sort!;
    });
    route.forEach((item) => {
        if (item.children) {
            sortRoute(item.children);
        }
    });
}

// 便于外部使用
export const usePermissionStoreWithOut = () => {
    return usePermissionStore(store);
};
