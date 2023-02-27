import { Router } from "vue-router";
import { useUserStoreWithOut } from "@/stores/modules/user";
import { usePermissionStoreWithOut } from "@/stores/modules/permission";
import { WHITE_LIST } from "../basic";

export const createPermission = (router: Router) => {
    router.beforeEach(async (to, from, next) => {
        const useStore = useUserStoreWithOut();
        const { getToken: token } = storeToRefs(useStore);
        const usePermissionStore = usePermissionStoreWithOut();
        const { getRoute } = usePermissionStore;

        // 白名单
        if (to.name && WHITE_LIST.includes(<string>to.name)) {
            next();
            return;
        }

        // 没有token
        if (!unref(token)) {
            if (!to?.meta?.permission && getRoute.length > 0) {
                next();
                return;
            }
            const redirectData: { path: string; replace: boolean; query?: any } = {
                path: "/login",
                replace: true
            };
            if (to.path) {
                redirectData.query = {
                    redirect: to.path
                };
            }
            next(redirectData);
            return;
        }

        // 是否已经挂载过路由
        if (getRoute.length > 0) {
            if (router.hasRoute(<string>to.name)) {
                next();
            } else {
                next(getRoute[0]);
            }
            return;
        }

        const routeList = await usePermissionStore.initRoute();
        routeList.forEach((route) => {
            router.addRoute(route);
        });

        let redirectPath = (from.query.redirect || to.path) as string;
        if (redirectPath === "/dashboard") {
            redirectPath = routeList[0].path;
        }
        const redirect = decodeURIComponent(redirectPath);
        const nextData = to.path === redirect ? { ...to, replace: true } : { path: redirect };
        next(nextData);
    });
};
