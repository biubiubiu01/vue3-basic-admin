import type { AppRouteType } from "@/router/types";
import { isArray } from "@/utils";

const LoginRoute: AppRouteType[] = [
    {
        path: "/login",
        name: "Login",
        component: () => import("@/views/login/index.vue")
    }
];

//  const PageError: AppRouteType[] = [
//     {
//         path: "/:path(.*)*",
//         redirect: "/404"
//     }
// ];

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
export const basicRoutes = [...LoginRoute];

// 异步路由
export const asyncRoutes = getAsyncRoute();

// 路由白名单
export const WHITE_LIST = getRouteName(basicRoutes);
