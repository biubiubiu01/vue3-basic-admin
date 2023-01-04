/**
 * formType 自定义类型
 */
export enum FilterTypeEnum {
    input = "input",
    number = "number",
    select = "select"
}

export type FilterColumnType = {
    fieldName: string;
    fieldDesc: string;
    fieldType: FilterTypeEnum;
    active?: Boolean;
    sort?: number;
    config: any;
};
