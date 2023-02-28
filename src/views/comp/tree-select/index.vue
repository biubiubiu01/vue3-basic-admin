<template>
    <div class="page-func-tree-select">
        <base-box title="基础示例">
            <el-row>
                <el-col :span="12"> <base-button @click="handleShowDialog">点击选择部门</base-button> </el-col>
                <el-col :span="12">
                    <el-scrollbar view-style="height:500px">
                        <base-json :data="chooseList" />
                    </el-scrollbar>
                </el-col>
            </el-row>
        </base-box>

        <base-box title="初始值">
            <el-row>
                <el-col :span="12"> <base-button @click="handleShowDialog2">点击选择部门</base-button></el-col>
                <el-col :span="12">
                    <el-scrollbar view-style="height:500px">
                        <base-json :data="initList" />
                    </el-scrollbar>
                </el-col>
            </el-row>
        </base-box>
        <base-tree-select ref="baseTreeSelectRef" node-key="deptId" :fieldNames="fieldNames" :data="treeData" />
    </div>
</template>

<script lang="ts" setup>
import { getDeptTreeList } from "@/api/system/dept";

const baseTreeSelectRef = ref();

const treeData = ref([]);

const chooseList = ref([]);

const initList = ref([5, 6]);

const fieldNames = {
    label: "deptName",
    children: "children"
};

onMounted(async () => {
    const res = await getDeptTreeList();
    treeData.value = res.data;
});

const handleShowDialog = () => {
    unref(baseTreeSelectRef).showDialog({
        data: chooseList.value,
        type: "node",
        callback: (val: any) => {
            chooseList.value = val;
        }
    });
};

const handleShowDialog2 = () => {
    unref(baseTreeSelectRef).showDialog(initList.value, (val: any) => {
        chooseList.value = val;
    });

    unref(baseTreeSelectRef).showDialog({
        data: initList.value,
        type: "keys",
        callback: (val: any) => {
            initList.value = val.map((item: any) => item.deptId);
        }
    });
};
</script>

<style scoped></style>
