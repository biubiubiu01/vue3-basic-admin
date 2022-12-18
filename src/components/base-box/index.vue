<template>
    <div class="base-box-container base-box-bg" :class="{ shadow: shadow }">
        <div class="base-box-header flex-row-center justify-between" v-if="title || $slots.title">
            <div class="base-box-title flex-row-center" v-if="!$slots.title">
                {{ title }}
                <el-tooltip effect="dark" :content="helpText" placement="right" v-if="showHelp">
                    <base-icon :icon="helpIcon" :size="20" class="ml5" />
                </el-tooltip>
            </div>
            <slot name="title"></slot>

            <div class="base-box-extra">
                <slot name="extra"></slot>
            </div>
        </div>
        <div class="base-box-content">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    title: {
        type: String,
        default: ""
    },
    shadow: {
        type: Boolean,
        default: false
    },
    showHelp: {
        type: Boolean,
        default: false
    },
    helpIcon: {
        type: String,
        default: "svg-help"
    },
    helpText: {
        type: String,
        default: "提示"
    }
});
</script>

<style lang="scss" scoped>
.base-box-container {
    border-radius: 4px;
    border: 1px solid var(--base-tag-border);
    overflow: hidden;
    transition: var(--el-transition-duration);
    &.shadow {
        box-shadow: var(--el-box-shadow-light);
    }
    .base-box-header {
        padding: 16px 24px;
        color: var(--el-text-color-primary);
        font-weight: 500;
        font-size: 16px;
        border-bottom: 1px solid var(--base-tag-border);
    }
    .base-box-content {
        padding: 20px 24px;
    }
}
</style>
