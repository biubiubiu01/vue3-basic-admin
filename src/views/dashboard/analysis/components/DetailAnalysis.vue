<template>
    <el-row :gutter="16">
        <el-col :span="8">
            <base-box :loading="loading" title="消费种类占比">
                <base-charts type="bar" :options="barOption" />
            </base-box>
        </el-col>
        <el-col :span="8">
            <base-box :loading="loading" title="热门搜索">
                <base-charts type="bar" :options="barOption" />
            </base-box>
        </el-col>
        <el-col :span="8">
            <base-box :loading="loading" title="到店人数统计">
                <base-charts type="bar" :options="barOption" />
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

const barOption: EChartsOption = reactive({
    xAxis: [
        {
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: "rgb(160, 150, 167)"
                }
            },
            data: [...new Array(12)].map((_item, index) => `${index + 1}月`)
        }
    ],
    series: [
        {
            barWidth: 10,
            itemStyle: {
                color: "#409eff"
            },
            data: [60, 75, 55, 40, 100, 140, 160, 120, 140, 85, 95, 75]
        }
    ]
});
</script>

<style lang="scss" scoped></style>
