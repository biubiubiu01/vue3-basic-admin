import { FormColumnType } from "@/components/base-form";
import { FormTypeEnum } from "@/enums/componentEnum";
import { Column } from "@/components/base-table/src/types";
import { getDataLabel } from "@/utils";
import { StatusData } from "@/constant/basic";

export function useColumn(action?: any) {
    const filterColumn: FormColumnType[] = [
        {
            fieldName: "dictName",
            fieldDesc: "字典名称",
            fieldType: FormTypeEnum.INPUT
        },
        {
            fieldName: "status",
            fieldDesc: "字典状态",
            fieldType: FormTypeEnum.SELECT,
            config: {
                options: StatusData
            }
        }
    ];

    const tableColumn: Column[] = [
        {
            fieldName: "dictName",
            fieldDesc: "字典名称",
            showOverflowTooltip: true
        },
        {
            fieldName: "dictType",
            fieldDesc: "字典类型",
            showOverflowTooltip: true
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
                    icon: "search",
                    label: "查看",
                    callFunction: action?.search
                }
            ]
        }
    ];

    return {
        filterColumn,
        tableColumn
    };
}
