import { PropType } from "vue";
import { FormColumnType } from "./type";

export const defaultProps = {
    model: {
        type: Object as PropType<any>,
        default: {}
    },
    inline: {
        type: Boolean
    },
    labelWidth: {
        type: [Number, String],
        default: "100px"
    },
    labelPosition: {
        type: String as PropType<"left" | "right" | "top">
    },
    size: {
        type: String as PropType<"large" | "default" | "small">
    },
    hideRequiredAsterisk: {
        type: Boolean
    },
    disabled: {
        type: Boolean
    }
};

export const extraProps = {
    columns: {
        type: Array as PropType<FormColumnType[]>,
        default: () => []
    },
    rowProps: {
        type: Object,
        default: () => {}
    },
    colProps: {
        type: Object,
        default: () => {}
    }
};

export default Object.assign({}, defaultProps, extraProps);
