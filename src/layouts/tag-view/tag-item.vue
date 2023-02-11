<template>
    <router-link class="tag-item relative pointer flex-row-center" :to="tag!.path" :class="{ active: $route.fullPath === tag!.fullPath }">
        <span class="tag-title">{{ tag?.meta?.title }}</span>
        <base-icon
            el-name="close"
            class="ml5 close-icon"
            :size="12"
            hover
            @click.prevent.stop="emit('close', tag)"
            v-if="!tag?.meta?.affix && closed"
        />
    </router-link>
</template>

<script lang="ts" setup>
import type { RouteLocationNormalizedLoaded } from "vue-router";
import type { PropType } from "vue";
const props = defineProps({
    tag: {
        type: Object as PropType<RouteLocationNormalizedLoaded>
    },
    closed: {
        type: Boolean,
        default: true
    }
});

const emit = defineEmits(["close"]);
</script>

<style scoped></style>
