import { createWebHashHistory, createRouter } from "vue-router";
import { AppRouteType } from "./types";
import { basicRoutes } from "./basic";

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [...basicRoutes] as AppRouteType[],
    // only history
    scrollBehavior: () => ({ left: 0, top: 0 })
});

export default router;
