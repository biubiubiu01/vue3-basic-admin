<template>
    <base-icon :svg-name="getTagFullscreen ? 'fullOutScreen' : 'fullScreen'" @click="toggleFullscreen" class="tag-fullscreen" :size="18" />
</template>

<script lang="ts" setup>
import { useTagViewSetting } from "../hooks/useTagViewSetting";

const { toggleFullscreen, getTagFullscreen } = useTagViewSetting();
</script>

<style scoped>
.tag-fullscreen {
    border-left: 1px solid var(--base-tag-border);
    border-right: 1px solid var(--base-tag-border);
}
</style>
