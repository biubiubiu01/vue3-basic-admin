<template>
    <base-box title="组织架构" showHelp helpText="点击部门可显示对应的用户" class="account-dept">
        <template #extra>
            <base-input v-model="state.keyword" size="small" style="width: 145px" />
        </template>
        <el-tree
            ref="deptTreeRef"
            node-key="deptId"
            highlight-current
            :data="state.treeData"
            :props="state.defaultProps"
            default-expand-all
            :expand-on-click-node="false"
            @node-click="handleNodeClick"
            :filter-node-method="handleFilterNode"
        >
        </el-tree>
    </base-box>
</template>

<script lang="ts" setup>
import { getDeptTreeList } from "@/api/system/dept";

const emit = defineEmits(["filter"]);
const state = reactive({
    keyword: "",
    treeData: [],
    defaultProps: {
        children: "children",
        label: "deptName"
    }
});

const deptTreeRef = ref();

onMounted(() => {
    getTreeData();
});

const getTreeData = async () => {
    const res = await getDeptTreeList();
    state.treeData = res.data;
};

const handleFilterNode = (value: string, data: any) => {
    if (!value) return true;
    return data[state.defaultProps.label].includes(value);
};

const handleNodeClick = (data: any) => {
    emit("filter", data.deptId);
};

watch(
    () => state.keyword,
    (val) => {
        unref(deptTreeRef).filter(val);
    }
);
</script>

<style lang="scss" scoped>
.account-dept {
    :deep(.base-box-content) {
        padding-top: 10px;
    }
}
</style>
