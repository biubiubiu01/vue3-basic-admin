import type { PropType } from "vue";
import { SeamScrollOptionType } from "./types";

export const baseProps = {
    data: {
        type: Array as PropType<any[]>,
        default: () => []
    },
    options: {
        type: Object as PropType<SeamScrollOptionType>,
        default: () => {}
    },
    width: {
        type: [Number, String],
        default: "100%"
    },
    height: {
        type: [Number, String],
        default: "300px"
    }
};

export const defaultOptions: SeamScrollOptionType = {
    autoPlay: true,
    switchDelay: 400,
    hoverStop: true,
    step: 1,
    singleHeight: 0,
    waitTime: 1000
};
