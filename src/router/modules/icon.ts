import type { AppRouteType } from "@/router/types";
import LAYOUT from "@/layouts/index.vue";

const dashboard: AppRouteType[] = [
    {
        path: "/icon",
        name: "Icon",
        component: LAYOUT,
        redirect: "/icon/index",
        meta: {
            title: "图标",
            icon: "svg-icon",
            hideChildren: true,
            sort: 2,
            permission: "admin_icon"
        },
        children: [
            {
                path: "index",
                name: "iconPage",
                component: () => import("@/views/icon/index.vue"),
                meta: {
                    title: "图标"
                }
            }
        ]
    }
];

export default dashboard;
