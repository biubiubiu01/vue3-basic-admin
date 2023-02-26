<template>
    <base-icon el-name="setting" class="pointer box-hover action-item" :size="18" @click="showSetting" />
    <el-drawer v-model="drawerVisible" title="个性化配置" direction="rtl" custom-class="setting-drawer" :append-to-body="true">
        <div class="setting-item">
            <el-divider>主题配置 </el-divider>
        </div>
        <div class="setting-item">
            <el-divider> 布局方式 </el-divider>
        </div>
    </el-drawer>
</template>

<script lang="ts" setup>
const drawerVisible = ref(false);

const showSetting = () => {
    drawerVisible.value = true;
};
</script>

<style lang="scss" scope>
.setting-drawer {
    &.el-drawer {
        width: 325px !important;
    }
}
</style>
