import { FormColumnType } from "@/components/base-form";
import { FormTypeEnum } from "@/enums/componentEnum";
import { Column } from "@/components/base-table/src/types";
import { getDataLabel } from "@/utils";
import { StatusData } from "@/constant/basic";
import { getMenuList } from "@/api/system/menu";

const isDir = (type: string) => type === "D";
const isMenu = (type: string) => type === "M";
const isButton = (type: string) => type === "B";

export function useColumn() {
    const filterColumn: FormColumnType[] = [
        {
            fieldName: "menuName",
            fieldDesc: "菜单名称",
            fieldType: FormTypeEnum.INPUT
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
            fieldName: "menuName",
            fieldDesc: "菜单名称",
            showOverflowTooltip: true,
            align: "left"
        },
        {
            fieldName: "icon",
            fieldDesc: "图标",
            formType: "slot",
            align: "left",
            width: 100
        },
        {
            fieldName: "sort",
            fieldDesc: "排序",
            align: "left",
            width: 100
        },
        {
            fieldName: "permission",
            fieldDesc: "权限标识",
            align: "left"
        },
        {
            fieldName: "path",
            fieldDesc: "路径",
            align: "left"
        },
        {
            fieldName: "status",
            fieldDesc: "状态",
            formType: "tag",
            align: "left",
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
            align: "left"
        }
    ];

    const dialogColumn: FormColumnType[] = [
        {
            fieldName: "menuType",
            fieldDesc: "菜单类型",
            fieldType: FormTypeEnum.SLOT
        },
        {
            fieldName: "parentId",
            fieldDesc: "上级菜单",
            fieldType: FormTypeEnum.SELECT,
            colProps: { span: 12 },
            config: {
                api: getMenuList,
                tree: true,
                nodeKey: "id",
                props: {
                    label: "menuName",
                    children: "children"
                }
            }
        },
        {
            fieldName: "menuName",
            fieldDesc: "菜单名称",
            fieldType: FormTypeEnum.INPUT,
            colProps: { span: 12 }
        },
        {
            fieldName: "icon",
            fieldDesc: "菜单图标",
            fieldType: FormTypeEnum.ICON,
            colProps: { span: 12 },
            show: ({ model }: any) => {
                return !isButton(model.menuType);
            }
        },
        {
            fieldName: "componentPath",
            fieldDesc: "组件地址",
            fieldType: FormTypeEnum.INPUT,
            colProps: { span: 12 },
            show: ({ model }: any) => {
                return isMenu(model.menuType);
            }
        },
        {
            fieldName: "id",
            fieldDesc: "权限标识",
            fieldType: FormTypeEnum.INPUT,
            colProps: { span: 12 },
            show: ({ model }: any) => {
                return !isDir(model.menuType);
            }
        },
        {
            fieldName: "sort",
            fieldDesc: "排序",
            fieldType: FormTypeEnum.NUMBER,
            colProps: { span: 12 }
        },
        {
            fieldName: "isFrame",
            fieldDesc: "是否外链",
            fieldType: FormTypeEnum.SWITCH,
            colProps: { span: 12 },
            show: ({ model }: any) => {
                return !isButton(model.menuType);
            }
        },
        {
            fieldName: "path",
            fieldDesc: "路由地址",
            fieldType: FormTypeEnum.INPUT,
            colProps: { span: 12 },
            show: ({ model }: any) => {
                return !isButton(model.menuType);
            }
        }
    ];

    return {
        filterColumn,
        tableColumn,
        dialogColumn
    };
}
