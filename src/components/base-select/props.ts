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
        default: true
    },
    size: {
        type: String,
        default: "",
        validator(value: string) {
            return ["", "default", "small", "large"].includes(value);
        }
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
    virtual: {
        type: Boolean,
        default: false
    },
    labelInValue: {
        type: Boolean,
        default: false
    },
    text: {
        type: Boolean,
        default: false
    },
    textType: {
        type: String as PropType<"text" | "tag">,
        default: "text"
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
    }
};

export default Object.assign({}, defaultProps, extraProps);
