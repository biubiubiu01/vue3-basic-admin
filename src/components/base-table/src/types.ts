import { FormTypeEnum } from "@/enums/componentEnum";

export type OperationType = {
    icon?: string;
    label: string;
    confirm?: boolean;
    tip?: string;
    callFunction: (val?: any) => void;
};

export type PaginationPosition = "bottomLeft" | "bottomCenter" | "bottomRight";

export type Column = {
    fieldName: string;
    fieldDesc: string;
    align?: "left" | "center" | "right";
    fixed?: "true" | "left" | "right";
    sortable?: boolean | "custom";
    width?: number | string;
    minWidth?: number | string;
    resizable?: boolean;
    showOverflowTooltip?: boolean;
    required?: boolean;
    formType?: `${FormTypeEnum}` | undefined;
    active?: boolean;
    sort?: number;
    callFunction?: Function;
    config?: any;
    operation?: OperationType[];
    formatter?: Function;
    tagType?: Function | string;
    [key: string]: any;
};
