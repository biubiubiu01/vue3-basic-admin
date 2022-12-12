<template>
    <template v-if="!item?.children">
        <el-menu-item :index="item?.path" :title="item?.meta?.title">
            <base-icon :icon="item?.meta?.icon" />
            <template #title>
                <span class="base-menu-title text-hidden">{{ item?.meta?.title }}</span>
            </template>
        </el-menu-item>
    </template>
    <el-sub-menu v-else :index="item.path" :title="item?.meta?.title">
        <template #title>
            <base-icon :icon="item?.meta?.icon" />
            <span class="base-menu-title text-hidden">{{ item?.meta?.title }}</span>
        </template>
        <side-bar-item v-for="child in item.children" :key="child.path" :item="child" />
    </el-sub-menu>
</template>

<script lang="ts" setup>
import { AppRouteType } from "@/router/types";
import { PropType } from "vue";
const props = defineProps({
    item: {
        type: Object as PropType<AppRouteType>
    }
});
</script>

<style scoped></style>
