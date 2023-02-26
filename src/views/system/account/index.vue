<template>
    <div class="system-account-container flex">
        <DeptTree @filter="handleTreeFilter" />
        <div class="account-user">
            <base-page-table table-title="用户列表" :filter-config="filterConfig" :table-config="tableConfig">
                <template #buttons>
                    <base-button type="primary" @click="handleAddUser">新增用户</base-button>
                </template>
            </base-page-table>
        </div>
        <UserDialog ref="userDialogRef" @success="handleSearch" />
    </div>
</template>

<script lang="ts" setup name="Account">
import { getUserList, deleteUser, changeUserStatus } from "@/api/system/user";
import { useColumn } from "./column";
import DeptTree from "./components/DeptTree.vue";
import UserDialog from "./components/UserDialog.vue";
import { useMessage } from "@/hooks";
import { messageBox } from "@/utils";

const { tableColumn, filterColumn } = useColumn({ edit: handleEdit, delete: handleDelete, changeSwitch: handleChangeStatus });

const { success } = useMessage();

const filterConfig = reactive({
    columns: filterColumn,
    showOpen: false,
    onSearch: handleSearch,
    searchInfo: {
        deptId: ""
    }
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

const userDialogRef = ref();

onMounted(() => {
    handleSearch();
});

/**
 * 查询
 */
async function handleSearch() {
    const { currentPage, pageSize } = tableConfig.pagination;
    const res = await getUserList({ ...filterConfig.searchInfo, currentPage, pageSize });
    tableConfig.data = res.data.list || [];
    tableConfig.pagination.total = res.data.total;
}

function handleTreeFilter(val: string) {
    filterConfig.searchInfo.deptId = val;
    handleSearch();
}

function handleAddUser() {
    unref(userDialogRef).showDialog();
}

function handleEdit(scope: any) {
    unref(userDialogRef).showDialog(scope.row);
}

async function handleDelete(scope: any) {
    const { id } = scope.row;
    await deleteUser({ id });
    success("删除成功");
    handleSearch();
}

async function handleChangeStatus(val: any) {
    return messageBox(`确认要${val.status === 0 ? "启用" : "停用"}该用户吗?`).then(async () => {
        await changeUserStatus({ id: val.id });
        success(`${val.status === 0 ? "启用" : "停用"}成功`);
        handleSearch();
    });
}
</script>

<style lang="scss" scoped>
.system-account-container {
    height: 100%;
    .account-dept {
        width: 300px;
    }
    .account-user {
        margin-left: 16px;
        width: calc(100% - 316px);
    }
}
</style>
