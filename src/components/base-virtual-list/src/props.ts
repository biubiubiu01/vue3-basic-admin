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
        type: Number,
        default: 500
    },
    width: {
        type: [Number, String],
        default: "100%"
    },
    itemHeight: {
        type: Number,
        default: 30
    },
    dynamic: {
        type: Boolean,
        default: false
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
