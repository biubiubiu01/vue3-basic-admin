<template>
    <div class="com-echarts-pie-container hidden">
        <el-row :gutter="24">
            <el-col :span="12">
                <base-box title="爱吃食物分类">
                    <base-charts type="pie" :options="PieOptions1" />
                </base-box>
            </el-col>
            <el-col :span="12">
                <base-box title="技术占比">
                    <base-charts type="pie" :options="PieOptions2" />
                </base-box>
            </el-col>
            <el-col :span="12" class="mt25">
                <base-box title="衣服开销">
                    <base-charts type="pie" :options="PieOptions3" />
                </base-box>
            </el-col>
            <el-col :span="12" class="mt25">
                <base-box title="环状图">
                    <base-charts type="pie" :options="PieOptions4" />
                </base-box>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts" setup>
import { PieOptions1, PieOptions2, PieOptions3, PieOptions4 } from "../column";
</script>

<style lang="scss" scoped></style>
