import type { AppRouteType } from "@/router/types";

const systemLog: AppRouteType[] = [
    {
        path: "/system-log",
        name: "SystemLog",
        component: () => import("@/layouts/index.vue"),
        redirect: "/system-log/operation-log",
        meta: {
            title: "系统日志",
            icon: "svg-log",
            sort: 9,
            permission: "admin_system_log"
        },
        children: [
            {
                path: "operation-log",
                name: "OperationLog",
                component: () => import("@/views/system-log/operation-log/index.vue"),
                meta: {
                    title: "操作日志",
                    icon: "",
                    sort: 1,
                    permission: "admin_system_log_operation"
                }
            },
            {
                path: "error-log",
                name: "ErrorLog",
                component: () => import("@/views/system-log/error-log/index.vue"),
                meta: {
                    title: "错误日志",
                    icon: "",
                    sort: 2,
                    permission: "admin_system_log_error"
                }
            },
            {
                path: "login-log",
                name: "LoginLog",
                component: () => import("@/views/system-log/login-log/index.vue"),
                meta: {
                    title: "登录日志",
                    icon: "",
                    sort: 3,
                    permission: "admin_system_log_login"
                }
            }
        ]
    }
];

export default systemLog;
