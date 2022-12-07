<template>
    <el-pagination v-bind="getPropsValue" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
</template>

<script lang="ts" setup>
import paginationProps from "./props";

const props = defineProps(paginationProps);

const emit = defineEmits(["update:current-page", "update:page-size", "size-change", "current-change"]);

const attrs = useAttrs();

const getPropsValue = computed(() => {
    return { ...props, ...attrs };
});

const handleSizeChange = (val: number) => {
    emit("update:page-size", val);
    emit("size-change", val);
};

const handleCurrentChange = (val: number) => {
    emit("update:current-page", val);
    emit("current-change", val);
};
</script>

<style scoped></style>
