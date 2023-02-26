import type { EChartsOption } from "echarts";

const pieConfig: EChartsOption = {
    tooltip: {
        trigger: "item"
    },
    series: [
        {
            type: "wordCloud",
            sizeRange: [14, 28],
            rotationRange: [0, 0],
            width: "100%",
            height: "100%",
            shape: "pentagon ",
            gridSize: 25,
            top: 0,
            data: []
        }
    ]
};

export default pieConfig;
