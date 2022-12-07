import { PropType } from "vue";
import { tableFormTypeEnum } from "@/enums/tableEnum";

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
    formType?: `${tableFormTypeEnum}` | string;
    active?: boolean;
    sort?: number;
    [key: string]: any;
};

export type paginationPosition = "bottomLeft" | "bottomCenter" | "bottomRight" | "topLeft" | "topCenter" | "topRight";

export const defaultProps = {
    data: {
        type: Array,
        required: true,
        default: () => []
    },
    height: [String, Number],
    maxHeight: [String, Number],
    stripe: {
        type: Boolean,
        default: false
    },
    border: {
        type: Boolean,
        default: true
    },
    size: {
        type: String,
        default: "",
        validator(value: string) {
            return ["", "default", "small", "large"].includes(value);
        }
    },
    fit: {
        type: Boolean,
        default: true
    },
    showHeader: {
        type: Boolean,
        default: true
    },
    highlightCurrentRow: {
        type: Boolean,
        default: true
    },
    defaultExpandAll: {
        type: Boolean,
        default: false
    },
    expandRowKeys: {
        type: Array,
        default: () => []
    },
    defaultSort: {
        type: Object
    },
    showSummary: {
        type: Boolean,
        default: false
    },
    sumText: {
        type: String,
        default: "合计"
    },
    summaryMethod: {
        type: Function
    },
    spanMethod: {
        type: Function
    },
    scrollbarAlwaysOn: {
        type: Boolean,
        default: false
    },
    flexible: {
        type: Boolean,
        default: false
    },
    tableLayout: {
        type: String as PropType<"auto" | "fixed">,
        default: "fixed"
    }
};

export const extraProps = {
    loading: {
        type: Boolean,
        default: false
    },
    indexShow: {
        type: Boolean,
        default: true
    },
    expandShow: {
        type: Boolean,
        default: false
    },
    selectionShow: {
        type: Boolean,
        default: false
    },
    text: {
        type: Boolean,
        default: false
    },
    columns: {
        type: Array as PropType<Column[]>,
        default: () => []
    },
    tableName: {
        type: String,
        default: ""
    },
    showPagination: {
        type: Boolean,
        default: true
    },
    pagination: {
        type: Object,
        default: () => ({})
    },
    position: {
        type: String as PropType<paginationPosition>,
        default: "bottomCenter"
    },
    currentKey: {
        type: String,
        default: "currentPage"
    },
    pageSizeKey: {
        type: String,
        default: "pageSize"
    }
};

export default Object.assign({}, defaultProps, extraProps);
