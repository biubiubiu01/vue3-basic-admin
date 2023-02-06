import { FormColumnType } from "@/components/base-form";
import { FormTypeEnum } from "@/enums/componentEnum";
import { Column } from "@/components/base-table/src/types";
import { getDeptTreeList } from "@/api/system/dept";
import { getDataLabel } from "@/utils";
import { StatusData } from "@/constant/basic";

export function useColumn(action?: any) {
    const filterColumn: FormColumnType[] = [
        {
            fieldName: "deptName",
            fieldDesc: "部门名称",
            fieldType: FormTypeEnum.INPUT
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
            fieldName: "deptName",
            fieldDesc: "部门名称"
        },
        {
            fieldName: "parentName",
            fieldDesc: "上级部门"
        },
        {
            fieldName: "sort",
            fieldDesc: "排序"
        },
        {
            fieldName: "status",
            fieldDesc: "状态",
            formType: "tag",
            type: (row: any) => {
                return row.status === 0 ? "danger" : "";
            },
            formatter: (row: any) => {
                return getDataLabel(StatusData, row.status);
            }
        },
        {
            fieldName: "createTime",
            fieldDesc: "创建时间",
            width: 160
        },
        {
            fieldName: "remark",
            fieldDesc: "备注",
            showOverflowTooltip: true
        },
        {
            fieldName: "#",
            fieldDesc: "操作",
            formType: "operation",
            width: 175,
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
            fieldName: "deptName",
            fieldDesc: "部门名称",
            fieldType: FormTypeEnum.INPUT
        },
        {
            fieldName: "parentId",
            fieldDesc: "上级部门",
            fieldType: FormTypeEnum.SELECT,
            config: {
                api: getDeptTreeList,
                tree: true,
                nodeKey: "deptId",
                init: true,
                props: {
                    label: "deptName",
                    children: "children"
                }
            }
        },
        {
            fieldName: "sort",
            fieldDesc: "排序",
            fieldType: FormTypeEnum.NUMBER
        },
        {
            fieldName: "status",
            fieldDesc: "状态",
            fieldType: FormTypeEnum.SWITCH,
            config: {
                activeValue: 1,
                inactiveValue: 0
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
