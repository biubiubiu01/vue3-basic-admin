<template>
    <div>
        <el-space>嵌套菜单1-1-1 <el-rate v-model="value" class="ml10" /></el-space>
        <base-input v-model="inputValue" />
    </div>
</template>

<script lang="ts" setup>
const value = ref(0);
const inputValue = ref("嵌套菜单1-1-1");
</script>

<style scoped></style>
