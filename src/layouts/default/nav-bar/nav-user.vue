<template>
    <el-dropdown class="pointer box-hover action-item">
        <div class="flex-row-center">
            <el-avatar :size="36" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
            <span class="ml10">Admin</span>
        </div>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item><base-icon svg-name="editPassword" /> 修改密码</el-dropdown-item>
                <el-dropdown-item divided><base-icon svg-name="exit" />退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script setup></script>

<style scoped></style>
