<template>
    <el-tooltip placement="bottom" content="搜索">
        <base-icon svg-name="search" class="pointer box-hover action-item" :size="20" @click="showDialog = true" />
    </el-tooltip>
    <base-dialog v-model:visible="showDialog" top="80px" title="" class="search-dialog" min-height="200px">
        <base-input v-model="searchKey" placeholder="搜索" prefix-icon="search" size="large" />
        <template #footer> </template>
    </base-dialog>
</template>

<script lang="ts" setup>
const showDialog = ref(false);
const searchKey = ref("");
</script>

<style lang="scss">
.search-dialog {
    border-radius: 16px;
    box-shadow: 0 25px 50px -12px #00000040;
    .el-dialog__body {
        padding-top: 0 !important;
    }
}
</style>
