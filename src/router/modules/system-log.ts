import type { AppRouteType } from "@/router/types";
import LAYOUT from "@/layouts/index.vue";

const systemLog: AppRouteType[] = [
    {
        path: "/system-log",
        name: "SystemLog",
        component: LAYOUT,
        redirect: "/system-log/operation",
        meta: {
            title: "系统监控",
            icon: "svg-log",
            sort: 4
        },
        children: [
            {
                path: "operation",
                name: "OperationLog",
                component: () => import("@/views/system-log/operation/index.vue"),
                meta: {
                    title: "操作日志"
                }
            },
            {
                path: "error",
                name: "ErrorLog",
                component: () => import("@/views/system-log/error/index.vue"),
                meta: {
                    title: "错误日志"
                }
            },
            {
                path: "login",
                name: "LoginLog",
                component: () => import("@/views/system-log/login/index.vue"),
                meta: {
                    title: "登录日志"
                }
            },
            {
                path: "mock-login",
                name: "MockLogin",
                component: () => import("@/views/system-log/mock-login/index.vue"),
                meta: {
                    title: "模拟登录"
                }
            }
        ]
    }
];

export default systemLog;
