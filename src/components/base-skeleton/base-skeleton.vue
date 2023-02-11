<template>
    <el-skeleton v-bind="getPropsValue">
        <template #default>
            <slot></slot>
        </template>
        <template #template>
            <slot name="template"></slot>
            <div v-if="!$slots.template && isBox">
                <el-row :gutter="8">
                    <el-col :span="22"> <el-skeleton-item variant="text" /></el-col>
                </el-row>
                <el-row :gutter="8">
                    <el-col :span="8"><el-skeleton-item variant="text" /></el-col>
                    <el-col :span="15"><el-skeleton-item variant="text" /></el-col>
                </el-row>
                <el-row :gutter="8">
                    <el-col :span="6"><el-skeleton-item variant="text" /></el-col>
                    <el-col :span="18"><el-skeleton-item variant="text" /></el-col>
                </el-row>
                <el-row :gutter="8">
                    <el-col :span="13"><el-skeleton-item variant="text" /></el-col>
                    <el-col :span="8"><el-skeleton-item variant="text" /></el-col>
                </el-row>
                <el-row :gutter="8">
                    <el-col :span="4"><el-skeleton-item variant="text" /></el-col>
                    <el-col :span="3"><el-skeleton-item variant="text" /></el-col>
                    <el-col :span="16"><el-skeleton-item variant="text" /></el-col>
                </el-row>
            </div>
        </template>
    </el-skeleton>
</template>

<script lang="ts" setup>
const props = defineProps({
    loading: {
        type: Boolean,
        default: false
    },
    count: {
        type: Number,
        default: 1
    },
    animated: {
        type: Boolean,
        default: true
    },
    rows: {
        type: Number,
        default: 3
    },
    isBox: {
        type: Boolean,
        default: false
    },
    throttle: {
        type: Number,
        default: 0
    }
});

const attrs = useAttrs();

const getPropsValue = computed(() => {
    return { ...props, ...attrs };
});
</script>

<style lang="scss">
.el-skeleton__item {
    height: 14px;
    margin: 4px 0;
    &:first-of-type {
        margin-top: 0;
    }
    &:last-of-type {
        margin-bottom: 0;
    }
}
</style>
