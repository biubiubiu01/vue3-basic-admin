import { FormColumnType } from "@/components/base-form";
import { FormTypeEnum } from "@/enums/componentEnum";
import { Column } from "@/components/base-table/src/types";
import { getAllRoleList } from "@/api/system/role";
import { StatusData } from "@/constant/basic";

export const CountToColumn: FormColumnType[] = [
    {
        fieldName: "startVal",
        fieldDesc: "初始值",
        fieldType: FormTypeEnum.NUMBER
    },
    {
        fieldName: "endVal",
        fieldDesc: "目标值",
        fieldType: FormTypeEnum.NUMBER
    },
    {
        fieldName: "duration",
        fieldDesc: "动画时长",
        fieldType: FormTypeEnum.NUMBER
    },
    {
        fieldName: "decimals",
        fieldDesc: "小数位数",
        fieldType: FormTypeEnum.NUMBER
    },
    {
        fieldName: "separator",
        fieldDesc: "千位分割符号",
        fieldType: FormTypeEnum.INPUT
    },
    {
        fieldName: "prefix",
        fieldDesc: "前缀",
        fieldType: FormTypeEnum.INPUT
    },
    {
        fieldName: "suffix",
        fieldDesc: "后缀",
        fieldType: FormTypeEnum.INPUT
    },
    {
        fieldName: "size",
        fieldDesc: "文字大小",
        fieldType: FormTypeEnum.NUMBER
    },
    {
        fieldName: "color",
        fieldDesc: "文字颜色",
        fieldType: FormTypeEnum.SLOT
    }
];

export const SeamscollColumn: FormColumnType[] = [
    {
        fieldName: "step",
        fieldDesc: "滚动速度",
        fieldType: FormTypeEnum.NUMBER
    },
    {
        fieldName: "singleHeight",
        fieldDesc: "滚动停止高度",
        fieldType: FormTypeEnum.NUMBER
    },
    {
        fieldName: "waitTime",
        fieldDesc: "等待时长",
        fieldType: FormTypeEnum.NUMBER
    }
];

export const TableColumn: Column[] = [
    {
        fieldName: "id",
        fieldDesc: "用户id"
    },
    {
        fieldName: "payName",
        fieldDesc: "付款人"
    },
    {
        fieldName: "status",
        fieldDesc: "订单状态"
    },
    {
        fieldName: "time",
        fieldDesc: "下单时间"
    },
    {
        fieldName: "money",
        fieldDesc: "付款金额"
    },
    {
        fieldName: "remark",
        fieldDesc: "备注"
    }
];

export const TableColumn2: Column[] = [
    {
        fieldName: "id",
        fieldDesc: "用户id"
    },
    {
        fieldName: "payName",
        fieldDesc: "付款人",
        formType: "input"
    },
    {
        fieldName: "money",
        fieldDesc: "付款金额",
        formType: "number"
    },
    {
        fieldName: "count",
        fieldDesc: "数量",
        formType: "number"
    },
    {
        fieldName: "status",
        fieldDesc: "状态",
        formType: "tag"
    },
    {
        fieldName: "case",
        fieldDesc: "开关",
        formType: "switch"
    },
    {
        fieldName: "img",
        fieldDesc: "自定义列类型",
        formType: "slot"
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
                callFunction: () => {}
            },
            {
                icon: "delete",
                label: "删除",
                confirm: true,
                callFunction: () => {}
            },
            {
                label: "新增",
                callFunction: () => {}
            },
            {
                label: "修改",
                callFunction: () => {}
            }
        ]
    }
];

export const TableCheckList: any[] = [
    {
        fieldName: "stripe",
        fieldDesc: "斑马纹"
    },
    {
        fieldName: "border",
        fieldDesc: "边框"
    },
    {
        fieldName: "showHeader",
        fieldDesc: "显示头部"
    },
    {
        fieldName: "highlightCurrentRow",
        fieldDesc: "高亮当前选中行"
    },
    {
        fieldName: "showSummary",
        fieldDesc: "合计项"
    },
    {
        fieldName: "showPagination",
        fieldDesc: "分页显示"
    },
    {
        fieldName: "indexShow",
        fieldDesc: "index项显示"
    },
    {
        fieldName: "selectionShow",
        fieldDesc: "勾选项显示"
    }
];

export const FormColumn: FormColumnType[] = [
    {
        fieldName: "name",
        fieldDesc: "input输入",
        fieldType: FormTypeEnum.INPUT
    },
    {
        fieldName: "age",
        fieldDesc: "number输入",
        fieldType: FormTypeEnum.NUMBER
    },
    {
        fieldName: "birthday",
        fieldDesc: "日期选择",
        fieldType: FormTypeEnum.DATE
    },
    {
        fieldName: "icon",
        fieldDesc: "图标选择",
        fieldType: FormTypeEnum.ICON
    },
    {
        fieldName: "status",
        fieldDesc: "select下拉",
        fieldType: FormTypeEnum.SELECT,
        config: {
            options: StatusData
        }
    },
    {
        fieldName: "role",
        fieldDesc: "ApiSelect",
        fieldType: FormTypeEnum.SELECT,
        config: {
            api: getAllRoleList,
            labelKey: "roleName",
            valueKey: "role"
        }
    },

    {
        fieldName: "slot",
        fieldDesc: "自定义slot",
        fieldType: FormTypeEnum.SLOT
    }
];

export const FormColumn2: FormColumnType[] = [
    {
        fieldName: "status",
        fieldDesc: "select下拉",
        fieldType: FormTypeEnum.SELECT,
        config: {
            options: StatusData
        }
    },
    {
        fieldName: "icon",
        fieldDesc: "图标选择",
        fieldType: FormTypeEnum.ICON,
        show: (params: any) => {
            return params.model.status === 1;
        }
    },
    {
        fieldName: "slot",
        fieldDesc: "自定义slot",
        fieldType: FormTypeEnum.SLOT,
        show: (params: any) => {
            return params.model.status === 0;
        }
    }
];
