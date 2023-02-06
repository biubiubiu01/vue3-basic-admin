import { FormColumnType } from "@/components/base-form";
import { FormTypeEnum } from "@/enums/componentEnum";
import { Column } from "@/components/base-table/src/types";
import { getDataLabel } from "@/utils";
import { StatusData } from "@/constant/basic";
import { getDictKeyList } from "@/api/system/dict";

export function useColumn() {
    const filterColumn: FormColumnType[] = [
        {
            fieldName: "dictType",
            fieldDesc: "字典名称",
            fieldType: FormTypeEnum.SELECT,
            config: {
                api: getDictKeyList,
                labelKey: "dictName",
                valueKey: "dictType",
                clearable: false
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
            fieldName: "dictLabel",
            fieldDesc: "字典label",
            showOverflowTooltip: true
        },
        {
            fieldName: "dictCode",
            fieldDesc: "字典code",
            showOverflowTooltip: true
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
        }
    ];

    return {
        filterColumn,
        tableColumn
    };
}
