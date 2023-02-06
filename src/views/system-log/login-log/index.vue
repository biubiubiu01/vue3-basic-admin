<template>
    <div class="system-dict-container">
        <base-page-table table-title="登录日志" :filter-config="filterConfig" :table-config="tableConfig"> </base-page-table>
    </div>
</template>

<script lang="ts" setup>
import { useColumn } from "./column";
import { getLoginList } from "@/api/log";

const { tableColumn, filterColumn } = useColumn();

const filterConfig = reactive({
    columns: filterColumn,
    onSearch: handleSearch,
    showOpen: false,
    searchInfo: {}
});

const tableConfig = reactive({
    columns: tableColumn,
    data: [],
    pagination: {
        currentPage: 1,
        pageSize: 10,
        total: 0
    },
    onRefresh: handleSearch
});

onMounted(() => {
    handleSearch();
});

/**
 * 查询
 */
async function handleSearch() {
    const { currentPage, pageSize } = tableConfig.pagination;
    const res = await getLoginList({ ...filterConfig.searchInfo, currentPage, pageSize });
    tableConfig.data = res.data.list;
    tableConfig.pagination.total = res.data.total;
}
</script>

<style lang="scss" scoped></style>
