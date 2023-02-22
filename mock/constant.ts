export const userData = [
    {
        id: 1,
        username: "admin",
        deptId: "6",
        deptName: "研发部",
        role: "admin",
        createTime: "2023-01-05 12:32:14",
        status: 0,
        remark: "拥有admin所有权限"
    },
    {
        id: 100,
        username: "edit",
        deptId: "5",
        deptName: "产品部",
        role: "editor",
        createTime: "2023-01-05 12:32:14",
        status: 1,
        remark: "拥有部分权限"
    },
    {
        id: 101,
        username: "other",
        deptId: "10",
        deptName: "运营部",
        role: "other",
        createTime: "2023-01-05 12:32:14",
        status: 1,
        remark: "拥有基础权限"
    }
];

export const deptData = [
    {
        deptName: "admin系统",
        createTime: "2022-10-14 12:12:13",
        sort: 1,
        remark: "",
        status: 1,
        deptId: 0,
        parentId: null,
        children: [
            {
                deptName: "武汉分公司",
                createTime: "2022-10-14 12:12:13",
                sort: 1,
                remark: "",
                status: 1,
                deptId: 1,
                parentId: 0,
                children: [
                    {
                        deptName: "产品部",
                        createTime: "2022-10-14 12:12:13",
                        sort: 1,
                        remark: "",
                        status: 1,
                        deptId: 5,
                        parentId: 1,
                        children: null
                    },
                    {
                        deptName: "研发部",
                        createTime: "2022-10-14 12:12:13",
                        sort: 2,
                        remark: "",
                        status: 1,
                        deptId: 6,
                        parentId: 1,
                        children: null
                    }
                ]
            },
            {
                deptName: "上海分公司",
                createTime: "2022-10-14 12:12:13",
                sort: 2,
                remark: "",
                status: 1,
                deptId: 2,
                parentId: 0,
                children: [
                    {
                        deptName: "客服部",
                        createTime: "2022-10-14 12:12:13",
                        sort: 1,
                        remark: "",
                        status: 1,
                        deptId: 7,
                        parentId: 2,
                        children: null
                    },
                    {
                        deptName: "销售部",
                        createTime: "2022-10-14 12:12:13",
                        sort: 2,
                        remark: "",
                        status: 1,
                        deptId: 8,
                        parentId: 2,
                        children: null
                    },
                    {
                        deptName: "实施部",
                        createTime: "2022-10-14 12:12:13",
                        sort: 3,
                        remark: "",
                        status: 1,
                        deptId: 9,
                        parentId: 2,
                        children: null
                    },
                    {
                        deptName: "运营部",
                        createTime: "2022-10-14 12:12:13",
                        sort: 4,
                        remark: "",
                        status: 1,
                        deptId: 10,
                        parentId: 2,
                        children: null
                    }
                ]
            },
            {
                deptName: "北京分公司",
                createTime: "2022-10-14 12:12:13",
                sort: 3,
                remark: "",
                status: 0,
                deptId: 3,
                parentId: 0,
                children: null
            },
            {
                deptName: "杭州分公司",
                createTime: "2022-10-14 12:12:13",
                sort: 4,
                remark: "",
                status: 1,
                deptId: 4,
                parentId: 0,
                children: null
            }
        ]
    }
];

export const roleData = [
    {
        id: 11,
        role: "admin",
        roleName: "admin",
        createTime: "2023-01-12 12:32:45",
        status: 1,
        remark: "系统管理员，拥有所有权限",
        menuIds: [
            "admin_system",
            "admin_system_user",
            "admin_system_role",
            "admin_system_dept",
            "admin_system_menu",
            "admin_system_api",
            "admin_system_dict",
            "admin_comp",
            "admin_comp_button",
            "admin_comp_icon",
            "admin_comp_count_to",
            "admin_comp_dialog",
            "admin_comp_loading",
            "admin_comp_seamscroll",
            "admin_comp_select",
            "admin_comp_table",
            "admin_comp_form",
            "admin_comp_echarts",
            "admin_comp_echarts_bar",
            "admin_comp_echarts_line",
            "admin_comp_echarts_pie",
            "admin_comp_echarts_graph",
            "admin_comp_echarts_map",
            "admin_comp_echarts_other",
            "admin_comp_editor",
            "admin_comp_markdown",
            "admin_comp_json",
            "admin_dashboard",
            "admin_dashboard_analysis",
            "admin_dashboard_workbench",
            "admin_func",
            "admin_func_draggable",
            "admin_func_drag_resize",
            "admin_page",
            "admin_page_403",
            "admin_page_404",
            "admin_page_500",
            "admin_page_success",
            "admin_page_error",
            "admin_page_table",
            "admin_system_log",
            "admin_system_log_operation",
            "admin_system_log_error",
            "admin_system_log_login"
        ]
    },
    {
        id: 102,
        role: "other",
        roleName: "other",
        createTime: "2023-01-12 12:32:45",
        status: 1,
        remark: "普通用户，拥有大部分权限",
        menuIds: ["admin_dashboard", "admin_dashboard_analysis", "admin_dashboard_workbench", "admin_icon"]
    },
    {
        id: 103,
        role: "editor",
        roleName: "editor",
        createTime: "2023-01-12 12:32:45",
        status: 1,
        remark: "文档管理人员，只能看富文本页面",
        menuIds: ["admin_system"]
    }
];

export const dictKey = [
    {
        id: 1,
        dictName: "用户性别",
        dictType: "sys_user_sex",
        createTime: "2023-01-12 12:32:45",
        status: 1,
        remark: "用户性别表"
    }
];

export const dictData = [
    {
        id: 1,
        dictLabel: "男",
        dictCode: 1,
        sort: 1,
        createTime: "2023-01-12 12:32:45",
        status: 1,
        remark: "性别男"
    },
    {
        id: 2,
        dictLabel: "女",
        dictCode: 0,
        sort: 1,
        createTime: "2023-01-12 12:32:45",
        status: 1,
        remark: "性别女"
    }
];
