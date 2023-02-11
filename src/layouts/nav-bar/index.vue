<template>
    <div class="nav-wrapper flex-row-center justify-between">
        <div class="nav-basic flex-row-center h100">
            <base-icon :svg-name="getCollapse ? 'unfold' : 'fold'" class="nav-fold pointer box-hover" @click="toggleCollapse(!getCollapse)" />
            <Breadcrumb />
        </div>
        <div class="nav-actions flex-row-center h100">
            <el-tooltip placement="bottom" content="搜索">
                <base-icon svg-name="search" class="pointer box-hover action-item" :size="20" />
            </el-tooltip>
            <base-icon svg-name="remind" class="pointer box-hover action-item" :size="20" />
            <NavFullscreen />
            <NavSwitch />
            <NavTextSize />
            <NavUser />
            <base-icon el-name="setting" class="pointer box-hover action-item" :size="18" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useMenuSetting } from "../hooks/useMenuSetting";

import Breadcrumb from "./breadcrumb.vue";
import NavUser from "./nav-user.vue";
import NavSwitch from "./nav-switch.vue";
import NavTextSize from "./nav-text-size.vue";
import NavFullscreen from "./nav-fullscreen.vue";

const { getCollapse, toggleCollapse } = useMenuSetting();
</script>

<style lang="scss" scoped>
.nav-wrapper {
    height: 48px;
    border-bottom: 1px solid var(--base-tag-border);
    transition: all 0.2s;
    background-color: var(--base-main-content-bg-color);
    .nav-basic {
        .nav-fold {
            transition: all 0.3s, padding 0s;
            padding: 0 12px;
        }
    }
    .nav-actions {
        :deep(.action-item) {
            padding: 0 8px;
        }
    }
    :deep(.box-hover) {
        height: 100%;
        box-sizing: content-box;
        &:hover {
            background: var(--base-nav-bar-box-hover);
        }
    }
}
</style>
