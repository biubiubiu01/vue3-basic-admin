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
                    sort: 2,
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
                    sort: 3,
                    permission: "admin_comp_count_to",
                    icon: ""
                }
            },
            {
                path: "dialog",
                name: "Dialog",
                component: () => import("@/views/comp/dialog/index.vue"),
                meta: {
                    title: "Dialog",
                    sort: 4,
                    permission: "admin_comp_dialog",
                    icon: ""
                }
            },
            {
                path: "loading",
                name: "Loading",
                component: () => import("@/views/comp/loading/index.vue"),
                meta: {
                    title: "Loading",
                    sort: 5,
                    permission: "admin_comp_loading",
                    icon: ""
                }
            },
            {
                path: "seamscroll",
                name: "SeamScroll",
                component: () => import("@/views/comp/seamscroll/index.vue"),
                meta: {
                    title: "无缝滚动",
                    sort: 6,
                    permission: "admin_comp_seamscroll",
                    icon: ""
                }
            },
            {
                path: "select",
                name: "Select",
                component: () => import("@/views/comp/select/index.vue"),
                meta: {
                    title: "Select",
                    sort: 7,
                    permission: "admin_comp_select",
                    icon: ""
                }
            },
            {
                path: "table",
                name: "Table",
                component: () => import("@/views/comp/table/index.vue"),
                meta: {
                    title: "Table",
                    sort: 8,
                    permission: "admin_comp_table",
                    icon: ""
                }
            },
            {
                path: "form",
                name: "Form",
                component: () => import("@/views/comp/table/index.vue"),
                meta: {
                    title: "Form",
                    sort: 9,
                    permission: "admin_comp_form",
                    icon: ""
                }
            }
        ]
    }
];

export default comp;
