import { FormColumnType } from "@/components/base-form";
import { FormTypeEnum } from "@/enums/componentEnum";
import { Column } from "@/components/base-table/src/types";
import { methodData, axiosStatus } from "@/constant/basic";
import { getDataLabel } from "@/utils";

export function useColumn() {
    const filterColumn: FormColumnType[] = [
        {
            fieldName: "method",
            fieldDesc: "请求方式",
            fieldType: FormTypeEnum.SELECT,
            config: {
                options: methodData
            }
        },
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
            fieldName: "url",
            fieldDesc: "请求接口",
            showOverflowTooltip: true
        },
        {
            fieldName: "method",
            fieldDesc: "请求方式",
            showOverflowTooltip: true
        },
        {
            fieldName: "user",
            fieldDesc: "操作人员"
        },
        {
            fieldName: "userIp",
            fieldDesc: "操作IP"
        },
        {
            fieldName: "status",
            fieldDesc: "状态",
            formType: "tag",
            type: (row: any) => {
                return row.status === 500 ? "danger" : "";
            },
            formatter: (row: any) => {
                return getDataLabel(axiosStatus, row.status);
            }
        },
        {
            fieldName: "time",
            fieldDesc: "操作时间"
        }
    ];

    return {
        filterColumn,
        tableColumn
    };
}
