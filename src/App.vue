<template>
    <el-config-provider :locale="zhCn" :size="getPageSize">
        <router-view />
    </el-config-provider>
</template>

<script lang="ts" setup>
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import { useNavBarSetting } from "@/layouts/hooks/useNavBarSetting";

const { getPageSize } = useNavBarSetting();
</script>

<style scoped></style>
