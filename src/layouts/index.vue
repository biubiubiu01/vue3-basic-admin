<template>
    <el-container class="all-container" ref="layoutRef">
        <SideBar v-show="!getTagFullscreen" />
        <el-container class="base-app-bg">
            <el-header :height="headerHeader" class="pl0 pr0">
                <NavBar v-show="!getTagFullscreen" />
                <TagView />
            </el-header>
            <el-main class="app-main">
                <RouterView>
                    <template #default="{ Component, route }">
                        <transition name="el-fade-in-linear" mode="out-in">
                            <keep-alive :include="getCacheTagList">
                                <div class="all-container">
                                    <component :is="Component" :key="route.fullPath" />
                                </div>
                            </keep-alive>
                        </transition>
                    </template>
                </RouterView>
            </el-main>
        </el-container>
    </el-container>
</template>

<script lang="ts" setup>
import { useResizeObserver, useDebounceFn } from "@vueuse/core";
import SideBar from "./side-bar/index.vue";
import NavBar from "./nav-bar/index.vue";
import TagView from "./tag-view/index.vue";
import { useTagViewSetting } from "./hooks/useTagViewSetting";
import { useMenuSetting } from "./hooks/useMenuSetting";

const { getTagFullscreen, getCacheTagList } = useTagViewSetting();

const { toggleCollapse } = useMenuSetting();

const layoutRef = ref();

const headerHeader = computed(() => {
    return unref(getTagFullscreen) ? "37px" : "85px";
});

const resizeLayout = () => {
    const width = unref(layoutRef).$el.offsetWidth;
    if (width <= 992) {
        toggleCollapse(true);
    } else {
        toggleCollapse(false);
    }
};

useResizeObserver(
    layoutRef,
    useDebounceFn(() => {
        resizeLayout();
    }, 100)
);
</script>

<style lang="scss" scoped>
.app-main {
    padding: 10px;
}
</style>
