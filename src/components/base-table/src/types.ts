import { TableFormTypeEnum } from "@/enums/TableEnum";

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
    formType?: `${TableFormTypeEnum}` | string;
    active?: boolean;
    sort?: number;
    [key: string]: any;
};

export type PaginationPosition = "bottomLeft" | "bottomCenter" | "bottomRight" | "topLeft" | "topCenter" | "topRight";
