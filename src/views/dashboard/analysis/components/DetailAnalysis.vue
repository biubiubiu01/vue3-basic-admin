<template>
    <el-row :gutter="16">
        <el-col :span="8">
            <base-box :loading="loading" title="消费种类占比">
                <base-charts type="pie" :options="pieOption" />
            </base-box>
        </el-col>
        <el-col :span="8">
            <base-box :loading="loading" title="热门搜索">
                <base-charts type="wordcloud" :options="wordOption" />
            </base-box>
        </el-col>
        <el-col :span="8">
            <base-box :loading="loading" title="浏览转化率统计">
                <base-charts type="radar" :options="radarOption" />
            </base-box>
        </el-col>
    </el-row>
</template>

<script lang="ts" setup>
import type { EChartsOption } from "echarts";

const props = defineProps({
    loading: {
        type: Boolean,
        default: false
    }
});

const pieOption: EChartsOption = reactive({
    series: [
        {
            icon: "circle",
            radius: ["35%", "55%"],

            itemStyle: {
                borderRadius: 10,
                borderColor: "#fff",
                borderWidth: 2
            },
            data: [
                { value: 1048, name: "游戏" },
                { value: 484, name: "饮食" },
                { value: 300, name: "服饰" },
                { value: 780, name: "旅游" }
            ]
        }
    ]
});

const colorList = ["#4FD8FF", "#C15FFF", "#FF5F55", "#FFC935", "#767BFB"];

const wordOption: EChartsOption = reactive({
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

const radarOption: EChartsOption = reactive({
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
