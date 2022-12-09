import { createWebHashHistory, createRouter, RouteRecordRaw } from "vue-router";
import LAYOUT from "@/layouts/default/index.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: LAYOUT
    }
];

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
