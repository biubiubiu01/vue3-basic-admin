import type { AppRouteType } from "@/router/types";
import LAYOUT from "@/layouts/index.vue";

const comp: AppRouteType[] = [
    {
        path: "/comp",
        name: "Comp",
        component: LAYOUT,
        redirect: "/comp/button",
        meta: {
            title: "组件",
            icon: "svg-comp",
            sort: 2,
            permission: "admin_comp"
        },
        children: [
            {
                path: "button",
                name: "Button",
                component: () => import("@/views/comp/button/index.vue"),
                meta: {
                    title: "Button",
                    sort: 1,
                    permission: "admin_comp_button",
                    icon: ""
                }
            },
            {
                path: "icon",
                name: "Icon",
                component: () => import("@/views/comp/icon/index.vue"),
                meta: {
                    title: "Icon",
                    sort: 1,
                    permission: "admin_comp_icon",
                    icon: ""
                }
            },
            {
                path: "count-to",
                name: "CountTo",
                component: () => import("@/views/comp/count-to/index.vue"),
                meta: {
                    title: "数字滚动",
                    sort: 2,
                    permission: "admin_comp_count_to",
                    icon: ""
                }
            }
        ]
    }
];

export default comp;
