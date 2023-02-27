<template>
    <el-aside :width="`${sideBarWidth}px`">
        <div class="base-side-container flex-direction-column h100" :class="{ collapse: getCollapse }">
            <Logo :title="getSystemTitle" />
            <el-scrollbar class="side-main flex-auto">
                <el-menu :mode="getMode" :collapse="getCollapse" :default-active="$route.path" :collapse-transition="false" unique-opened router>
                    <SideBarItem v-for="route in permissionStore.route" :key="route.path" :item="route" />
                </el-menu>
            </el-scrollbar>
        </div>
    </el-aside>
</template>

<script lang="ts" setup>
import Logo from "./logo.vue";
import SideBarItem from "./side-bar-item.vue";
import { useMenuSetting } from "../hooks/useMenuSetting";
import { usePermissionStoreWithOut } from "@/stores/modules/permission";

const { getCollapse, getMode, getSystemTitle, getSideWidth, getSideCollapsed } = useMenuSetting();

const permissionStore = usePermissionStoreWithOut();

const sideBarWidth = computed(() => {
    return unref(getCollapse) ? unref(getSideCollapsed) : unref(getSideWidth);
});
</script>

<style lang="scss">
@use "./index.scss";
</style>
