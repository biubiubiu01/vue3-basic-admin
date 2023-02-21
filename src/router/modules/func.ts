import type { AppRouteType } from "@/router/types";
import LAYOUT from "@/layouts/index.vue";

const func: AppRouteType[] = [
    // {
    //     path: "/func",
    //     name: "func",
    //     component: LAYOUT,
    //     redirect: "/func/button",
    //     meta: {
    //         title: "组件",
    //         icon: "svg-comp",
    //         sort: 2,
    //         permission: "admin_comp"
    //     },
    //     children: [
    //         {
    //             path: "button",
    //             name: "Button",
    //             component: () => import("@/views/comp/button/index.vue"),
    //             meta: {
    //                 title: "Button",
    //                 sort: 1,
    //                 permission: "admin_comp_button",
    //                 icon: ""
    //             }
    //         },
    //     ]
    // }
];

export default func;
