import type { AppRouteType } from "@/router/types";

const page: AppRouteType[] = [
    {
        path: "/page",
        name: "Page",
        component: () => import("@/layouts/index.vue"),
        redirect: "/page/403",
        meta: {
            title: "页面",
            icon: "svg-page",
            sort: 7,
            permission: "admin_page"
        },
        children: [
            {
                path: "403",
                name: "Error403",
                component: () => import("@/views/page/403.vue"),
                meta: {
                    title: "403",
                    sort: 1,
                    permission: "admin_page_403",
                    icon: ""
                }
            },
            {
                path: "404",
                name: "Error404",
                component: () => import("@/views/page/404.vue"),
                meta: {
                    title: "404",
                    sort: 2,
                    permission: "admin_page_404",
                    icon: ""
                }
            },
            {
                path: "500",
                name: "Error500",
                component: () => import("@/views/page/500.vue"),
                meta: {
                    title: "500",
                    sort: 3,
                    permission: "admin_page_500",
                    icon: ""
                }
            },
            {
                path: "success",
                name: "Success",
                component: () => import("@/views/page/success.vue"),
                meta: {
                    title: "成功页",
                    sort: 4,
                    permission: "admin_page_success",
                    icon: ""
                }
            },
            {
                path: "error",
                name: "Error",
                component: () => import("@/views/page/error.vue"),
                meta: {
                    title: "失败页",
                    sort: 5,
                    permission: "admin_page_error",
                    icon: ""
                }
            },
            {
                path: "table",
                name: "PageTable",
                component: () => import("@/views/page/table.vue"),
                meta: {
                    title: "列表页",
                    sort: 6,
                    permission: "admin_page_table",
                    icon: ""
                }
            }
        ]
    }
];

export default page;
