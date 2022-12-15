import { createWebHashHistory, createRouter } from "vue-router";
import { AppRouteType } from "./types";
import { basicRoutes, asyncRoutes } from "./basic";

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [...basicRoutes, ...asyncRoutes] as AppRouteType[],
    scrollBehavior: () => ({ left: 0, top: 0 })
});

export default router;
