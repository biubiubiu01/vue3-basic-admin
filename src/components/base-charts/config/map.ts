import type { EChartsOption } from "echarts";

const mapConfig: EChartsOption = {
    tooltip: {},
    visualMap: {
        left: "3%",
        bottom: "2%",
        calculable: true,
        inRange: {
            color: ["#24CFF4", "#2E98CA", "#1E62AC"]
        },
        textStyle: {
            color: "#24CFF4"
        }
    },
    series: [
        {
            name: "地图",
            type: "map",
            map: "map",
            roam: true,
            zoom: 1.22,
            data: [],
            label: {
                show: true,
                color: "rgb(249, 249, 249)"
            },
            itemStyle: {
                areaColor: "#24CFF4",
                borderColor: "#53D9FF",
                borderWidth: 1.3,
                shadowBlur: 15,
                shadowColor: "rgb(58,115,192)",
                shadowOffsetX: 7,
                shadowOffsetY: 6
            },
            emphasis: {
                label: {
                    show: true,
                    color: "#f75a00"
                },
                itemStyle: {
                    areaColor: "#8dd7fc",
                    borderWidth: 1.6,
                    shadowBlur: 25
                }
            }
        }
    ]
};

export default mapConfig;
