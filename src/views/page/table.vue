<template>
    <div class="page-table-container">
        <base-page-table table-title="Table页面" :filter-config="filterConfig" :table-config="tableConfig">
            <template #buttons>
                <base-button type="primary">新增</base-button>
            </template>
        </base-page-table>
    </div>
</template>

<script lang="ts" setup>
import { FormTypeEnum } from "@/enums/componentEnum";

const filterConfig = reactive({
    columns: [
        {
            fieldName: "name",
            fieldDesc: "姓名",
            fieldType: FormTypeEnum.INPUT
        }
    ],
    onSearch: handleSearch,
    showOpen: false,
    searchInfo: {}
});

const tableConfig = reactive({
    columns: [
        {
            fieldName: "name",
            fieldDesc: "姓名"
        },
        {
            fieldName: "age",
            fieldDesc: "年龄"
        },
        {
            fieldName: "address",
            fieldDesc: "地址"
        }
    ],
    data: [],
    onRefresh: handleSearch
});

onMounted(() => {
    handleSearch();
});

/**
 * 查询
 */
async function handleSearch() {}
</script>

<style lang="scss" scoped></style>
