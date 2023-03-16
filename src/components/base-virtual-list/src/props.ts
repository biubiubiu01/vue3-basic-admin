import { StyleValue, PropType } from "vue";

const listProps = {
    className: {
        type: String,
        default: ""
    },
    style: {
        type: [Object, String, Array] as PropType<StyleValue>
    },
    height: {
        type: [String, Number],
        default: 500
    },
    width: {
        type: [Number, String],
        required: false
    },
    total: {
        type: Number,
        default: 0
    },
    itemHeight: {
        type: Number,
        default: 30
    },
    cache: {
        type: Number,
        default: 2
    },
    data: {
        type: Array,
        default: () => []
    }
};

export default listProps;
