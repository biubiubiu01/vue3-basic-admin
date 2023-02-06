import { FormTypeEnum } from "@/enums/componentEnum";

export type FormColumnType = {
    fieldName: string;
    fieldDesc: string;
    fieldType: FormTypeEnum;
    active?: boolean;
    required?: boolean;
    rules?: any;
    sort?: number;
    config?: any;
    colProps?: any;
    show?: Function | boolean;
};
