<template>
    <el-dropdown class="pointer box-hover action-item" trigger="click">
        <div class="flex-row-center">
            <el-avatar :size="36" :src="headImg" />
            <span class="ml10">{{ userStore.userInfo.username }}</span>
        </div>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item><base-icon svg-name="editPassword" class="mr5" /> 修改密码</el-dropdown-item>
                <el-dropdown-item divided @click="handleLogOut"><base-icon svg-name="exit" class="mr5" />退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script lang="ts" setup>
import headImg from "@/assets/images/user/headImg.gif";
import { useUserStoreWithOut } from "@/stores/modules/user";

const router = useRouter();
const route = useRoute();

const userStore = useUserStoreWithOut();

const handleLogOut = () => {
    userStore.logout(router, route);
};
</script>

<style scoped></style>
