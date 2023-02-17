import type { EChartsOption } from "echarts";

const lineConfig: EChartsOption = {
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "cross"
        }
    },
    grid: {
        left: "4%",
        right: "2%",
        bottom: "7%",
        top: "2%"
    },
    xAxis: [
        {
            type: "category",
            boundaryGap: false,
            data: [],

            axisPointer: {
                snap: true
            }
        }
    ],
    yAxis: [
        {
            type: "value",
            axisTick: {
                show: false
            },
            axisPointer: {
                snap: true
            }
        }
    ],
    series: [
        {
            name: "",
            type: "line",
            data: [],
            smooth: true,
            showSymbol: false
        }
    ]
};

export default lineConfig;
