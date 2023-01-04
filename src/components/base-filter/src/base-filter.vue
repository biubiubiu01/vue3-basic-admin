<template>
    <el-form :model="baseFilterForm" class="base-filter" inline>
        <el-form-item v-for="item in filterColumnList" :key="item.fieldType" :label="item.fieldDesc">
            <component v-model="baseFilterForm[item.fieldName]" :is="componentMap.get(item.fieldType)" v-bind="item.config" />
        </el-form-item>
    </el-form>
</template>

<script lang="ts" setup>
import baseFilterProps from "./props";
import { FilterColumnType } from "./type";
import { isUndefined } from "@/utils";
import { componentMap } from "./component-map";

const props = defineProps(baseFilterProps);

const baseFilterForm = reactive<any>({});

const filterColumnList = computed((): FilterColumnType[] => {
    return props.column.filter((item) => isUndefined(item.active) || item.active);
});
</script>

<style lang="scss" scoped></style>
