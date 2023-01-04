import { PropType } from "vue";
import { FilterColumnType } from "./type";

export default {
    column: {
        type: Array as PropType<FilterColumnType[]>,
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
    }
};
