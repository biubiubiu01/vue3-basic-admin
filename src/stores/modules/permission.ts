import { defineStore } from "pinia";
import { store } from "../index";
import { useUserStore } from "./user";
import { AppRouteType } from "@/router/types";
import { asyncRoutes } from "@/router/basic";

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
            const { getRoleIds } = useUserStore();
            const routeList = filterAsyncRoute(asyncRoutes, getRoleIds);
            sortRoute(routeList);
            patchHomeTag(routeList);
            this.setRoute(routeList);
            return routeList;
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
    if (route.meta?.hidden) {
        return false;
    }
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

function patchHomeTag(route: AppRouteType[]) {
    if (!route || route.length === 0) return;
    route[0].meta!.close = true;
}

// 便于外部使用
export const usePermissionStoreWithOut = () => {
    return usePermissionStore(store);
};
