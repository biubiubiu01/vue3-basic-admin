<template>
    <div class="system-api-container">
        <base-page-table table-title="接口列表" :filter-config="filterConfig" :table-config="tableConfig"> </base-page-table>
    </div>
</template>

<script lang="ts" setup>
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
    showPagination: false,
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
    const res = (await getApiList({ ...filterConfig.searchInfo })) as any;
    tableConfig.data = res.data;
}
</script>

<style lang="scss" scoped></style>
