<template>
    <el-config-provider :locale="zhCn" :size="getPageSize">
        <router-view />
    </el-config-provider>
</template>

<script lang="ts" setup>
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import { useHeaderSetting } from "@/layouts/default/hooks/useHeaderSetting";

const { getPageSize } = useHeaderSetting();
</script>

<style scoped></style>
