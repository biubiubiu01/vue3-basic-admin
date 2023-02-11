<template>
    <el-row :gutter="16">
        <el-col :span="16">
            <base-box :loading="loading" title="营业额度统计图">
                <base-charts type="bar" :options="barOption" />
            </base-box>
        </el-col>
        <el-col :span="8">
            <base-box :loading="loading" title="实时动态">
                <TrueDynamic />
            </base-box>
        </el-col>
    </el-row>
</template>

<script lang="ts" setup>
import type { EChartsOption } from "echarts";
import TrueDynamic from "./TrueDynamic.vue";

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
            barWidth: 25,
            itemStyle: {
                color: "#409eff"
            },
            data: [60, 75, 55, 40, 100, 140, 160, 120, 140, 85, 95, 75]
        }
    ]
});
</script>

<style lang="scss" scoped></style>
