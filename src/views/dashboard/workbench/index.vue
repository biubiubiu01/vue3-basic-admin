<template>
    <div class="page-workbench-container hidden">
        <TodoList :loading="loading" />
        <el-row :gutter="16" class="mt20">
            <el-col :span="16">
                <base-box :loading="loading" title="反馈时长统计图">
                    <base-charts type="line" :options="lineOptions" />
                </base-box>
                <DynamicInfo :loading="loading" />
            </el-col>

            <el-col :span="8">
                <QuickNav :loading="loading" />
                <base-box :loading="loading" title="完成率">
                    <base-charts type="liquidfill" :options="liquidfillOptions" />
                </base-box>
                <NoticeList :loading="loading" />
                <Calendar :loading="loading" />
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts" setup>
import TodoList from "./components/TodoList.vue";
import QuickNav from "./components/QuickNav.vue";
import DynamicInfo from "./components/DynamicInfo.vue";
import NoticeList from "./components/NoticeList.vue";
import Calendar from "./components/Calendar.vue";
import type { EChartsOption } from "echarts";

const loading = ref(true);

setTimeout(() => {
    loading.value = false;
}, 1200);

const lineOptions: EChartsOption = reactive({
    xAxis: [
        {
            axisTick: {
                show: false
            },
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        }
    ],
    series: [
        {
            data: [120, 85, 65, 75, 140, 155, 175],

            areaStyle: {}
        }
    ]
});

const liquidfillOptions: EChartsOption = reactive({
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
</script>

<style lang="scss" scoped></style>
