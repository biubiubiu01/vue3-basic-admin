import { Column } from "../../base-table";
import { PropType } from "vue";

export default {
    tableName: {
        type: String,
        default: ""
    },
    columns: {
        type: Array as PropType<Column[]>,
        default: () => []
    }
};
