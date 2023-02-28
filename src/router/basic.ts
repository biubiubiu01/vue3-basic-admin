import type { AppRouteType } from "@/router/types";
import { isArray } from "@/utils";

const LoginRoute: AppRouteType = {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index.vue")
};

const RootRoute: AppRouteType = {
    path: "/",
    name: "Root",
    redirect: "/dashboard"
};

const RedirectRoute: AppRouteType = {
    path: "/redirect",
    name: "Redirect",
    component: () => import("../layouts/index.vue"),
    redirect: "/redirect/index",
    children: [
        {
            path: "/index",
            name: "RedirectTo",
            component: () => import("@/views/redirect/index.vue")
        }
    ]
};

const PageError = {
    path: "/:path(.*)*",
    name: "",
    component: () => import("@/views/page/403.vue")
};

const getAsyncRoute = (): AppRouteType[] => {
    const modules = import.meta.glob("./modules/**/*.ts", { eager: true, import: "default" });
    const asyncRoute: AppRouteType[] = [];
    Object.values(modules).forEach((value) => {
        const moduleList = isArray(value) ? [...(value as AppRouteType[])] : [value as AppRouteType];
        asyncRoute.push(...moduleList);
    });
    return asyncRoute;
};

const getRouteName = (routeList: AppRouteType[]) => {
    const routeArr: string[] = [];
    routeList.forEach((item) => {
        routeArr.push(item.name as string);
        if (item?.children) {
            routeArr.push(...getRouteName(item?.children));
        }
    });
    return routeArr;
};

// 基础路由
export const basicRoutes = [LoginRoute, RedirectRoute, RootRoute, PageError];

// 异步路由
export const asyncRoutes = getAsyncRoute();

// 路由白名单
export const WHITE_LIST = getRouteName(basicRoutes);
