<template>
    <div class="com-echarts-line-container hidden">
        <el-row :gutter="24">
            <el-col :span="12">
                <base-box title="时间管理统计图">
                    <base-charts type="line" :options="LineOptions1" />
                </base-box>
            </el-col>
            <el-col :span="12">
                <base-box title="气温统计图">
                    <base-charts type="line" :options="LineOptions2" />
                </base-box>
            </el-col>
            <el-col :span="12" class="mt25">
                <base-box title="LOL经济与伤害对比图">
                    <base-charts type="line" :options="LineOptions3" />
                </base-box>
            </el-col>
            <el-col :span="12" class="mt25">
                <base-box title="LOL直播人气值">
                    <base-charts type="line" :options="LineOptions4" />
                </base-box>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts" setup>
import { LineOptions1, LineOptions2, LineOptions3, LineOptions4 } from "../column";
</script>

<style lang="scss" scoped></style>
