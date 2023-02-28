import echarts from "@/plugins/echarts";
import type { EChartsOption } from "echarts";

const imgList = [
    "https://i.328888.xyz/2023/02/28/zZUaU.gif",
    "https://i.328888.xyz/2023/02/28/zZDep.gif",
    "https://i.328888.xyz/2023/02/28/zZtkv.gif",
    "https://i.328888.xyz/2023/02/28/zZWB3.gif",
    "https://i.328888.xyz/2023/02/28/zZkJy.gif",
    "https://i.328888.xyz/2023/02/28/zZCA5.gif",
    "https://i.328888.xyz/2023/02/28/zZlr8.gif",
    "https://i.328888.xyz/2023/02/28/zZw5Z.gif",
    "https://i.328888.xyz/2023/02/28/zZHZF.gif",
    "https://i.328888.xyz/2023/02/28/zZOOH.gif",
    "https://i.328888.xyz/2023/02/28/zZbeQ.gif",
    "https://i.328888.xyz/2023/02/28/zZjaE.gif",
    "https://i.328888.xyz/2023/02/28/zZI0C.gif",
    "https://i.328888.xyz/2023/02/28/zZNBP.gif",
    "https://i.328888.xyz/2023/02/28/zZrJX.gif",
    "https://i.328888.xyz/2023/02/28/zZRDt.jpeg",
    "https://i.328888.xyz/2023/02/28/zZcrJ.jpeg",
    "https://i.328888.xyz/2023/02/28/zZm5c.jpeg"
];

const colorList = [
    "#28CAD8",
    "#E5A214",
    "#F69F73",
    "#ff7f50",
    "#87cefa",
    "#da70d6",
    "#32cd32",
    "#6495ed",
    "#ff69b4",
    "#cd5c5c",
    "#1e90ff",
    "#ff6347",
    "#7b68ee",
    "#6b8e23",
    "#4ea397",
    "#b8860b",
    "#7bd9a5"
];

export const BarOptions1: EChartsOption = {
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

export const BarOptions2: EChartsOption = {
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

export const BarOptions3: EChartsOption = {
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

export const BarOptions4: EChartsOption = {
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

export const LineOptions1: EChartsOption = {
    xAxis: [
        {
            data: ["6:00", "9:00", "12:00", "15:00", "18:00", "21:00", "24:00"]
        }
    ],
    series: [
        {
            data: [60, 75, 55, 40, 100, 140, 160],
            lineStyle: {
                color: "#5171fd" // 线条颜色
            },
            itemStyle: {
                color: "#5171fd",
                borderColor: "#fff"
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                        {
                            offset: 0,
                            color: "#5171fd"
                        },
                        {
                            offset: 0.5,
                            color: "#5171fd"
                        },
                        {
                            offset: 1,
                            color: "rgba(127,153,255,0.1)"
                        }
                    ],
                    false
                )
            }
        }
    ]
};

export const LineOptions2: EChartsOption = {
    xAxis: [
        {
            data: ["10-1", "10-2", "10-3", "10-4", "10-5", "10-6", "10-7"]
        }
    ],
    series: [
        {
            name: "最高气温",
            type: "line",
            data: [32, 34, 39, 35, 38, 36, 34],

            lineStyle: {
                width: 3,
                color: "#F6D06F", // 线条颜色
                shadowColor: "rgba(246,208,111, 0.85)",
                shadowBlur: 10,
                shadowOffsetY: 6
            }
        },
        {
            name: "最低气温",
            type: "line",
            data: [25, 22, 26, 28, 27, 26, 23],
            smooth: true,
            symbol: "circle",
            showSymbol: true,
            lineStyle: {
                width: 3,
                color: "#5171fd", // 线条颜色
                shadowColor: "rgba(66,102,247, 0.55)",
                shadowBlur: 10,
                shadowOffsetY: 6
            },
            itemStyle: {
                color: "#5171fd",
                borderColor: "#5171fd",
                borderWidth: 0
            }
        }
    ]
};

export const LineOptions3: EChartsOption = {
    grid: {
        left: "7%",
        right: "3%"
    },
    xAxis: [
        {
            data: ["0-10", "10-20", "20-30", "30-40", "40-50", "50-60"]
        }
    ],
    series: [
        {
            name: "经济",
            type: "line",
            stack: "总量",
            data: [1800, 4200, 6500, 8600, 17000, 25352],
            smooth: true,
            symbol: "circle",
            showSymbol: false,
            lineStyle: {
                color: "#5171fd" // 线条颜色
            },
            itemStyle: {
                color: "#5171fd",
                borderColor: "#fff"
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                        {
                            offset: 0,
                            color: "#5171fd"
                        },
                        {
                            offset: 0.5,
                            color: "#5171fd"
                        },
                        {
                            offset: 1,
                            color: "rgba(127,153,255,0.1)"
                        }
                    ],
                    false
                )
            }
        },
        {
            name: "伤害",
            type: "line",
            stack: "总量",
            data: [432, 2200, 4396, 23564, 63520, 81452],
            smooth: true,
            symbol: "circle",
            showSymbol: false,
            lineStyle: {
                color: "#ff874b" // 线条颜色
            },
            itemStyle: {
                color: "#ff874b",
                borderColor: "#fff"
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                        {
                            offset: 0,
                            color: "#ff874b"
                        },
                        {
                            offset: 0.5,
                            color: "#ff874b"
                        },
                        {
                            offset: 1,
                            color: "rgba(255,135,75,0.1)"
                        }
                    ],
                    false
                )
            }
        }
    ]
};

export const LineOptions4: EChartsOption = {
    xAxis: [
        {
            data: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"]
        }
    ],
    series: [
        {
            name: "今年人气值",
            type: "line",
            data: [5, 220, 180, 480, 220, 180, 5],
            smooth: true,
            symbol: "circle",
            showSymbol: false,
            lineStyle: {
                width: 0
            },
            itemStyle: {
                color: "#5171fd",
                borderColor: "#fff"
            },
            areaStyle: {
                shadowColor: "rgba(133,203,247,0.75)",
                shadowBlur: 15
            }
        },
        {
            name: "去年人气值",
            type: "line",
            data: [0, 160, 140, 360, 180, 160, 0],
            smooth: true,
            symbol: "circle",
            showSymbol: false,
            lineStyle: {
                width: 0
            },
            itemStyle: {
                color: "#53fcee",
                borderColor: "#fff"
            },
            areaStyle: {}
        }
    ]
};

export const PieOptions1: EChartsOption = {
    title: [
        {
            text: "85%",
            textStyle: {
                color: "#5171fd",
                fontSize: 25
            },
            top: "center",
            left: "center"
        }
    ],
    legend: {
        show: true,
        left: "15",
        top: 0,
        type: "scroll",
        itemWidth: 18,
        itemHeight: 11
    },
    series: [
        {
            name: "消费类型",
            type: "pie",
            center: ["50%", "50%"],
            itemStyle: {
                borderRadius: 4,
                borderColor: "#fff",
                borderWidth: 1
            },
            data: [
                {
                    name: "炸鸡",
                    value: 18
                },
                {
                    name: "火锅",
                    value: 35
                },
                {
                    name: "烤肉",
                    value: 37
                },
                {
                    name: "料理",
                    value: 20
                },
                {
                    name: "热干面",
                    value: 36
                },
                {
                    name: "奶茶",
                    value: 54
                }
            ],
            label: {}
        }
    ]
};

export const PieOptions2: EChartsOption = {
    legend: {
        show: true,
        left: "15",
        top: 0,
        type: "scroll",
        itemWidth: 18,
        itemHeight: 11
    },
    series: [
        {
            name: "技术占比",
            radius: "55%",
            data: [
                {
                    name: "Vue",
                    value: 75
                },
                {
                    name: "Echarts",
                    value: 85
                },
                {
                    name: "TypeScript",
                    value: 70
                },
                {
                    name: "Webpack",
                    value: 75
                },
                {
                    name: "Node",
                    value: 45
                },
                {
                    name: "jQuery",
                    value: 65
                }
            ],
            label: {}
        }
    ]
};

export const PieOptions3: EChartsOption = {
    legend: {
        show: true,
        left: "15",
        top: 0,
        type: "scroll",
        itemWidth: 18,
        itemHeight: 11
    },
    series: [
        {
            name: "技术占比",
            roseType: "radius",
            data: [
                {
                    name: "裤子",
                    value: 254
                },
                {
                    name: "外套",
                    value: 136
                },
                {
                    name: "卫衣",
                    value: 292
                },
                {
                    name: "短袖",
                    value: 192
                },
                {
                    name: "鞋子",
                    value: 650
                },
                {
                    name: "棉袄",
                    value: 450
                }
            ],
            label: {}
        }
    ]
};

export const PieOptions4: EChartsOption = {
    legend: {
        show: false
    },
    series: [
        {
            name: "生产",
            type: "pie",
            radius: ["63%", "70%"],
            center: ["50%", "53%"],
            itemStyle: {
                color: "#4FD8FF"
            },
            labelLine: {
                show: false
            },
            label: {
                show: false
            },
            data: [
                {
                    value: 85,
                    name: "生产"
                },
                {
                    value: 15,
                    name: "",
                    itemStyle: {
                        color: "#dedede"
                    }
                }
            ]
        },
        {
            name: "销售",
            type: "pie",
            radius: ["51%", "58%"],
            center: ["50%", "53%"],
            itemStyle: {
                color: "#C15FFF"
            },
            labelLine: {
                show: false
            },
            label: {
                show: false
            },
            data: [
                {
                    value: 75,
                    name: "销售"
                },
                {
                    value: 25,
                    name: "",
                    itemStyle: {
                        color: "#dedede"
                    }
                }
            ]
        },
        {
            name: "售后",
            type: "pie",
            radius: ["39%", "46%"],
            center: ["50%", "53%"],
            itemStyle: {
                color: "#FF5F55"
            },
            labelLine: {
                show: false
            },
            label: {
                show: false
            },
            data: [
                {
                    value: 65,
                    name: "售后"
                },
                {
                    value: 35,
                    name: "",
                    itemStyle: {
                        color: "#dedede"
                    }
                }
            ]
        },
        {
            name: "评价",
            type: "pie",
            radius: ["27%", "34%"],
            center: ["50%", "53%"],
            itemStyle: {
                color: "#FFC935"
            },
            labelLine: {
                show: false
            },
            label: {
                show: false
            },
            data: [
                {
                    value: 65,
                    name: "评价"
                },
                {
                    value: 35,
                    name: "",
                    itemStyle: {
                        color: "#dedede"
                    }
                }
            ]
        }
    ]
};

export const GraphOptions1: EChartsOption = {
    series: [
        {
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
                shadowBlur: 15,
                color: () => {
                    return colorList[Math.floor(Math.random() * colorList.length)];
                }
            },
            label: {
                show: true,
                color: "#fff"
            },
            data: [
                {
                    name: "Vue",
                    value: 85
                },
                {
                    name: "React",
                    value: 88
                },
                {
                    name: "Angular",
                    value: 80
                },
                {
                    name: "Node",
                    value: 70
                },
                {
                    name: "小程序",
                    value: 68
                },
                {
                    name: "H5",
                    value: 70
                },
                {
                    name: "App",
                    value: 60
                },
                {
                    name: "PS",
                    value: 65
                },
                {
                    name: "Echarts",
                    value: 75
                },
                {
                    name: "Element-UI",
                    value: 70
                },
                {
                    name: "Antd",
                    value: 65
                },
                {
                    name: "iView",
                    value: 45
                },
                {
                    name: "C语言",
                    value: 65
                },
                {
                    name: "C++",
                    value: 65
                },
                {
                    name: "C#",
                    value: 65
                },
                {
                    name: "Python",
                    value: 60
                },
                {
                    name: "Java",
                    value: 70
                },
                {
                    name: "PHP天下第一",
                    value: 110
                },
                {
                    name: "大数据",
                    value: 70
                },
                {
                    name: "MySql",
                    value: 70
                },
                {
                    name: "SQL Server",
                    value: 70
                },
                {
                    name: "Oracle",
                    value: 70
                }
            ]
        }
    ]
};

export const GraphOptions2: EChartsOption = {
    series: [
        {
            layout: "force",
            force: {
                repulsion: 1600,
                edgeLength: 200
            },
            symbolSize: 80,
            edgeLabel: {
                show: true,
                formatter: (params: any) => {
                    return params.data.name;
                }
            },
            label: {
                show: false
            },
            edgeSymbol: ["", "arrow"],
            itemStyle: {
                shadowColor: "rgba(133,203,247,0.75)",
                shadowBlur: 15
            },
            links: [
                {
                    source: "娜美",
                    target: "路飞",
                    name: "航海士",
                    lineStyle: {
                        color: "#006acc"
                    }
                },
                {
                    source: "索隆",
                    target: "路飞",
                    name: "剑士",
                    lineStyle: {
                        color: "#006acc"
                    }
                },
                {
                    source: "乌索普",
                    target: "路飞",
                    name: "狙击手",
                    lineStyle: {
                        color: "#006acc"
                    }
                },
                {
                    source: "山治",
                    target: "路飞",
                    name: "厨师",
                    lineStyle: {
                        color: "#006acc"
                    }
                },
                {
                    source: "乔巴",
                    target: "路飞",
                    name: "医生",
                    lineStyle: {
                        color: "#006acc"
                    }
                },
                {
                    source: "罗宾",
                    target: "路飞",
                    name: "学者",
                    lineStyle: {
                        color: "#006acc"
                    }
                },
                {
                    source: "弗兰奇",
                    target: "路飞",
                    name: "修船工",
                    lineStyle: {
                        color: "#006acc"
                    }
                },
                {
                    source: "布鲁克",
                    target: "路飞",
                    name: "音乐家",
                    lineStyle: {
                        color: "#006acc"
                    }
                },
                {
                    source: "甚平",
                    target: "路飞",
                    name: "掌舵手",
                    lineStyle: {
                        color: "#006acc"
                    }
                },
                {
                    source: "龙",
                    target: "路飞",
                    name: "父亲",
                    lineStyle: {
                        color: "#006acc"
                    }
                },
                {
                    source: "卡普",
                    target: "路飞",
                    name: "爷爷",
                    lineStyle: {
                        color: "#006acc"
                    }
                },
                {
                    source: "雷利",
                    target: "路飞",
                    name: "师傅",
                    lineStyle: {
                        color: "#006acc"
                    }
                },
                {
                    source: "艾斯",
                    target: "路飞",
                    name: "哥哥",
                    lineStyle: {
                        color: "#006acc"
                    }
                },
                {
                    source: "萨博",
                    target: "路飞",
                    name: "哥哥",
                    lineStyle: {
                        color: "#006acc"
                    }
                },
                {
                    source: "女帝",
                    target: "路飞",
                    name: "爱慕",
                    lineStyle: {
                        color: "#006acc"
                    }
                },
                {
                    source: "罗",
                    target: "路飞",
                    name: "同盟",
                    lineStyle: {
                        color: "#006acc"
                    }
                },
                {
                    source: "路飞",
                    target: "草帽大船团",
                    name: "船长",
                    lineStyle: {
                        color: "#ff7d18"
                    }
                }
            ],
            data: [
                {
                    name: "路飞",
                    symbolSize: 110,
                    symbol: "image://" + imgList[2]
                },
                {
                    name: "娜美",
                    symbol: "image://" + imgList[6]
                },
                {
                    name: "索隆",
                    symbol: "image://" + imgList[10]
                },
                {
                    name: "乌索普",
                    symbol: "image://" + imgList[8]
                },
                {
                    name: "山治",
                    symbol: "image://" + imgList[5]
                },
                {
                    name: "乔巴",
                    symbol: "image://" + imgList[1]
                },
                {
                    name: "罗宾",
                    symbol: "image://" + imgList[7]
                },
                {
                    name: "弗兰奇",
                    symbol: "image://" + imgList[14]
                },
                {
                    name: "布鲁克",
                    symbol: "image://" + imgList[16]
                },
                {
                    name: "甚平",
                    symbol: "image://" + imgList[17]
                },
                {
                    name: "龙",
                    symbol: "image://" + imgList[3]
                },
                {
                    name: "卡普",
                    symbol: "image://" + imgList[4]
                },
                {
                    name: "雷利",
                    symbol: "image://" + imgList[13]
                },
                {
                    name: "艾斯",
                    symbol: "image://" + imgList[0]
                },
                {
                    name: "萨博",
                    symbol: "image://" + imgList[9]
                },
                {
                    name: "女帝",
                    symbol: "image://" + imgList[11]
                },
                {
                    name: "罗",
                    symbol: "image://" + imgList[12]
                },
                {
                    name: "草帽大船团",
                    symbol: "image://" + imgList[15]
                }
            ]
        }
    ]
};

export const seriesMapOptions: EChartsOption = {};
