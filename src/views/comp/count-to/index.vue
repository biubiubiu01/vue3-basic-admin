<template>
    <base-box>
        <div class="tc">
            <base-count-to v-bind="options" />
        </div>
        <div class="mt30">
            <base-form :columns="CountToColumn" :model="options" inline :colProps="{ span: 6 }">
                <template #color>
                    <el-color-picker v-model="options.color" />
                </template>
            </base-form>
        </div>
    </base-box>
</template>

<script lang="ts" setup>
import { CountToColumn } from "../colums";

const options = reactive({
    startVal: 0,
    endVal: 2023,
    duration: 1500,
    decimals: 0,
    separator: ",",
    prefix: "",
    suffix: "",
    size: 45,
    color: "#409eff"
});
</script>

<style lang="scss" scope></style>
