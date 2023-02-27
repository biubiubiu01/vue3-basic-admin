<template>
    <base-dialog
        class="base-tree-select"
        title="选择字段"
        ref="baseDialogRef"
        width="870px"
        saveText="保 存"
        cancelText="取 消"
        :closeFun="handleReset"
        @save="handleSave"
    >
        <el-row :gutter="0">
            <el-col :span="12" class="base-tree-box">
                <div class="base-column-title pl15">字段</div>
                <div class="padding15 border-box">
                    <el-input v-model="filterText" placeholder="请输入字段名称" class="mb15" />
                    <el-scrollbar :view-style="{ height }">
                        <el-tree
                            :data="data"
                            :node-key="nodeKey"
                            ref="treeRef"
                            show-checkbox
                            :props="fieldNames"
                            :filter-node-method="filterNode"
                            :expand-on-click-node="false"
                            @check="getCheckList"
                            default-expand-all
                        >
                        </el-tree>
                    </el-scrollbar>
                </div>
            </el-col>
            <el-col :span="12" class="base-tree-box">
                <div class="base-column-title pl15">已选字段</div>
                <div class="padding15 border-box">
                    <el-scrollbar :view-style="{ height }">
                        <Draggable v-model="checkList" :animation="100" item-key="fieldName" :forceFallback="true" handle=".move">
                            <template #item="{ element }">
                                <div class="base-column-choose-item flex-row-center pl10 pr10">
                                    <base-icon el-name="rank" :size="16" class="move mr5" hover />
                                    <div class="text-hidden w100" :title="element[fieldNames.label]">{{ element[fieldNames.label] }}</div>
                                    <base-icon el-name="close" :size="14" class="pointer" hover @click="handleRemoveCheck(element)" />
                                </div>
                            </template>
                        </Draggable>
                    </el-scrollbar>
                </div>
            </el-col>
            <div class="base-column-setting-tip">
                注：拖动
                <base-icon el-name="rank" :size="14" class="ml5 mr5" />
                图标可调整顺序
            </div>
        </el-row>
    </base-dialog>
</template>

<script lang="ts" setup>
import { isFunction } from "@/utils";
import Draggable from "vuedraggable";

const props = defineProps({
    data: {
        type: Array,
        default: () => []
    },
    nodeKey: {
        type: String,
        default: "id"
    },
    fieldNames: {
        type: Object,
        default: () => ({
            label: "label",
            children: "children"
        })
    },
    height: {
        type: String,
        default: "450px"
    }
});

const emit = defineEmits(["save"]);

const filterText = ref("");
const checkList = ref([]);
const callbackFunc = ref<any>(null);

const treeRef = ref();
const baseDialogRef = ref();

const showDialog = ({ data, callback, type = "key" }: { data: any[]; type: "node" | "key"; callback?: () => void }) => {
    unref(baseDialogRef).showDialog();
    callbackFunc.value = callback;

    nextTick(() => {
        if (type === "node") {
            unref(treeRef).setCheckedNodes(data || []);
        } else {
            unref(treeRef).setCheckedKeys(data || []);
        }
        getCheckList();
    });
};

const hideDialog = () => {
    handleReset();
    unref(baseDialogRef).hideDialog();
};

const handleReset = () => {
    filterText.value = "";
    checkList.value = [];
    callbackFunc.value = null;
};

const filterNode = (value: string, data: any) => {
    if (!value) return true;
    return data[props.fieldNames.label].indexOf(value) !== -1;
};

const getCheckList = () => {
    checkList.value = unref(treeRef).getCheckedNodes();
};

const handleRemoveCheck = (val: any) => {
    unref(treeRef).setChecked(val, false, true);
    nextTick(() => {
        getCheckList();
    });
};

const handleSave = (loading: (bool: boolean) => void) => {
    if (isFunction(callbackFunc.value)) {
        loading(true);
        unref(callbackFunc)?.(checkList.value);
        setTimeout(() => {
            loading(false);
            hideDialog();
        }, 600);
    }
    emit("save", checkList.value);
};

watch(filterText, (val) => {
    unref(treeRef)!.filter(val);
});

defineExpose({
    showDialog,
    hideDialog
});
</script>

<style lang="scss" scoped>
.base-tree-select {
    .base-column-title {
        height: 32px;
        line-height: 32px;
        background-color: var(--base-column-header-color);
    }
    .base-tree-box {
        border: 1px solid var(--base-column-header-color);
        .base-column-choose-item {
            line-height: 32px;
            height: 34px;
            &:hover {
                background-color: var(--el-fill-color-light);
            }
            .move {
                cursor: move;
            }
        }
    }
    .base-column-setting-tip {
        color: var(--el-color-info-light-3);
        line-height: 32px;
        display: flex;
        align-items: center;
        margin-right: 15px;
    }
}
</style>
