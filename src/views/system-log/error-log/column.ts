import { FormColumnType } from "@/components/base-form";
import { FormTypeEnum } from "@/enums/componentEnum";
import { Column } from "@/components/base-table/src/types";

export function useColumn() {
    const filterColumn: FormColumnType[] = [
        {
            fieldName: "time",
            fieldDesc: "操作时间",
            fieldType: FormTypeEnum.DATE,
            config: {
                type: "daterange"
            }
        }
    ];

    const tableColumn: Column[] = [
        {
            fieldName: "type",
            fieldDesc: "错误类型"
        },
        {
            fieldName: "method",
            fieldDesc: "请求方式(来源)"
        },
        {
            fieldName: "url",
            fieldDesc: "请求地址",
            showOverflowTooltip: true
        },
        {
            fieldName: "message",
            fieldDesc: "错误提示"
        },
        {
            fieldName: "params",
            fieldDesc: "请求参数",
            showOverflowTooltip: true
        },
        {
            fieldName: "data",
            fieldDesc: "后台错误信息",
            showOverflowTooltip: true
        },
        {
            fieldName: "detail",
            fieldDesc: "详细错误",
            showOverflowTooltip: true
        },
        {
            fieldName: "time",
            fieldDesc: "报错时间"
        }
    ];

    return {
        filterColumn,
        tableColumn
    };
}
