import { PropType } from "vue";
import type { Column, PaginationPosition } from "./types";

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
        default: false
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
    showPagination: {
        type: Boolean,
        default: true
    },
    pagination: {
        type: Object,
        default: () => ({})
    },
    position: {
        type: String as PropType<PaginationPosition>,
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
