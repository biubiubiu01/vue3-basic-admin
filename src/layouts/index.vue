<template>
    <el-container class="all-container">
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
import SideBar from "./side-bar/index.vue";
import NavBar from "./nav-bar/index.vue";
import TagView from "./tag-view/index.vue";
import { useTagViewSetting } from "./hooks/useTagViewSetting";

const { getTagFullscreen, getCacheTagList } = useTagViewSetting();

const headerHeader = computed(() => {
    return unref(getTagFullscreen) ? "37px" : "85px";
});
</script>

<style lang="scss" scoped>
.app-main {
    padding: 10px;
}
</style>
