<template>
    <base-box :loading="loading" class="todo-list-wrapper" hover title="最新动态">
        <template #extra>
            <base-button type="primary" link>更多</base-button>
        </template>
        <div class="dynamic-item flex" v-for="(item, index) in dynamicList" :key="index">
            <el-avatar :size="48" :src="item.headImg" class="mr15 dynamic-head" />
            <div class="flex-auto dynamic-item-main">
                <div>
                    <span class="dynamic-item-name">{{ item.name }}</span>
                    <span class="dynamic-item-remark">{{ item.remark }}</span>
                </div>
                <div class="dynamic-item-time">{{ item.time }}</div>
                <div class="dynamic-item-content" :class="{ 'is-text': item.type === 'text' }" v-if="item.content">
                    <span v-if="item.type === 'text'">{{ item.content }}</span>
                    <el-image
                        v-else-if="item.type === 'image'"
                        v-for="(img, i) in item.content"
                        :key="img"
                        :src="img"
                        :zoom-rate="1.2"
                        :preview-src-list="(item.content as string[])"
                        :initial-index="i"
                        fit="cover"
                        class="dynamic-item-image"
                    />
                </div>
            </div>
        </div>
    </base-box>
</template>

<script lang="ts" setup>
import { dynamicList } from "../column";

const props = defineProps({
    loading: {
        type: Boolean,
        default: false
    }
});
</script>

<style lang="scss" scoped>
.dynamic-item {
    margin-bottom: 35px;
    .dynamic-head {
        z-index: 2;
    }

    .dynamic-item-main {
        position: relative;
        &::before {
            content: "";
            position: absolute;
            left: -39px;
            top: 0;
            bottom: -35px;
            width: 1px;
            background-color: var(--el-border-color);
            z-index: 1;
        }

        .dynamic-item-name {
            font-size: 18px;
        }
        .dynamic-item-remark {
            font-size: 14px;
            color: rgb(140, 150, 167);
            margin-left: 15px;
        }
        .dynamic-item-time {
            margin-top: 8px;
            font-size: 14px;
            color: rgb(140, 150, 167);
        }
        .dynamic-item-content {
            margin-top: 20px;

            &.is-text {
                background-color: var(--el-border-color-extra-light);
                padding: 15px 25px;
                color: var(--el-text-color-primary);
                border-radius: 6px;
            }
            .dynamic-item-image {
                width: 130px;
                height: 90px;
                border-radius: 4px;
                margin-right: 15px;
            }
        }
    }
}
</style>
