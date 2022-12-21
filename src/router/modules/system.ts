import type { AppRouteType } from "@/router/types";
import LAYOUT from "@/layouts/index.vue";

const system: AppRouteType[] = [
    {
        path: "/system",
        name: "System",
        component: LAYOUT,
        redirect: "/system/account",
        meta: {
            title: "系统管理",
            icon: "setting",
            sort: 4
        },
        children: [
            {
                path: "account",
                name: "Account",
                component: () => import("@/views/system/account/index.vue"),
                meta: {
                    title: "用户管理"
                }
            },
            {
                path: "role",
                name: "Role",
                component: () => import("@/views/system/role/index.vue"),
                meta: {
                    title: "角色管理"
                }
            },
            {
                path: "department",
                name: "Department",
                component: () => import("@/views/system/department/index.vue"),
                meta: {
                    title: "部门管理"
                }
            },
            {
                path: "menu",
                name: "Menu",
                component: () => import("@/views/system/menu/index.vue"),
                meta: {
                    title: "菜单管理"
                }
            },
            {
                path: "api",
                name: "Api",
                component: () => import("@/views/system/api/index.vue"),
                meta: {
                    title: "接口管理"
                }
            }
        ]
    }
];

export default system;
