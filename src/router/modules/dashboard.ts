import type { AppRouteType } from "@/router/types";
import LAYOUT from "@/layouts/default/index.vue";

const dashboard: AppRouteType[] = [
    {
        path: "/dashboard",
        name: "Dashboard",
        component: LAYOUT,
        redirect: "/dashboard/analysis",
        meta: {
            title: "首页",
            icon: "svg-dashboard"
        },
        children: [
            {
                path: "analysis",
                name: "Analysis",
                component: () => import("@/views/dashboard/analysis/index.vue"),
                meta: {
                    title: "分析页"
                }
            },
            {
                path: "workbench",
                name: "Workbench",
                component: () => import("@/views/dashboard/workbench/index.vue"),
                meta: {
                    title: "工作台"
                }
            }
        ]
    }
];

export default dashboard;
