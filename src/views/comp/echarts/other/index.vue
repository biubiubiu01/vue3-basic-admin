<template>
    <div class="com-echarts-other-container hidden">
        <el-row :gutter="24">
            <el-col :span="12">
                <base-box title="水球图">
                    <base-charts type="liquidfill" :options="liquidfillOptions" />
                </base-box>
            </el-col>
            <el-col :span="12">
                <base-box title="雷达图">
                    <base-charts type="radar" :options="radarOption" />
                </base-box>
            </el-col>
            <el-col :span="24" class="mt25">
                <base-box title="词云图">
                    <base-charts type="wordcloud" :options="wordOption" />
                </base-box>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts" setup>
const colorList = ["#4FD8FF", "#C15FFF", "#FF5F55", "#FFC935", "#767BFB"];

const wordOption = reactive({
    series: [
        {
            gridSize: 28,
            textStyle: {
                fontFamily: "sans-serif",
                color: () => {
                    return colorList[Math.floor(Math.random() * colorList.length)];
                }
            },
            data: [
                {
                    name: "ChatGpt",
                    value: 100
                },
                {
                    name: "Vue3",
                    value: 70
                },
                {
                    name: "TypeScript",
                    value: 55
                },
                {
                    name: "AI",
                    value: 86
                },
                {
                    name: "VITE",
                    value: 54
                },
                {
                    name: "LowCode",
                    value: 85
                },
                {
                    name: "React",
                    value: 65
                },
                {
                    name: "ECharts",
                    value: 77
                },
                {
                    name: "Three",
                    value: 66
                },
                {
                    name: "Cesium",
                    value: 52
                },
                {
                    name: "MapBox",
                    value: 43
                },
                {
                    name: "Nuxt",
                    value: 51
                },
                {
                    name: "Electron",
                    value: 32
                },
                {
                    name: "Uniapp",
                    value: 48
                },
                {
                    name: "Flutter",
                    value: 45
                }
            ]
        }
    ]
});

const liquidfillOptions = reactive({
    series: [
        {
            data: [0.68, 0.68, 0.68, 0.68],
            label: {
                formatter: "68%",
                fontSize: 32
            }
        }
    ]
});

const radarOption = reactive({
    radar: {
        indicator: [
            {
                name: "奶茶"
            },
            {
                name: "咖啡"
            },
            {
                name: "牛奶"
            },
            {
                name: "矿泉水"
            },
            {
                name: "可乐"
            },
            {
                name: "其他"
            }
        ]
    },
    series: [
        {
            data: [
                {
                    value: [75, 85, 80, 80, 90, 90],
                    name: "访问",
                    itemStyle: {
                        color: "#FF9E8C"
                    }
                },
                {
                    value: [95, 75, 75, 50, 40, 20],
                    name: "购买",
                    itemStyle: {
                        color: "#00D2C9"
                    }
                }
            ]
        }
    ]
});
</script>

<style lang="scss" scoped></style>
