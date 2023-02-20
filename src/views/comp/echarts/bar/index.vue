<template>
    <div class="com-echarts-bar-container hidden">
        <el-row :gutter="24">
            <el-col :span="12">
                <base-box title="游戏时长统计图">
                    <base-charts type="bar" :options="BarOptions1" />
                </base-box>
            </el-col>
            <el-col :span="12">
                <base-box title="运动类目统计图">
                    <base-charts type="bar" :options="BarOptions2" />
                </base-box>
            </el-col>
            <el-col :span="12" class="mt25">
                <base-box title="游戏热度统计图">
                    <base-charts type="bar" :options="BarOptions3" />
                </base-box>
            </el-col>
            <el-col :span="12" class="mt25">
                <base-box title="运动得分">
                    <base-charts type="bar" :options="BarOptions4" />
                </base-box>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts" setup>
import { BarOptions1, BarOptions2, BarOptions3, BarOptions4 } from "../column";
</script>

<style lang="scss" scoped></style>
