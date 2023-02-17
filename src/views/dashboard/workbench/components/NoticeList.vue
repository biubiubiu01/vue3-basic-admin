<template>
    <base-box title="我的通知" :loading="loading">
        <template #extra>
            <base-button type="primary" link>更多</base-button>
        </template>
        <div class="notice-item flex-row-center" v-for="(item, index) in noticeList" :key="index">
            <el-tag :type="item.type === '消息' ? 'warning' : ''">{{ item.type }}</el-tag>
            <div class="flex-auto ml10 text-hidden notice-item-content">{{ item.content }}</div>
        </div>
    </base-box>
</template>

<script lang="ts" setup>
import { noticeList } from "../column";

const props = defineProps({
    loading: {
        type: Boolean,
        default: false
    }
});
</script>

<style lang="scss" scoped>
.notice-item {
    margin-bottom: 12px;
    &:last-of-type {
        margin-bottom: 0;
    }
    .notice-item-content {
        font-size: 14px;
        color: var(--el-text-color-regular);
        cursor: pointer;
    }
}
</style>
