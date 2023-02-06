import { FormColumnType } from "@/components/base-form";
import { FormTypeEnum } from "@/enums/componentEnum";
import { Column } from "@/components/base-table/src/types";
import { getDataLabel } from "@/utils";
import { StatusData } from "@/constant/basic";

export function useColumn() {
    const filterColumn: FormColumnType[] = [
        {
            fieldName: "apiName",
            fieldDesc: "接口名称",
            fieldType: FormTypeEnum.INPUT
        },
        {
            fieldName: "status",
            fieldDesc: "接口状态",
            fieldType: FormTypeEnum.SELECT,
            config: {
                options: StatusData
            }
        }
    ];

    const tableColumn: Column[] = [
        {
            fieldName: "apiName",
            fieldDesc: "接口名称",
            showOverflowTooltip: true
        },
        {
            fieldName: "apiUrl",
            fieldDesc: "接口url",
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
            showOverflowTooltip: true,
            active: false
        }
    ];

    return {
        filterColumn,
        tableColumn
    };
}
