export default {
    modelValue: {
        type: [String, Number]
    },
    disabled: {
        type: Boolean,
        default: false
    },
    controls: {
        type: Boolean,
        default: false
    },
    controlsPosition: {
        type: String,
        default: "",
        validator(value: string) {
            return ["", "right"].includes(value);
        }
    },
    precision: {
        type: Number,
        default: 0,
        validator: (val: number) => val >= 0 && val === Number.parseInt(`${val}`, 10)
    },
    max: {
        type: Number,
        default: Number.POSITIVE_INFINITY
    },
    min: {
        type: Number,
        default: Number.NEGATIVE_INFINITY
    },
    step: {
        type: Number,
        default: 1
    },
    text: {
        type: Boolean,
        default: false
    }
};
