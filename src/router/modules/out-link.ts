import type { AppRouteType } from "@/router/types";

const outLink: AppRouteType[] = [
    {
        path: "/out-link",
        name: "OutLink",
        component: () => import("@/layouts/index.vue"),
        meta: {
            title: "其他项目",
            icon: "svg-out",
            sort: 4
        },
        children: [
            {
                path: "http://gist006.gitee.io/vue-visual-drag/#/",
                name: "OutDrag",
                meta: {
                    title: "可视化拖拽",
                    sort: 1,
                    icon: ""
                }
            },
            {
                path: "https://gist006.gitee.io/vue3-bigdata/#/homepage",
                name: "OutBigData",
                meta: {
                    title: "vue3大屏",
                    sort: 2,
                    icon: ""
                }
            },
            {
                path: "http://gist006.gitee.io/vue-antd-admin/#/",
                name: "OutAdmin",
                meta: {
                    title: "vue-antd-admin",
                    sort: 3,
                    icon: ""
                }
            }
        ]
    }
];

export default outLink;
