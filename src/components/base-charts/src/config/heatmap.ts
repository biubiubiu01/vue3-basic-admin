import type { EChartsOption } from "echarts";

const heatmapConfig: EChartsOption = {
    visualMap: {
        left: "3%",
        bottom: "2%",
        color: ["#ff4601", "#fffc00", "#87cffa"],
        calculable: true,
        textStyle: {
            color: "#fff",
            fontSize: 12
        }
    },
    geo: {
        map: "map",
        roam: true,
        itemStyle: {
            areaColor: "#17439a",
            borderColor: "#53D9FF",
            borderWidth: 1.3,
            shadowBlur: 15,
            shadowColor: "rgb(58,115,192)",
            shadowOffsetX: 7,
            shadowOffsetY: 6
        },
        label: {
            show: true,
            color: "#fff"
        },
        emphasis: {
            itemStyle: {
                areaColor: "#17439a"
            }
        },
        zoom: 1.22
    },
    series: [
        {
            name: "hotMap",
            type: "heatmap",
            data: [],
            coordinateSystem: "geo",
            pointSize: 13,
            blurSize: 40
        }
    ]
};

export default heatmapConfig;
