import type { EChartsOption } from "echarts";

const liquidfillConfig: EChartsOption = {
    series: [
        {
            // @ts-ignore
            type: "liquidFill",
            radius: "75%",
            center: ["50%", "45%"],
            data: [],
            backgroundStyle: {
                color: {
                    type: "linear",
                    x: 1,
                    y: 0,
                    x2: 0.5,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 1,
                            color: "rgba(168, 218, 247, 0.4)"
                        },
                        {
                            offset: 0.5,
                            color: "rgba(168, 218, 247, 0.5)"
                        },
                        {
                            offset: 0,
                            color: "rgba(168, 218, 247, 0.8)"
                        }
                    ],
                    globalCoord: false
                }
            },
            outline: {
                borderDistance: 0,
                itemStyle: {
                    borderWidth: 5,
                    borderColor: {
                        type: "linear",
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: "rgba(81,142,215, 0)"
                            },
                            {
                                offset: 0.5,
                                color: "rgba(53,142,215, 0.45)"
                            },
                            {
                                offset: 1,
                                color: "rgba(53,142,215, 0.6)"
                            }
                        ],
                        globalCoord: false
                    },
                    shadowColor: "rgba(66,102,247, 0.55)",
                    shadowBlur: 10
                }
            },
            label: {
                fontSize: 25
            }
        }
    ]
};

export default liquidfillConfig;
