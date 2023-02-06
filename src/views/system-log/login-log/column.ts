import { FormColumnType } from "@/components/base-form";
import { FormTypeEnum } from "@/enums/componentEnum";
import { Column } from "@/components/base-table/src/types";

export function useColumn() {
    const filterColumn: FormColumnType[] = [
        {
            fieldName: "time",
            fieldDesc: "登录时间",
            fieldType: FormTypeEnum.DATE,
            config: {
                type: "daterange"
            }
        }
    ];

    const tableColumn: Column[] = [
        {
            fieldName: "username",
            fieldDesc: "用户名"
        },
        {
            fieldName: "ip",
            fieldDesc: "登录ip",
            showOverflowTooltip: true
        },
        {
            fieldName: "os",
            fieldDesc: "操作系统"
        },
        {
            fieldName: "browser",
            fieldDesc: "浏览器"
        },
        {
            fieldName: "time",
            fieldDesc: "登录时间"
        }
    ];

    return {
        filterColumn,
        tableColumn
    };
}
