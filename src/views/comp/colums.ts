import { FormColumnType } from "@/components/base-form";
import { FormTypeEnum } from "@/enums/componentEnum";

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
