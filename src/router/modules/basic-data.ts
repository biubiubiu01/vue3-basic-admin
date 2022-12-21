import type { AppRouteType } from "@/router/types";
import LAYOUT from "@/layouts/index.vue";

const basicData: AppRouteType[] = [
    {
        path: "/basic-data",
        name: "BasicData",
        component: LAYOUT,
        redirect: "/basic-data/dictionary-key",
        meta: {
            title: "基础数据",
            icon: "setting",
            sort: 3
        },
        children: [
            {
                path: "dictionary-key",
                name: "DictionaryKey",
                component: () => import("@/views/basic-data/dictionary-key/index.vue"),
                meta: {
                    title: "字典管理"
                }
            },
            {
                path: "dictionary-data",
                name: "DictionaryData",
                component: () => import("@/views/basic-data/dictionary-data/index.vue"),
                meta: {
                    title: "字典数据管理"
                }
            }
        ]
    }
];

export default basicData;
