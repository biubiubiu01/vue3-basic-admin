<template>
    <div class="system-dict-container">
        <base-page-table table-title="字典数据" :filter-config="filterConfig" :table-config="tableConfig"> </base-page-table>
    </div>
</template>

<script lang="ts" setup>
import { useColumn } from "./column";
import { getDictData } from "@/api/system/dict";

const { tableColumn, filterColumn } = useColumn();

const route = useRoute();

const filterConfig = reactive({
    columns: filterColumn,
    onSearch: handleSearch,
    showOpen: false,
    searchInfo: {
        dictType: ""
    }
});

const tableConfig = reactive({
    columns: tableColumn,
    data: [],
    showPagination: false,
    onRefresh: handleSearch
});

onMounted(() => {
    filterConfig.searchInfo.dictType = route.params.type as string;
    handleSearch();
});

/**
 * 查询
 */
async function handleSearch() {
    const res = await getDictData({ ...filterConfig.searchInfo });
    tableConfig.data = res.data;
}
</script>

<style lang="scss" scoped></style>
