<template>
    <template v-if="!item?.children || item?.meta?.hideChildren">
        <el-menu-item :index="resolvePath(item.redirect ?? item.path)" :title="item?.meta?.title">
            <base-icon :icon="item?.meta?.icon" />
            <template #title>
                <span class="base-menu-title text-hidden">{{ item?.meta?.title }}</span>
            </template>
        </el-menu-item>
    </template>
    <el-sub-menu v-else :index="resolvePath(item.path)" :title="item?.meta?.title">
        <template #title>
            <base-icon :icon="item?.meta?.icon" />
            <span class="base-menu-title text-hidden">{{ item?.meta?.title }}</span>
        </template>
        <side-bar-item v-for="child in item.children" :key="child.path" :item="child" :base-path="resolvePath(item?.path)" />
    </el-sub-menu>
</template>

<script lang="ts" setup>
import { AppRouteType } from "@/router/types";
import { PropType } from "vue";

const props = defineProps({
    item: {
        type: Object as PropType<AppRouteType>,
        default: () => {}
    },
    basePath: {
        type: String,
        default: ""
    }
});

const isInterLink = (path: string): boolean => {
    const httpReg = /^http(s?):\/\//;
    return httpReg.test(path);
};

const resolvePath = (path: string): string => {
    if (isInterLink(path as string)) {
        return path;
    }
    if (props.basePath) {
        return `${props.basePath}/${path}`;
    }
    return path;
};
</script>

<style scoped></style>
