<template>
    <div class="com-virtualscroll-container">
        <el-row>
            <el-col :span="12">
                <base-box title="固定高度(传统滚动)">
                    <base-virtual-list :data="basicData" :item-height="50">
                        <template #default="{ item }">
                            <div class="item" style="text-align: center; height: 50px">
                                {{ item }}
                            </div>
                        </template>
                    </base-virtual-list>
                </base-box></el-col
            >
            <el-col :span="12">
                <base-box title="动态高度(传统方法)">
                    <base-virtual-list :data="data" :item-height="50" dynamic>
                        <template #default="{ item }">
                            <div class="item">
                                {{ item }}
                            </div>
                        </template>
                    </base-virtual-list>
                </base-box>
            </el-col>
        </el-row>
        <el-row class="mt20">
            <el-col :span="12">
                <base-box title="固定高度(IntersectionObserver)">
                    <base-virtual-observer :data="basicData" :item-height="50">
                        <template #default="{ item }">
                            <div class="item" style="text-align: center; height: 50px">
                                {{ item }}
                            </div>
                        </template>
                    </base-virtual-observer>
                </base-box></el-col
            >
        </el-row>
    </div>
</template>

<script lang="ts" setup>
import { Random } from "mockjs";

const basicData = ref<number[]>([]);
const data = ref<any[]>([]);

for (let i = 0; i < 100000; i++) {
    basicData.value.push(i);

    data.value.push(i + 1 + ". " + Random.cparagraph(1, 40));
}
</script>

<style lang="scss" scoped>
.item {
    line-height: 25px;
    text-align: left;
    box-sizing: border-box;
    padding: 10px 0;
}
</style>
