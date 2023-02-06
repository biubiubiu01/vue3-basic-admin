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
            sort: 5,
            permission: "admin_system"
        },
        children: [
            {
                path: "account",
                name: "Account",
                component: () => import("@/views/system/account/index.vue"),
                meta: {
                    title: "用户管理",
                    icon: "",
                    sort: 1,
                    permission: "admin_system_user"
                }
            },
            {
                path: "role",
                name: "Role",
                component: () => import("@/views/system/role/index.vue"),
                meta: {
                    title: "角色管理",
                    icon: "",
                    sort: 2,
                    permission: "admin_system_role"
                }
            },
            {
                path: "department",
                name: "Department",
                component: () => import("@/views/system/department/index.vue"),
                meta: {
                    title: "部门管理",
                    icon: "",
                    sort: 3,
                    permission: "admin_system_dept"
                }
            },
            {
                path: "menu",
                name: "Menu",
                component: () => import("@/views/system/menu/index.vue"),
                meta: {
                    title: "菜单管理",
                    icon: "",
                    sort: 4,
                    permission: "admin_system_menu"
                }
            },
            {
                path: "api",
                name: "Api",
                component: () => import("@/views/system/api/index.vue"),
                meta: {
                    title: "接口管理",
                    icon: "",
                    sort: 5,
                    permission: "admin_system_api"
                }
            },
            {
                path: "dictionary-key",
                name: "DictionaryKey",
                component: () => import("@/views/system/dictionary-key/index.vue"),
                meta: {
                    title: "字典管理",
                    icon: "",
                    sort: 6,
                    permission: "admin_system_dict"
                }
            },
            {
                path: "dictionary-data/:type",
                name: "DictionaryData",
                component: () => import("@/views/system/dictionary-data/index.vue"),
                meta: {
                    title: "字典数据",
                    hidden: true
                }
            }
        ]
    }
];

export default system;
