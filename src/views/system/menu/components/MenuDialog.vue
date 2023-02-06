<template>
    <base-dialog ref="baseDialogRef" width="660px" title="新增菜单" @save="handleSave">
        <base-form ref="baseFormRef" :columns="dialogColumn" :rules="rules" :model="formModel">
            <template #menuType>
                <el-radio-group v-model="formModel.menuType">
                    <el-radio label="D">目录</el-radio>
                    <el-radio label="M">菜单</el-radio>
                    <el-radio label="B">按钮</el-radio>
                </el-radio-group>
            </template>
        </base-form>
    </base-dialog>
</template>

<script lang="ts" setup>
import { useColumn } from "../column";
import { useMessage } from "@/hooks";

const emit = defineEmits(["success"]);

const { success } = useMessage();

const formModel = reactive<any>({
    menuType: "D"
});

const { dialogColumn } = useColumn();

const baseDialogRef = ref();

const baseFormRef = ref();

const rules = {
    menuName: [
        {
            required: true,
            message: "请输入菜单名称",
            trigger: ["blur", "change"]
        }
    ],
    sort: [
        {
            required: true,
            message: "请输入菜单排序",
            trigger: ["blur", "change"]
        }
    ],
    isFrame: [
        {
            required: true,
            message: "请选择是否外链",
            trigger: ["blur", "change"]
        }
    ],
    path: [
        {
            required: true,
            message: "请输入路由地址",
            trigger: ["blur", "change"]
        }
    ]
};

const showDialog = () => {
    unref(baseDialogRef).showDialog();
    nextTick(() => {
        unref(baseFormRef).instance.resetFields();
    });
};

const hideDialog = () => {
    unref(baseDialogRef).hideDialog();
};

const handleSave = async () => {
    await unref(baseFormRef).instance.validate(async (valid: boolean) => {
        if (!valid) return;
        success("模拟新增菜单成功");
        hideDialog();
        emit("success");
    });
};

defineExpose({
    showDialog,
    hideDialog
});
</script>

<style scoped></style>
