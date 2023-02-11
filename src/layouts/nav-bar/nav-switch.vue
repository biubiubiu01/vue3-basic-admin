<template>
    <div class="flex-row-center relative pointer nav-switch" @click="toggle()">
        <div class="nav-switch-action absolute" :class="{ dark: isDark }">
            <base-icon :svg-name="isDark ? 'dark' : 'light'" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useDark } from "@/hooks";

const { isDark, toggle } = useDark();
</script>

<style lang="scss" scoped>
.transition {
    transition: all 0.3s;
}
.nav-switch {
    margin: 0 8px;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid var(--el-border-color);
    border-radius: 10px;
    @extend .transition;
    .nav-switch-action {
        left: 1px;
        top: 0.5px;
        border-radius: 50%;
        width: 16px;
        height: 16px;
        transform: translateX(0);
        background-color: var(--el-bg-color);
        @extend .transition;
        &.dark {
            transform: translateX(20px);
        }
        .el-icon {
            position: absolute;
            left: 1px;
            bottom: 0px;
        }
    }
}
</style>
