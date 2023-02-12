import type { EChartsOption } from "echarts";

const radarConfig: EChartsOption = {
    tooltip: {
        trigger: "item"
    },
    legend: {
        show: true,
        left: "center",
        top: "0%",
        type: "scroll",
        itemWidth: 18,
        itemHeight: 11
    },
    radar: {
        radius: "65%",
        splitNumber: 4,
        center: ["48%", "55%"],
        startAngle: 90,
        indicator: []
    },
    series: [
        {
            type: "radar",
            symbolSize: 0,
            areaStyle: {
                shadowBlur: 13,
                shadowColor: "rgba(0,0,0,.2)",
                shadowOffsetX: 0,
                shadowOffsetY: 10,
                opacity: 1
            },
            data: []
        }
    ]
};

export default radarConfig;
