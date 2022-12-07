<template>
    <div class="base-column-setting">
        <el-dropdown trigger="click">
            <base-icon el-name="setting" class="pointer base-icon-setting" :size="18" />
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item @click="handleShowColumn('自定义列表字段')">
                        <base-icon svg-name="column" :size="14" />自定义列表字段
                    </el-dropdown-item>
                    <el-dropdown-item @click="handleShowColumn('自定义筛选')">
                        <base-icon svg-name="filter" :size="16" />自定义筛选
                    </el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
        <base-dialog
            :title="state.dialogTitle"
            ref="baseDialogRef"
            width="870px"
            saveText="保 存"
            cancelText="重 置"
            :closeFun="handleReset"
            @save="handleSave"
        >
            <el-row class="base-column-content">
                <el-col :span="18" class="base-column-list">
                    <div class="base-column-title pl15">
                        <el-checkbox v-model="state.checkAll" :indeterminate="state.isIndeterminate" @change="handleCheckAllChange">
                            全部字段
                        </el-checkbox>
                    </div>
                    <div class="padding15 border-box">
                        <el-checkbox-group v-model="state.checkedList" @change="handleCheckedCitiesChange">
                            <el-checkbox
                                v-for="item in columns"
                                :key="item.fieldName"
                                :label="item.fieldName"
                                class="base-column-checkbox"
                                :title="item.fieldDesc"
                                >{{ item.fieldDesc }}</el-checkbox
                            >
                        </el-checkbox-group>
                    </div>
                </el-col>
                <el-col :span="6" class="base-column-choose">
                    <div class="base-column-title pl10">已选字段</div>
                </el-col>
            </el-row>
        </base-dialog>
    </div>
</template>

<script lang="ts" setup>
import { isUndefined } from "@/utils";
import { Column } from "../base-table/props";
import { useVModel } from "@vueuse/core";
import { PropType } from "vue";

interface State {
    dialogTitle: string;
    checkAll: boolean;
    checkedList: string[];
    defaultCheckList: Column[];
    isIndeterminate: boolean;
}

const props = defineProps({
    tableName: {
        type: String,
        default: ""
    },
    columns: {
        type: Array as PropType<Column[]>,
        default: () => []
    }
});

const emit = defineEmits(["update:columns", "change"]);

const { proxy } = getCurrentInstance() as any;

const state = reactive<State>({
    dialogTitle: "",
    isIndeterminate: false,
    checkAll: true,
    checkedList: [],
    defaultCheckList: []
});

const tableColumn = useVModel(props, "columns", emit, { defaultValue: [] });

const baseDialogRef = ref();

/**
 * 打开弹框
 */
const handleShowColumn = (val: string) => {
    state.dialogTitle = val;
    state.checkedList = props.columns.filter((item) => isUndefined(item.active) || item.active).map((item) => item.fieldName);

    unref(baseDialogRef).showDialog();
};

/**
 * 全选
 * @param {Boolean} bool
 */
const handleCheckAllChange = (bool: any) => {
    state.checkedList = bool ? props.columns.map((item) => item.fieldName) : [];
    state.isIndeterminate = false;
};

/**
 * 勾选列
 * @param value
 */
const handleCheckedCitiesChange = (value: any[]) => {
    const checkedCount = value.length;
    state.checkAll = checkedCount === props.columns.length;
    state.isIndeterminate = checkedCount > 0 && checkedCount < props.columns.length;
};

/**
 * 保存
 */
const handleSave = () => {
    if (state.checkedList.length === 0) {
        proxy.$message.warning("请至少勾选一项再进行该操作");
    }
    tableColumn.value = props.columns.map((item) => {
        item.active = state.checkedList.includes(item.fieldName);
        return item;
    });
    emit("change", tableColumn.value);
    unref(baseDialogRef).hideDialog();
};

/**
 * 重置
 */
const handleReset = () => {
    state.checkedList = props.columns.filter((item) => isUndefined(item.active) || item.active).map((item) => item.fieldName);
};
</script>

<style lang="scss" scoped>
@use "./base-column-setting.scss";
</style>
