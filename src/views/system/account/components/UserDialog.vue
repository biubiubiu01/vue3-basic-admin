<template>
    <base-dialog ref="baseDialogRef" width="560px" :title="getDialogTitle" @save="handleSave">
        <base-form ref="baseFormRef" :columns="dialogColumn" :rules="userRules" :model="formModel"> </base-form>
    </base-dialog>
</template>

<script lang="ts" setup>
import { useColumn } from "../column";
import { useMessage } from "@/hooks";
import { addUser, editUser } from "@/api/system/user";
import { deepClone } from "@/utils";

const emit = defineEmits(["success"]);

const { success } = useMessage();

const formModel = reactive<any>({});

const { dialogColumn } = useColumn();

const baseDialogRef = ref();

const baseFormRef = ref();

const isEdit = ref(false);

const userRules = {
    username: [
        {
            required: true,
            message: "请输入用户名",
            trigger: ["blur", "change"]
        }
    ],
    role: [
        {
            type: "array",
            required: true,
            message: "请选择角色",
            trigger: ["blur", "change"]
        }
    ],
    deptId: [
        {
            type: "array",
            required: true,
            message: "请选择部门",
            trigger: ["blur", "change"]
        }
    ]
};

const getDialogTitle = computed(() => (unref(isEdit) ? "修改用户" : "新增用户"));

const showDialog = (val: any = {}) => {
    unref(baseDialogRef).showDialog();
    nextTick(() => {
        unref(baseFormRef).instance.resetFields();
        isEdit.value = !!val.id;
        if (unref(isEdit)) {
            Object.assign(formModel, val, {
                role: val.role?.split(","),
                deptId: val.deptId?.split(",").map((item: string) => parseFloat(item))
            });
        }
    });
};

const hideDialog = () => {
    unref(baseDialogRef).hideDialog();
};

const handleSave = async (loading: (flag: boolean) => void) => {
    await unref(baseFormRef).instance.validate(async (valid: boolean) => {
        if (!valid) return;
        const formData = deepClone(formModel);
        Object.assign(formData, {
            deptId: formData.deptId.join(),
            role: formData.role.join()
        });
        loading(true);
        try {
            unref(isEdit) ? await editUser(formData) : await addUser(formData);
            success(unref(isEdit) ? "修改成功" : "新增成功！");
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
