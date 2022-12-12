<template>
    <div class="base-empty">
        <div class="base-empty-image">
            <base-icon v-if="!$slots.icon" :svg-name="icon" :size="60" />
            <slot name="icon"></slot>
        </div>
        <div class="base-empty-description">
            <template v-if="!$slots.description">
                {{ description }}
            </template>
            <slot name="description"></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    description: {
        type: String,
        default: "暂无数据"
    },
    icon: {
        type: String,
        default: "empty"
    }
});
</script>

<style lang="scss" scoped>
.base-empty {
    margin: 32px 0;
    color: var(---base-empty-description);
    font-size: var(--el-font-size-base);
    line-height: 1.5715;
    text-align: center;
    .base-empty-image {
        margin-bottom: -5px;
    }
}
</style>
