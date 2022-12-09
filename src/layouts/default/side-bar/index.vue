<template>
    <div class="base-side-container flex-direction-column h100" :class="{ collapse: getCollapse }" :style="{ width: sideBarWidth + 'px' }">
        <Logo :title="getSystemTitle" :collapse="getCollapse" />
        <el-scrollbar class="side-main flex-auto">
            <el-menu :mode="getMode" :collapse="getCollapse" :default-active="$route.path" :collapse-transition="false" unique-opened router>
                <SideBarItem v-for="route in asyncRoute" :key="route.path" :item="route" />
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script lang="ts" setup>
import Logo from "./logo.vue";
import SideBarItem from "./side-bar-item.vue";
import { useMenuSetting } from "../hooks/useMenuSetting";
import { AppRouteType } from "@/router/types";

const { getCollapse, getMode, getSystemTitle, getSideWidth, getSideCollapsed } = useMenuSetting();

const sideBarWidth = computed(() => {
    return unref(getCollapse) ? unref(getSideCollapsed) : unref(getSideWidth);
});

const asyncRoute = computed((): AppRouteType[] => {
    return [
        {
            path: "/",
            name: "",
            meta: {
                title: "首页首页首页首页首页首页首页首页首页首页首页首页首页首页",
                icon: "location"
            }
        },
        {
            path: "/t",
            name: "",
            meta: {
                title: "测试",
                icon: "location"
            }
        },
        {
            path: "/s",
            name: "",
            meta: {
                title: "测试222",
                icon: "location"
            },
            children: [
                {
                    path: "test",
                    name: "",
                    meta: {
                        title: "测字111",
                        icon: "location"
                    }
                }
            ]
        }
    ].filter((item) => !(item?.meta && item?.meta?.hidden));
});
</script>

<style lang="scss">
@use "@/styles/side-bar.scss";
</style>
