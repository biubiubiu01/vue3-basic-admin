<template>
    <div class="system-menu-container">
        <base-page-table table-title="菜单列表" :filter-config="filterConfig" :table-config="tableConfig">
            <template #buttons>
                <base-button type="primary" @click="handleAddMenu">新增菜单</base-button>
            </template>
            <template #tableColumn="{ scope, column }">
                <template v-if="column.fieldName === 'icon'">
                    <base-icon :icon="scope.row.icon" :size="18" />
                </template>
            </template>
        </base-page-table>
        <MenuDialog ref="menuDialogRef" @success="handleSearch" />
    </div>
</template>

<script lang="ts" setup name="Menu">
import { useColumn } from "./column";
import { getMenuList } from "@/api/system/menu";
import MenuDialog from "./components/MenuDialog.vue";

const { tableColumn, filterColumn } = useColumn();

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
    indexShow: false,
    showPagination: false,
    onRefresh: handleSearch
});

const menuDialogRef = ref();

onMounted(() => {
    handleSearch();
});

/**
 * 查询
 */
async function handleSearch() {
    const res = (await getMenuList()) as any;
    tableConfig.data = res.data;
}

function handleAddMenu() {
    unref(menuDialogRef).showDialog();
}
</script>

<style lang="scss" scoped></style>
