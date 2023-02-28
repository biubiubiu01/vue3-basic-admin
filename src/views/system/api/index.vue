<template>
    <div class="system-api-container">
        <base-page-table table-title="接口列表" :filter-config="filterConfig" :table-config="tableConfig"> </base-page-table>
    </div>
</template>

<script lang="ts" setup name="Api">
import { useColumn } from "./column";
import { getApiList } from "@/api/system/api";

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
    indexShow: false,
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
    const res = (await getApiList({ ...filterConfig.searchInfo, currentPage, pageSize })) as any;
    tableConfig.data = res.data.list || [];
    tableConfig.pagination.total = res.data.total || 0;
}
</script>

<style lang="scss" scoped></style>
