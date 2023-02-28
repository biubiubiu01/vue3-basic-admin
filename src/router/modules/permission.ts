import type { AppRouteType } from "@/router/types";

const permission: AppRouteType[] = [
    {
        path: "/permission",
        name: "Permission",
        component: () => import("@/layouts/index.vue"),
        redirect: "/permission/page",
        meta: {
            title: "权限控制",
            icon: "svg-permission",
            sort: 2,
            permission: "admin_permission"
        },
        children: [
            {
                path: "page",
                name: "PermissionPage",
                component: () => import("@/views/permission/page.vue"),
                meta: {
                    title: "页面权限",
                    sort: 1,
                    permission: "admin_permission_page",
                    icon: ""
                }
            },
            {
                path: "button",
                name: "PermissionButton",
                component: () => import("@/views/permission/button.vue"),
                meta: {
                    title: "按钮权限",
                    sort: 2,
                    permission: "admin_permission_button",
                    icon: ""
                }
            }
        ]
    }
];

export default permission;
