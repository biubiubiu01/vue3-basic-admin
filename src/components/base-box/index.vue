<template>
    <div class="base-box-container base-box-bg" :class="{ shadow: shadow }" ref="baseBoxRef">
        <div class="base-box-header" v-if="title || $slots.title">
            <div class="flex-row-center justify-between">
                <div class="base-box-title flex-row-center" v-if="!$slots.title">
                    {{ title }}
                    <el-tooltip effect="dark" :content="helpText" placement="right" v-if="showHelp">
                        <base-icon :icon="helpIcon" :size="20" class="ml5" />
                    </el-tooltip>
                </div>
                <div class="base-box-extra tr">
                    <slot name="extra"></slot>
                </div>
            </div>

            <slot name="title"></slot>
        </div>
        <div class="base-box-content">
            <el-scrollbar :max-height="maxHeight" :height="height">
                <slot></slot>
            </el-scrollbar>
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
    },
    maxHeight: {
        type: [Number, String]
    },
    height: {
        type: [Number, String]
    }
});

const baseBoxRef = ref();

defineExpose({
    instance: baseBoxRef
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
    & + .base-box-container {
        margin-top: 16px;
    }
    .base-box-header {
        padding: 16px 24px;
        color: var(--el-text-color-primary);
        font-weight: 500;
        font-size: 16px;
        border-bottom: 1px solid var(--base-tag-border);
    }
    .base-box-content {
        padding: 25px;
    }
}
</style>
