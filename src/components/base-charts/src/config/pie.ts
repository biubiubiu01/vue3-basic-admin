import type { EChartsOption } from "echarts";

const pieConfig: EChartsOption = {
    tooltip: {
        trigger: "item"
    },
    legend: {
        show: true,
        left: "center",
        top: "3%",
        type: "scroll",
        itemWidth: 18,
        itemHeight: 11
    },
    series: [
        {
            name: "",
            type: "pie",
            radius: ["35%", "55%"],
            center: ["48%", "55%"],
            itemStyle: {},
            data: []
        }
    ]
};

export default pieConfig;
