<template>
    <base-icon el-name="setting" class="pointer box-hover action-item" :size="18" @click="showSetting" />
    <el-drawer v-model="drawerVisible" title="个性化配置" direction="rtl" custom-class="setting-drawer" :append-to-body="true">
        <div class="setting-item">
            <span>主题配置：</span>
            <el-color-picker v-model="color" show-alpha :predefine="predefineColors" />
        </div>
    </el-drawer>
</template>

<script lang="ts" setup>
import { useCssVar } from "@vueuse/core";

const drawerVisible = ref(false);

const color = useCssVar("--el-color-primary", document.body);

const predefineColors = ref([
    "#ff4500",
    "#ff8c00",
    "#ffd700",
    "#90ee90",
    "#00ced1",
    "#1e90ff",
    "#c71585",
    "rgba(255, 69, 0, 0.68)",
    "rgb(255, 120, 0)",
    "hsv(51, 100, 98)",
    "hsva(120, 40, 94, 0.5)",
    "hsl(181, 100%, 37%)",
    "hsla(209, 100%, 56%, 0.73)",
    "#c7158577"
]);

const showSetting = () => {
    drawerVisible.value = true;
};
</script>

<style lang="scss" scope>
.setting-drawer {
    &.el-drawer {
        width: 325px !important;
    }
    .setting-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        & + .setting-item {
            margin-top: 15px;
        }
    }
}
</style>
