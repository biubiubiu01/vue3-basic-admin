import type { AppRouteType } from "@/router/types";

const comp: AppRouteType[] = [
    {
        path: "/comp",
        name: "Comp",
        component: () => import("@/layouts/index.vue"),
        redirect: "/comp/button",
        meta: {
            title: "组件",
            icon: "svg-comp",
            sort: 6,
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
                path: "virtualscroll",
                name: "VirtualScroll",
                component: () => import("@/views/comp/virtualscroll/index.vue"),
                meta: {
                    title: "虚拟滚动",
                    sort: 6,
                    permission: "admin_comp_virtualscroll",
                    icon: ""
                }
            },
            {
                path: "tree-select",
                name: "TreeSelect",
                component: () => import("@/views/comp/tree-select/index.vue"),
                meta: {
                    title: "Tree选择",
                    sort: 7,
                    permission: "admin_comp_tree_select",
                    icon: ""
                }
            },
            {
                path: "select",
                name: "Select",
                component: () => import("@/views/comp/select/index.vue"),
                meta: {
                    title: "Select",
                    sort: 8,
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
                    sort: 9,
                    permission: "admin_comp_table",
                    icon: ""
                }
            },
            {
                path: "form",
                name: "Form",
                component: () => import("@/views/comp/form/index.vue"),
                meta: {
                    title: "Form",
                    sort: 10,
                    permission: "admin_comp_form",
                    icon: ""
                }
            },
            {
                path: "echarts",
                name: "Echarts",
                meta: {
                    title: "Echarts",
                    sort: 11,
                    permission: "admin_comp_echarts",
                    icon: ""
                },
                redirect: "/comp/echarts/bar/index",
                children: [
                    {
                        path: "bar",
                        name: "Bar",
                        component: () => import("@/views/comp/echarts/bar/index.vue"),
                        meta: {
                            title: "柱状图",
                            sort: 1,
                            permission: "admin_comp_echarts_bar",
                            icon: ""
                        }
                    },
                    {
                        path: "line",
                        name: "Line",
                        component: () => import("@/views/comp/echarts/line/index.vue"),
                        meta: {
                            title: "折线图",
                            sort: 2,
                            permission: "admin_comp_echarts_line",
                            icon: ""
                        }
                    },
                    {
                        path: "pie",
                        name: "Pie",
                        component: () => import("@/views/comp/echarts/pie/index.vue"),
                        meta: {
                            title: "饼图",
                            sort: 3,
                            permission: "admin_comp_echarts_pie",
                            icon: ""
                        }
                    },
                    {
                        path: "graph",
                        name: "Graph",
                        component: () => import("@/views/comp/echarts/graph/index.vue"),
                        meta: {
                            title: "关系图",
                            sort: 4,
                            permission: "admin_comp_echarts_graph",
                            icon: ""
                        }
                    },
                    {
                        path: "map",
                        name: "Map",
                        component: () => import("@/views/comp/echarts/map/index.vue"),
                        meta: {
                            title: "地图",
                            sort: 5,
                            permission: "admin_comp_echarts_map",
                            icon: ""
                        }
                    },
                    {
                        path: "other",
                        name: "Other",
                        component: () => import("@/views/comp/echarts/other/index.vue"),
                        meta: {
                            title: "其他图表",
                            sort: 6,
                            permission: "admin_comp_echarts_other",
                            icon: ""
                        }
                    }
                ]
            },
            {
                path: "editor",
                name: "Editor",
                component: () => import("@/views/comp/editor/index.vue"),
                meta: {
                    title: "富文本编辑器",
                    sort: 12,
                    permission: "admin_comp_editor",
                    icon: ""
                }
            },
            {
                path: "markdown",
                name: "Markdown",
                component: () => import("@/views/comp/markdown/index.vue"),
                meta: {
                    title: "Markdown",
                    sort: 13,
                    permission: "admin_comp_markdown",
                    icon: ""
                }
            },
            {
                path: "json",
                name: "Json",
                component: () => import("@/views/comp/json/index.vue"),
                meta: {
                    title: "JSON编辑器",
                    sort: 14,
                    permission: "admin_comp_json",
                    icon: ""
                }
            },
            {
                path: "photograph",
                name: "Photograph",
                component: () => import("@/views/comp/photograph/index.vue"),
                meta: {
                    title: "拍照视频",
                    sort: 15,
                    permission: "admin_comp_photograph",
                    icon: ""
                }
            }
        ]
    }
];

export default comp;
