<template>
    <div class="base-column-setting">
        <el-dropdown trigger="click">
            <base-icon el-name="setting" class="pointer base-icon-setting" :size="18" hover />
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item @click="handleShowColumn(0)" v-if="showTable">
                        <base-icon svg-name="column" :size="14" />自定义列表字段
                    </el-dropdown-item>
                    <el-dropdown-item @click="handleShowColumn(1)" v-if="showFilter">
                        <base-icon svg-name="filter" :size="16" />自定义筛选
                    </el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
        <base-dialog
            :title="dialogTitle"
            ref="baseDialogRef"
            width="870px"
            saveText="保 存"
            cancelText="重 置"
            :closeFun="handleReset"
            @save="handleSave"
        >
            <div class="base-column-content flex">
                <div class="base-column-list flex-auto">
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
                </div>
                <div class="base-column-choose">
                    <div class="base-column-title pl15">已选字段</div>
                    <div class="pt5 pb5 border-box base-column-choose-content">
                        <el-scrollbar>
                            <Draggable v-model="state.checkColumnList" :animation="100" item-key="fieldName" :forceFallback="true" handle=".move">
                                <template #item="{ element }">
                                    <div class="base-column-choose-item flex-row-center pl10 pr10" v-if="element.active">
                                        <base-icon el-name="rank" :size="16" class="move mr5" hover v-if="!element.fixed" />
                                        <div class="text-hidden w100" :title="element.fieldDesc">{{ element.fieldDesc }}</div>
                                        <base-icon el-name="close" :size="14" class="pointer" hover @click="handleRemoveCheck(element.fieldName)" />
                                    </div>
                                </template>
                            </Draggable>
                        </el-scrollbar>
                    </div>
                </div>
            </div>
            <div class="base-column-setting-tip">
                注：拖动
                <base-icon el-name="rank" :size="14" class="ml5 mr5" />
                图标可调整顺序
            </div>
        </base-dialog>
    </div>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";
import Draggable from "vuedraggable";
import { deepClone, isUndefined } from "@/utils";
import type { Column, ColumnState } from "./types";

const props = defineProps({
    tableColumns: {
        type: Array as PropType<Column[]>,
        default: () => []
    },
    filterColumns: {
        type: Array as PropType<Column[]>,
        default: () => []
    },
    showTable: {
        type: Boolean,
        default: true
    },
    showFilter: {
        type: Boolean,
        default: true
    }
});

const emit = defineEmits(["update:tableColumns", "update:filterColumns", "columns-change"]);

const { proxy } = getCurrentInstance() as any;

const state = reactive<ColumnState>({
    dialogType: 0,
    isIndeterminate: false,
    checkAll: true,
    checkedList: [],
    checkColumnList: []
});

const baseDialogRef = ref();

const dialogTitle = computed(() => {
    return state.dialogType === 0 ? "自定义列表字段" : "自定义筛选字段";
});

const columns = computed(() => {
    return state.dialogType === 0 ? props.tableColumns : props.filterColumns;
});

/**
 * 打开弹框
 */
const handleShowColumn = (val: number) => {
    state.dialogType = val;
    handleReset();
    unref(baseDialogRef).showDialog();
};

/**
 * 全选
 * @param {Boolean} bool
 */
const handleCheckAllChange = (bool: any) => {
    state.checkedList = bool ? unref(columns).map((item) => item.fieldName) : [];
    state.isIndeterminate = false;
};

/**
 * 勾选列
 * @param {String[]} value
 */
const handleCheckedCitiesChange = (value: any[]) => {
    const checkedCount = value.length;
    state.checkAll = checkedCount === unref(columns).length;
    state.isIndeterminate = checkedCount > 0 && checkedCount < unref(columns).length;
};

/**
 * 关闭取消勾选列
 * @param {String} fieldName
 */
const handleRemoveCheck = (fieldName: string) => {
    state.checkedList = state.checkedList.filter((item) => item !== fieldName);
    handleCheckedCitiesChange(state.checkedList);
};

/**
 * 保存
 */
const handleSave = () => {
    if (state.checkedList.length === 0) {
        proxy.$messageWarning("请至少勾选一项再进行该操作");
        return;
    }
    if (state.dialogType === 0) {
        emit("update:tableColumns", state.checkColumnList);
    } else {
        emit("update:filterColumns", state.checkColumnList);
    }
    emit(
        "columns-change",
        state.checkColumnList.filter((item) => isUndefined(item.active) || item.active)
    );
    unref(baseDialogRef).hideDialog();
};

/**
 * 重置
 */
const handleReset = () => {
    state.checkedList = unref(columns)
        .filter((item) => isUndefined(item.active) || item.active)
        .map((item) => item.fieldName);
};

watch(
    () => state.checkedList,
    () => {
        const deepColumns: Column[] = deepClone(unref(columns));
        state.checkColumnList = deepColumns.map((item) => {
            item.active = state.checkedList.includes(item.fieldName);
            return item;
        });
    }
);
</script>

<style lang="scss" scoped>
@use "./base-column-setting.scss";
</style>
