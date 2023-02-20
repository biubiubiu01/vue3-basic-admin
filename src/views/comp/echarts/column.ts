import echarts from "@/plugins/echarts";

export const BarOptions1 = {
    xAxis: [
        {
            data: ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期天"]
        }
    ],
    series: [
        {
            data: [60, 75, 55, 40, 100, 140, 160],
            barWidth: "20",
            barGap: "80%",
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: "#5171fd"
                    },
                    {
                        offset: 1,
                        color: "#c97afd"
                    }
                ])
            }
        }
    ]
};

export const BarOptions2 = {
    grid: {
        top: "10%"
    },
    legend: {
        show: true,
        itemWidth: 16,
        itemHeight: 12
    },
    xAxis: [
        {
            data: ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期天"]
        }
    ],
    series: [
        {
            name: "篮球",
            type: "bar",
            data: [30, 40, 50, 50, 55, 60, 40],
            barWidth: "8",
            barGap: "20%",
            itemStyle: {
                borderRadius: 10,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: "#5171fd"
                    },
                    {
                        offset: 1,
                        color: "#c97afd"
                    }
                ])
            }
        },
        {
            name: "羽毛球",
            type: "bar",
            data: [60, 60, 90, 90, 120, 120, 90],
            barWidth: "8",
            barGap: "20%",
            itemStyle: {
                borderRadius: 10,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: "#3dadf6"
                    },
                    {
                        offset: 1,
                        color: "#737bfc"
                    }
                ])
            }
        },
        {
            name: "乒乓球",
            type: "bar",
            data: [40, 40, 60, 60, 80, 80, 60],
            barWidth: "8",
            barGap: "20%",
            itemStyle: {
                borderRadius: 10,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: "#ea677c"
                    },
                    {
                        offset: 1,
                        color: "#ef9b5f"
                    }
                ])
            }
        }
    ]
};

export const BarOptions3 = {
    grid: {
        top: "10%"
    },
    xAxis: [
        {
            data: ["2016", "2017", "2018", "2019"]
        }
    ],
    series: [
        {
            name: "LOL",
            type: "bar",
            stack: "PC",
            data: [1500, 2800, 3500, 2900],
            barWidth: "12",
            barGap: "20%",
            itemStyle: {
                color: "#5171fd"
            }
        },
        {
            name: "DNF",
            type: "bar",
            stack: "PC",
            data: [700, 600, 550, 420],
            barWidth: "12",
            barGap: "20%",
            itemStyle: {
                color: "#3dadf6"
            }
        },
        {
            name: "王者荣耀",
            type: "bar",
            stack: "mobile",
            data: [1600, 2300, 2800, 3300],
            barWidth: "12",
            barGap: "20%",
            itemStyle: {
                color: "#ea677c"
            }
        },
        {
            name: "和平精英",
            type: "bar",
            stack: "mobile",
            data: [1600, 2800, 3500, 2000],
            barWidth: "12",
            barGap: "20%",
            itemStyle: {
                color: "#ef9b5f"
            }
        }
    ]
};

export const BarOptions4 = {
    title: [
        {
            text: "85分",
            textStyle: {
                color: "#5171fd",
                fontSize: 35
            },
            top: "center",
            left: "center"
        }
    ],
    tooltip: {
        show: false
    },
    angleAxis: {
        max: 100,
        clockwise: true,
        show: false
    },
    radiusAxis: {
        type: "category",
        show: true,
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    xAxis: [
        {
            axisLine: {
                show: false
            }
        }
    ],
    polar: {
        center: ["50%", "50%"],
        radius: "150%"
    },
    series: [
        {
            type: "bar",
            data: [85],
            showBackground: true,
            backgroundStyle: {
                color: "#cecece"
            },
            coordinateSystem: "polar",
            roundCap: true,
            barWidth: 15,
            itemStyle: {
                opacity: 1,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: "#5171fd"
                    },
                    {
                        offset: 1,
                        color: "#c97afd"
                    }
                ]),
                shadowBlur: 5,
                shadowColor: "#2A95F9"
            }
        }
    ]
};
