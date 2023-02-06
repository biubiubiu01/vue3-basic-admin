<template>
    <div class="icon-container">
        <base-box title="图标选择器" showHelp helpText="点击图标可选择图标">
            <base-icon-picker width="300px" />
        </base-box>
        <base-box title="el-icon 图标" showHelp helpText="点击图标可复制代码">
            <div class="icon-list">
                <div class="icon-item" v-for="icon in elIconList" :key="icon" @click="handleCopyIcon(icon)">
                    <base-icon :icon="icon" :size="24" />
                    <div class="icon-title">{{ icon }}</div>
                </div>
            </div>
        </base-box>
        <base-box title="svg 图标" showHelp helpText="点击图标可复制代码">
            <div class="icon-list">
                <div class="icon-item" v-for="icon in svgIconList" :key="icon" @click="handleCopyIcon(`svg-${icon}`)">
                    <base-icon :icon="`svg-${icon}`" :size="24" />
                    <div class="icon-title">{{ icon }}</div>
                </div>
            </div>
        </base-box>
        <base-box title="iconfont 图标" showHelp helpText="点击图标可复制代码">
            <div class="icon-list">
                <div class="icon-item" v-for="icon in iconfontList" :key="icon" @click="handleCopyIcon(`icon-${icon}`)">
                    <base-icon :icon="`icon-${icon}`" :size="24" />
                    <div class="icon-title">{{ icon }}</div>
                </div>
            </div>
        </base-box>
    </div>
</template>

<script lang="ts" setup>
import { elIconList, svgIconList, iconfontList } from "@/components/base-icon/icon";
import { useClipboard } from "@vueuse/core";
import { useMessage } from "@/hooks";

const { copy, text } = useClipboard();
const { success } = useMessage();

const handleCopyIcon = async (icon: string) => {
    await copy(`<base-icon icon="${icon}" :size="24" />`);
    success(`${unref(text)} Copy success`);
};
</script>

<style lang="scss" scoped>
.icon-list {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-auto-rows: 92px;
    border-top: 1px solid var(--el-border-color);
    border-left: 1px solid var(--el-border-color);
    border-radius: 4px;
    .icon-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: var(--el-text-color-regular);
        cursor: pointer;
        transition: all 0.2s;
        border-right: 1px solid var(--el-border-color);
        border-bottom: 1px solid var(--el-border-color);
        &:hover {
            color: var(--el-text-color-primary);
            background-color: var(--el-border-color-extra-light);
        }
        .icon-title {
            font-size: var(--el-font-size-base);
            margin-top: 8px;
        }
    }
}
</style>
