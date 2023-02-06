import { PropType } from "vue";
import { FormColumnType } from "../base-form";

export default {
    columns: {
        type: Array as PropType<FormColumnType[]>,
        default: () => []
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
    showOpen: {
        type: Boolean,
        default: true
    },
    colProps: {
        type: Object,
        default: () => ({ xs: 24, sm: 12, md: 8, lg: 6, xl: 6 })
    },
    searchInfo: {
        type: Object
    }
};
