<template>
    <base-dialog ref="baseDialogRef" width="560px" :title="getDialogTitle" @save="handleSave">
        <base-form ref="baseFormRef" :columns="dialogColumn" :rules="userRules" :model="state.formModel">
            <template #menuIds>
                <el-tree
                    ref="roleTreeRef"
                    node-key="id"
                    highlight-current
                    :data="state.treeData"
                    :props="state.defaultProps"
                    show-checkbox
                    :expand-on-click-node="false"
                >
                </el-tree>
            </template>
        </base-form>
    </base-dialog>
</template>

<script lang="ts" setup>
import { useColumn } from "../column";
import { useMessage } from "@/hooks";
import { addRole, editRole } from "@/api/system/role";
import { getMenuList } from "@/api/system/menu";
import { deepClone } from "@/utils";

const emit = defineEmits(["success"]);

const { success } = useMessage();

const { dialogColumn } = useColumn();

const baseDialogRef = ref();

const baseFormRef = ref();

const roleTreeRef = ref();

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
    roleName: [
        {
            required: true,
            message: "请输入角色名称",
            trigger: ["blur", "change"]
        }
    ],
    role: [
        {
            required: true,
            message: "请输入角色标识",
            trigger: ["blur", "change"]
        }
    ],
    menuIds: [
        {
            type: "array",
            required: true,
            message: "请选择菜单",
            trigger: ["blur", "change"]
        }
    ]
};

onMounted(async () => {
    const res = (await getMenuList()) as any;
    state.treeData = res.data;
});

const getDialogTitle = computed(() => (state.isEdit ? "修改角色" : "新增角色"));

const showDialog = (val: any = {}) => {
    unref(baseDialogRef).showDialog();
    nextTick(() => {
        unref(baseFormRef).instance.resetFields();
        state.isEdit = !!val.id;
        if (state.isEdit) {
            Object.assign(state.formModel, val);
            unref(roleTreeRef).setCheckedKeys(val.menuIds);
        } else {
            unref(roleTreeRef).setCheckedKeys([]);
        }
    });
};

const hideDialog = () => {
    unref(baseDialogRef).hideDialog();
};

const handleSave = async (loading: (flag: boolean) => void) => {
    Object.assign(state.formModel, {
        menuIds: unref(roleTreeRef).getCheckedKeys()
    });
    await unref(baseFormRef).instance.validate(async (valid: boolean) => {
        if (!valid) return;
        loading(true);
        try {
            state.isEdit ? await editRole(state.formModel) : await addRole(state.formModel);
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
