<template>
    <el-tooltip placement="bottom" content="全屏">
        <base-icon
            :svg-name="isFullscreen ? 'fullOutScreen' : 'fullScreen'"
            @click="toggleFullScreen"
            class="pointer box-hover action-item"
            :size="18"
        />
    </el-tooltip>
</template>

<script lang="ts" setup>
import { useFullscreen } from "@vueuse/core";

const { toggle: toggleFullScreen, isFullscreen } = useFullscreen();
</script>

<style scoped></style>
