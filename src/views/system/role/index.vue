<template>
    <div class="system-role-container">
        <base-page-table table-title="角色列表" :filter-config="filterConfig" :table-config="tableConfig">
            <template #buttons>
                <base-button type="primary" @click="handleAddRole">新增角色</base-button>
            </template>
        </base-page-table>
    </div>
    <RoleDialog ref="roleDialogRef" @success="handleSearch" />
</template>

<script lang="ts" setup>
import { getRoleList, deleteRole, changeRoleStatus } from "@/api/system/role";
import RoleDialog from "./components/RoleDialog.vue";
import { useColumn } from "./column";
import { useMessage } from "@/hooks";
import { messageBox } from "@/utils";

const { tableColumn, filterColumn } = useColumn({ edit: handleEdit, delete: handleDelete, changeSwitch: handleChangeStatus });

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
    pagination: {
        currentPage: 1,
        pageSize: 10,
        total: 0
    },
    onRefresh: handleSearch
});

const roleDialogRef = ref();

onMounted(() => {
    handleSearch();
});

/**
 * 查询
 */
async function handleSearch() {
    const { currentPage, pageSize } = tableConfig.pagination;
    const res = await getRoleList({ ...filterConfig.searchInfo, currentPage, pageSize });
    tableConfig.data = res.data.list || [];
    tableConfig.pagination.total = res.data.total;
}

function handleAddRole() {
    unref(roleDialogRef).showDialog();
}

function handleEdit(scope: any) {
    unref(roleDialogRef).showDialog(scope.row);
}

async function handleDelete(scope: any) {
    const { id } = scope.row;
    await deleteRole({ id });
    success("删除成功");
    handleSearch();
}

async function handleChangeStatus(val: any) {
    return messageBox(`确认要${val.status === 0 ? "启用" : "停用"}该角色吗?`).then(async () => {
        await changeRoleStatus({ id: val.id });
        success(`${val.status === 0 ? "启用" : "停用"}成功}`);
        handleSearch();
    });
}
</script>

<style lang="scss" scoped></style>
