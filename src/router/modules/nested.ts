import type { AppRouteType } from "@/router/types";

const nested: AppRouteType[] = [
    {
        path: "/nested",
        name: "Nested",
        component: () => import("@/layouts/index.vue"),
        redirect: "/nested/menu1",
        meta: {
            title: "嵌套路由",
            icon: "svg-nested",
            sort: 8
        },
        children: [
            {
                path: "menu1",
                name: "Menu1",
                redirect: "/nested/menu1/menu1-1",
                meta: {
                    title: "路由菜单1",
                    sort: 1,
                    icon: ""
                },
                children: [
                    {
                        path: "menu1-1",
                        name: "Menu1-1",
                        meta: {
                            title: "路由菜单1-1",
                            sort: 1,
                            icon: ""
                        },
                        redirect: "/nested/menu1/menu1-1/menu1-1-1",
                        children: [
                            {
                                path: "menu1-1-1",
                                name: "Menu1-1-1",
                                component: () => import("@/views/nested/menu1/menu1-1/menu1-1-1/index.vue"),
                                meta: {
                                    title: "路由菜单1-1-1",
                                    sort: 1,
                                    icon: ""
                                }
                            }
                        ]
                    },
                    {
                        path: "menu1-2",
                        name: "Menu1-2",
                        component: () => import("@/views/nested/menu1/menu1-2/index.vue"),
                        meta: {
                            title: "路由菜单1-2",
                            sort: 2,
                            icon: ""
                        }
                    }
                ]
            },
            {
                path: "menu2",
                name: "Menu2",
                component: () => import("@/views/nested/menu2/index.vue"),
                meta: {
                    title: "路由菜单2",
                    sort: 2,
                    icon: ""
                }
            }
        ]
    }
];

export default nested;
