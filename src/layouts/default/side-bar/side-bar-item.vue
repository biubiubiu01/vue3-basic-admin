<template>
    <template v-if="!item?.children">
        <el-menu-item :index="item?.path">
            <Item :icon="item?.meta?.icon" :title="item?.meta?.title" />
        </el-menu-item>
    </template>
    <el-sub-menu v-else :index="item.path">
        <template #title>
            <Item :icon="item.meta && item.meta.icon" :title="item.meta.title" />
        </template>
        <side-bar-item v-for="child in item.children" :key="child.path" :item="child" />
    </el-sub-menu>
</template>

<script lang="ts" setup>
import Item from "./item.vue";
import { AppRouteType } from "@/router/types";
import { PropType } from "vue";
const props = defineProps({
    item: {
        type: Object as PropType<AppRouteType>
    }
});
</script>

<style scoped></style>
