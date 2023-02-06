import { FormColumnType } from "@/components/base-form";
import { FormTypeEnum } from "@/enums/componentEnum";
import { Column } from "@/components/base-table/src/types";
import { getAllRoleList } from "@/api/system/role";
import { getDeptTreeList } from "@/api/system/dept";
import { StatusData } from "@/constant/basic";

export function useColumn(action?: any) {
    const filterColumn: FormColumnType[] = [
        {
            fieldName: "username",
            fieldDesc: "用户名",
            fieldType: FormTypeEnum.INPUT
        },
        {
            fieldName: "role",
            fieldDesc: "角色",
            fieldType: FormTypeEnum.SELECT,
            config: {
                api: getAllRoleList,
                labelKey: "roleName",
                valueKey: "role"
            }
        },
        {
            fieldName: "status",
            fieldDesc: "状态",
            fieldType: FormTypeEnum.SELECT,
            config: {
                options: StatusData
            }
        }
    ];

    const tableColumn: Column[] = [
        {
            fieldName: "id",
            fieldDesc: "id",
            showOverflowTooltip: true
        },
        {
            fieldName: "username",
            fieldDesc: "用户名"
        },
        {
            fieldName: "deptName",
            fieldDesc: "部门",
            showOverflowTooltip: true
        },
        {
            fieldName: "role",
            fieldDesc: "角色",
            formType: "tag"
        },
        {
            fieldName: "status",
            fieldDesc: "状态",
            formType: "switch",
            callFunction: action?.changeSwitch
        },
        {
            fieldName: "createTime",
            fieldDesc: "创建时间",
            width: 160
        },
        {
            fieldName: "remark",
            fieldDesc: "备注",
            showOverflowTooltip: true,
            active: false
        },
        {
            fieldName: "#",
            fieldDesc: "操作",
            formType: "operation",
            width: 155,
            fixed: "right",
            operation: [
                {
                    icon: "edit",
                    label: "编辑",
                    callFunction: action?.edit
                },
                {
                    icon: "delete",
                    label: "删除",
                    confirm: true,
                    callFunction: action?.delete
                }
            ]
        }
    ];

    const dialogColumn: FormColumnType[] = [
        {
            fieldName: "username",
            fieldDesc: "用户名",
            fieldType: FormTypeEnum.INPUT
        },
        {
            fieldName: "role",
            fieldDesc: "角色",
            fieldType: FormTypeEnum.SELECT,
            config: {
                api: getAllRoleList,
                valueKey: "role",
                multiple: true
            }
        },
        {
            fieldName: "deptId",
            fieldDesc: "所属部门",
            fieldType: FormTypeEnum.SELECT,
            config: {
                api: getDeptTreeList,
                tree: true,
                multiple: true,
                init: true,
                nodeKey: "deptId",
                props: {
                    label: "deptName",
                    children: "children"
                }
            }
        },
        {
            fieldName: "remark",
            fieldDesc: "备注",
            fieldType: FormTypeEnum.INPUT,
            config: {
                type: "textarea"
            }
        }
    ];

    return {
        filterColumn,
        tableColumn,
        dialogColumn
    };
}
