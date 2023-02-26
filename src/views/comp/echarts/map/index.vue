<template>
    <div class="com-echarts-map-container hidden">
        <base-box title="分布图" class="dark-bg">
            <base-map height="600px" type="map" click-down />
        </base-box>
        <base-box title="散点图" class="dark-bg">
            <base-map height="600px" type="scatter" :options="scatterOptions" />
        </base-box>
        <base-box title="热力图" class="dark-bg">
            <base-map height="600px" type="heatmap" :options="heatmapOptions" />
        </base-box>
    </div>
</template>

<script lang="ts" setup>
const scatterOptions = ref({
    series: [
        {
            data: [
                {
                    name: "武汉",
                    value: [114.31, 30.52, 10]
                },
                {
                    name: "上海",
                    value: [121.48, 31.22, 20]
                },
                {
                    name: "北京",
                    value: [116.46, 39.92, 30]
                },
                {
                    name: "广州",
                    value: [113.23, 23.16, 40]
                },
                {
                    name: "杭州",
                    value: [120.19, 30.26, 40]
                }
            ]
        }
    ]
});

const heatmapOptions = ref({
    series: [
        {
            data: [
                {
                    name: "地点1",
                    value: [114.412021, 30.481201, 1000]
                },
                {
                    name: "地点2",
                    value: [114.411266, 30.480921, 1000]
                },
                {
                    name: "地点3",
                    value: [114.411985, 30.481387, 1000]
                },
                {
                    name: "地点4",
                    value: [114.411159, 30.481917, 1000]
                },
                {
                    name: "地点5",
                    value: [114.412488, 30.481917, 1000]
                },
                {
                    name: "地点6",
                    value: [114.413638, 30.482726, 1000]
                },
                {
                    name: "地点7",
                    value: [114.412344, 30.48341, 1000]
                },
                {
                    name: "地点8",
                    value: [114.413494, 30.483939, Math.floor(Math.random() * 1000)]
                },
                {
                    name: "地点9",
                    value: [114.411877, 30.484469, Math.floor(Math.random() * 1000)]
                },
                {
                    name: "地点10",
                    value: [114.412308, 30.484531, Math.floor(Math.random() * 1000)]
                },
                {
                    name: "地点11",
                    value: [114.407853, 30.4845, Math.floor(Math.random() * 1000)]
                },
                {
                    name: "地点12",
                    value: [114.407242, 30.48285, Math.floor(Math.random() * 1000)]
                },
                {
                    name: "地点13",
                    value: [114.412021, 30.481201, Math.floor(Math.random() * 1000)]
                },
                {
                    name: "地点14",
                    value: [114.412021, 30.481201, Math.floor(Math.random() * 1000)]
                },
                {
                    name: "地点15",
                    value: [114.412021, 30.481201, Math.floor(Math.random() * 1000)]
                },
                {
                    name: "地点16",
                    value: [114.412021, 30.481201, Math.floor(Math.random() * 1000)]
                },
                {
                    name: "地点17",
                    value: [114.412021, 30.481201, Math.floor(Math.random() * 1000)]
                },
                {
                    name: "地点18",
                    value: [114.412021, 30.481201, Math.floor(Math.random() * 1000)]
                },
                {
                    name: "地点19",
                    value: [114.412021, 30.481201, Math.floor(Math.random() * 1000)]
                },
                {
                    name: "地点20",
                    value: [114.447306, 30.560407, Math.floor(Math.random() * 1000)]
                },
                {
                    name: "地点21",
                    value: [114.296104, 30.600017, Math.floor(Math.random() * 1000)]
                },
                {
                    name: "地点22",
                    value: [114.29402, 30.597406, Math.floor(Math.random() * 1000)]
                },
                {
                    name: "地点23",
                    value: [114.300487, 30.595106, Math.floor(Math.random() * 1000)]
                },
                {
                    name: "地点24",
                    value: [114.295026, 30.592805, Math.floor(Math.random() * 1000)]
                },
                {
                    name: "地点25",
                    value: [114.291648, 30.597282, 1000]
                },
                {
                    name: "地点26",
                    value: [114.287408, 30.599147, 1000]
                },
                {
                    name: "地点27",
                    value: [114.282378, 30.598649, 1000]
                },
                {
                    name: "地点28",
                    value: [114.286689, 30.600514, 1000]
                }
            ]
        }
    ]
});
</script>

<style lang="scss" scoped>
.dark-bg {
    background-color: #001a3a;
    :deep(.base-box-title) {
        color: #fff;
    }
}
</style>
