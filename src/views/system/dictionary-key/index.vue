<template>
    <div class="system-dict-container">
        <base-page-table table-title="字典列表" :filter-config="filterConfig" :table-config="tableConfig"> </base-page-table>
    </div>
</template>

<script lang="ts" setup name="DictionaryKey">
import { useColumn } from "./column";
import { getDictKeyList } from "@/api/system/dict";

const { tableColumn, filterColumn } = useColumn({ search: handleToDictValue });

const router = useRouter();

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
    onRefresh: handleSearch
});

onMounted(() => {
    handleSearch();
});

/**
 * 查询
 */
async function handleSearch() {
    const res = await getDictKeyList({ ...filterConfig.searchInfo });
    tableConfig.data = res.data;
}

function handleToDictValue(scope: any) {
    router.push({
        path: "dictionary-data/" + scope.row.dictType
    });
}
</script>

<style lang="scss" scoped></style>
