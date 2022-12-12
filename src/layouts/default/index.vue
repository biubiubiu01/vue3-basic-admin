<template>
    <el-container class="all-container">
        <SideBar />
        <el-container>
            <el-header height="80px" class="pl0 pr0">
                <NavBar />
            </el-header>
            <el-main> <el-button>点击</el-button> </el-main>
        </el-container>
    </el-container>
</template>

<script lang="ts" setup>
import SideBar from "./side-bar/index.vue";
import NavBar from "./nav-bar/index.vue";
</script>

<style lang="scss" scoped></style>
