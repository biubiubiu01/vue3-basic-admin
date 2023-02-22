import type { AppRouteType } from "@/router/types";
import LAYOUT from "@/layouts/index.vue";

const func: AppRouteType[] = [
    {
        path: "/func",
        name: "func",
        component: LAYOUT,
        redirect: "/func/draggable",
        meta: {
            title: "功能",
            icon: "svg-func",
            sort: 3,
            permission: "admin_func"
        },
        children: [
            {
                path: "draggable",
                name: "Draggable",
                component: () => import("@/views/func/draggable/index.vue"),
                meta: {
                    title: "拖拽",
                    sort: 1,
                    permission: "admin_func_draggable",
                    icon: ""
                }
            },
            {
                path: "darg-resize",
                name: "DragResize",
                component: () => import("@/views/func/drag-resize/index.vue"),
                meta: {
                    title: "拖拽缩放",
                    sort: 2,
                    permission: "admin_func_draggable_resize",
                    icon: ""
                }
            }
        ]
    }
];

export default func;
