import type { EChartsOption } from "echarts";

const scatterConfig: EChartsOption = {
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
    geo: {
        map: "map",
        roam: true,
        zoom: 1.22,
        itemStyle: {
            areaColor: "#1E62AC",
            borderColor: "#53D9FF",
            borderWidth: 1.3,
            shadowBlur: 15,
            shadowColor: "rgb(58,115,192)",
            shadowOffsetX: 7,
            shadowOffsetY: 6
        },
        label: {
            show: true,
            color: "rgb(249, 249, 249)" // 省份标签字体颜色
        },
        emphasis: {
            itemStyle: {
                areaColor: "#8dd7fc",
                borderWidth: 1.6
            },
            label: {
                show: true,
                color: "rgb(249, 249, 249)" // 省份标签字体颜色
            }
        }
    },
    series: [
        {
            name: "散点",
            type: "scatter",
            data: [],
            symbol: "pin",
            coordinateSystem: "geo",
            symbolSize: 45,
            label: {
                show: true,
                color: "#fff",
                formatter: (params: any): any => {
                    return parseInt(params.value[2]);
                }
            },
            itemStyle: {
                color: "#f99"
            }
        }
    ]
};

export default scatterConfig;
