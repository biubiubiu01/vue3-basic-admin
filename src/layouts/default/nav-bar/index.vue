<template>
    <div class="nav-wrapper flex-row-center">
        <base-icon :svg-name="getCollapse ? 'unfold' : 'fold'" class="nav-fold box-hover pointer" :hover="false" @click="toggleCollapse" />
        <Breadcrumb />
        <div class="nav-actions"></div>
    </div>
</template>

<script lang="ts" setup>
import { useMenuSetting } from "../hooks/useMenuSetting";
import Breadcrumb from "./breadcrumb.vue";
const { getCollapse, toggleCollapse } = useMenuSetting();
</script>

<style lang="scss" scoped>
.nav-wrapper {
    height: 48px;
    background-color: var(--base-nav-bar-bg-color);
    box-shadow: 0 1px 4px var(--base-nav-shadow);
    .box-hover:hover {
        background: var(--base-nav-bar-box-hover);
    }
    .nav-fold {
        padding: 0 12px;
        height: 100%;
        box-sizing: content-box;
        transition: all 0.3s, padding 0s;
    }
}
</style>
