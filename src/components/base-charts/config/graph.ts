import type { EChartsOption } from "echarts";

const graphConfig: EChartsOption = {
    tooltip: {},
    series: [
        {
            type: "graph",
            layout: "force",
            force: {
                repulsion: 120,
                edgeLength: [20, 70]
            },
            roam: true,
            draggable: true,
            symbolSize: (params) => {
                return params;
            },
            itemStyle: {
                shadowColor: "rgba(133,203,247,0.75)",
                shadowBlur: 15
            },
            label: {
                show: true
            },
            data: []
        }
    ],
    animationDurationUpdate: (index) => {
        return index * 100;
    },
    animationEasingUpdate: "bounceIn"
};

export default graphConfig;
