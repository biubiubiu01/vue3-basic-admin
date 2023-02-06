import { PropType } from "vue";
export interface Options {
    [key: string]: any;
}

export const defaultProps = {
    modelValue: {
        type: [Array, String, Number, Boolean, Object],
        default: undefined
    },
    multiple: {
        type: Boolean,
        default: false
    },
    multipleLimit: {
        type: Number,
        default: 0
    },
    disabled: {
        type: Boolean,
        default: false
    },
    placeholder: {
        type: String,
        default: "请选择"
    },
    clearable: {
        type: Boolean,
        default: true
    },
    filterable: {
        type: Boolean,
        default: false
    },
    valueKey: {
        type: String,
        default: "value"
    },
    remote: {
        type: Boolean,
        default: false
    },
    allowCreate: {
        type: Boolean,
        default: false
    }
};

export const extraProps = {
    labelInValue: {
        type: Boolean,
        default: false
    },
    text: {
        type: Boolean,
        default: false
    },
    labelKey: {
        type: String,
        default: "label"
    },
    options: {
        type: Array as PropType<Options[]>,
        default: () => []
    },
    valueObject: {
        type: Boolean,
        default: false
    },
    maxTagCount: {
        type: Number,
        default: 2
    },
    maxTagPlaceholder: {
        type: Function
    },
    modelLabel: {
        type: [Array, String, Number, Boolean, Object],
        default: undefined
    },
    api: {
        type: Function
    },
    init: {
        type: Boolean,
        default: true
    },
    params: {
        type: Object
    },
    tree: {
        type: Boolean,
        default: false
    }
};

export default Object.assign({}, defaultProps, extraProps);
