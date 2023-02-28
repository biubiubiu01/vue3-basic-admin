<template>
    <div class="system-department-container">
        <base-page-table table-title="部门列表" :filter-config="filterConfig" :table-config="tableConfig">
            <template #buttons>
                <base-button type="primary" @click="handleAddDept">新增部门</base-button>
            </template>
        </base-page-table>
        <DeptDialog ref="deptDialogRef" @success="handleSearch" />
    </div>
</template>

<script lang="ts" setup name="Department">
import DeptDialog from "./components/DeptDialog.vue";
import { getDeptList } from "@/api/system/dept";
import { useColumn } from "./column";
import { useMessage } from "@/hooks";

const { tableColumn, filterColumn } = useColumn({ edit: handleEdit, delete: handleDelete });

const { success } = useMessage();

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
    rowKey: "deptId",
    indexShow: false,
    defaultExpandAll: true,
    onRefresh: handleSearch
});

const deptDialogRef = ref();

onMounted(() => {
    handleSearch();
});

/**
 * 查询
 */
async function handleSearch() {
    const res = await getDeptList({ ...filterConfig.searchInfo });
    tableConfig.data = res.data;
}

function handleAddDept() {
    unref(deptDialogRef).showDialog();
}

function handleEdit(scope: any) {
    unref(deptDialogRef).showDialog(scope.row);
}

async function handleDelete() {
    success("模拟删除成功");
}
</script>

<style lang="scss" scoped></style>
