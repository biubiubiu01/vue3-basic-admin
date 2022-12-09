<template>
    <el-container class="all-container">
        <el-aside>
            <SideBar />
        </el-aside>
        <el-container height="80px">
            <el-header>
                <base-button type="primary" @click="toggleCollapse">1213</base-button>
            </el-header>
            <el-main> </el-main>
        </el-container>
    </el-container>
</template>

<script lang="ts" setup>
import SideBar from "./side-bar/index.vue";
import { useMenuSetting } from "./hooks/useMenuSetting";

const { toggleCollapse } = useMenuSetting();
</script>

<style lang="scss" scoped></style>
