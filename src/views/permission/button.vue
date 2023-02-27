<template>
    <div class="page-permission-button">
        <base-box title="baseButton方式（推荐）">
            当前角色：{{ userInfo.role }}
            <div class="mt25">
                切换角色：
                <el-radio-group v-model="userInfo.role" @change="changeRole">
                    <el-radio-button label="admin" />
                    <el-radio-button label="test" />
                </el-radio-group>
            </div>
            <div class="mt25">
                <base-button auth="admin_permission_button:admin">仅admin权限可见</base-button>
            </div>
        </base-box>
        <base-box title="自定义指令方式（不可动态切换）">
            当前角色：{{ userInfo.role }}
            <div class="mt25">
                切换角色：
                <el-radio-group v-model="userInfo.role" @change="changeRole">
                    <el-radio-button label="admin" />
                    <el-radio-button label="test" />
                </el-radio-group>
            </div>
            <div class="mt25">
                <base-button v-permission="'admin_permission_button:admin'">仅admin权限可见</base-button>
            </div>
        </base-box>
    </div>
</template>

<script lang="ts" setup>
import { useUserStoreWithOut } from "@/stores/modules/user";

const userStore = useUserStoreWithOut();

const { userInfo } = storeToRefs(userStore);

const changeRole = (val: string) => {
    userStore.changeRole(val);
};
</script>

<style lang="scss" scoped></style>
