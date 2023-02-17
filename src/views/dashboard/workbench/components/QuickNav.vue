<template>
    <base-box title="快捷导航" class="quick-nav-wrapper" :loading="loading">
        <template #extra>
            <base-icon icon="setting" :size="18" class="pointer" />
        </template>
        <div class="quick-list">
            <div class="quick-item" v-for="item in quickList" :key="item.icon">
                <base-icon :icon="item.icon" :size="20" />
                <div class="quick-title">{{ item.title }}</div>
            </div>
        </div>
    </base-box>
</template>

<script lang="ts" setup>
import { quickList } from "../column";

const props = defineProps({
    loading: {
        type: Boolean,
        default: false
    }
});
</script>

<style lang="scss" scoped>
.quick-nav-wrapper {
    :deep(.base-box-content) {
        padding: 0;
    }
    .quick-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: 92px;
        border-radius: 4px;
        .quick-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: var(--el-text-color-regular);
            cursor: pointer;
            transition: all 0.2s;
            border-right: 1px solid var(--el-border-color);
            border-bottom: 1px solid var(--el-border-color);
            &:nth-of-type(n + 4) {
                border-bottom: 0;
            }
            &:nth-of-type(3n) {
                border-right: 0;
            }
            &:hover {
                color: var(--el-text-color-primary);
                background-color: var(--el-border-color-extra-light);
            }
            .quick-title {
                font-size: var(--el-font-size-base);
                margin-top: 8px;
            }
        }
    }
}
</style>
