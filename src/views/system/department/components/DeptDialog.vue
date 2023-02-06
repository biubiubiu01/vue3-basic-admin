<template>
    <base-dialog ref="baseDialogRef" width="560px" :title="getDialogTitle" @save="handleSave">
        <base-form ref="baseFormRef" :columns="dialogColumn" :rules="userRules" :model="state.formModel"> </base-form>
    </base-dialog>
</template>

<script lang="ts" setup>
import { useColumn } from "../column";
import { useMessage } from "@/hooks";
import { addDept } from "@/api/system/dept";

const emit = defineEmits(["success"]);

const { success } = useMessage();

const { dialogColumn } = useColumn();

const baseDialogRef = ref();

const baseFormRef = ref();

const state = reactive({
    isEdit: false,
    treeData: [],
    defaultProps: {
        children: "children",
        label: "menuName"
    },
    formModel: {}
});

const userRules = {
    deptName: [
        {
            required: true,
            message: "请输入部门名称",
            trigger: ["blur", "change"]
        }
    ],
    parentId: [
        {
            required: true,
            message: "请选择上级部门",
            trigger: ["blur", "change"]
        }
    ],
    sort: [
        {
            required: true,
            message: "请输入排序",
            trigger: ["blur", "change"]
        }
    ],
    status: [
        {
            required: true,
            message: "请选择状态",
            trigger: ["blur", "change"]
        }
    ]
};

const getDialogTitle = computed(() => (state.isEdit ? "修改部门" : "新增部门"));

const showDialog = (val: any = {}) => {
    unref(baseDialogRef).showDialog();
    nextTick(() => {
        unref(baseFormRef).instance.resetFields();
        state.isEdit = !!val.deptId || val.deptId === 0;
        if (state.isEdit) {
            Object.assign(state.formModel, val);
        }
    });
};

const hideDialog = () => {
    unref(baseDialogRef).hideDialog();
};

const handleSave = async (loading: (flag: boolean) => void) => {
    await unref(baseFormRef).instance.validate(async (valid: boolean) => {
        if (!valid) return;
        loading(true);
        try {
            if (!state.isEdit) {
                await addDept(state.formModel);
            }
            success(state.isEdit ? "修改成功" : "新增成功！");
            emit("success");
            hideDialog();
        } finally {
            loading(false);
        }
    });
};

defineExpose({
    showDialog,
    hideDialog
});
</script>

<style scoped></style>
