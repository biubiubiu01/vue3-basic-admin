export default {
    modelValue: {
        type: [String, Number]
    },
    type: {
        type: String,
        default: "text"
    },
    disabled: {
        type: Boolean,
        default: false
    },
    placeholder: {
        type: String,
        default: "请输入"
    },
    showWordLimit: {
        type: Boolean,
        default: false
    },
    maxLength: {
        type: Number,
        default: Number.POSITIVE_INFINITY
    },
    clearable: {
        type: Boolean,
        default: true
    },
    showPassword: {
        type: Boolean,
        default: false
    },
    prefixIcon: {
        type: String
    },
    suffixIcon: {
        type: String
    },
    text: {
        type: Boolean,
        default: false
    }
};
