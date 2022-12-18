<template>
    <div class="icon-container">
        <base-box title="el-icon 图标" showHelp helpText="点击图标可复制代码">
            <div class="icon-list" v-for="icon in elIconList" :key="icon">
                <base-icon :svg-name="icon" />
            </div>
        </base-box>
    </div>
</template>

<script lang="ts" setup>
import { elIconList } from "./icon";

console.log(elIconList);
</script>

<style lang="scss" scoped>
.icon-list {
    display: grid;
    grid-template-columns: repeat(6, 200px);
    grid-gap: 20px;
    grid-template-rows: 100px 200px;
}
</style>
