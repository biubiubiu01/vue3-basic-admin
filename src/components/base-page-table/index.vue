<template>
    <div class="base-page-table-container">
        <base-box class="base-page-filter" ref="baseFilterRef">
            <BaseFilter v-bind="filterConfig" v-if="!$slots.filter" />
            <slot name="filter"></slot>
        </base-box>
        <base-box class="base-page-table">
            <template #title>
                <div class="mb15" v-if="$slots.buttons">
                    {{ tableTitle }}
                </div>
                <div class="flex-row-center justify-between">
                    <div>
                        <template v-if="!$slots.buttons"> {{ tableTitle }}</template>
                        <slot name="buttons"></slot>
                    </div>
                    <el-space :size="6">
                        <el-tooltip placement="top" content="刷新">
                            <base-icon icon="refresh" :size="18" hover class="mr10 pointer" @click="handleRefresh" />
                        </el-tooltip>
                        <el-tooltip placement="top" content="导出">
                            <base-icon icon="svg-export" :size="18" hover class="mr10 pointer" />
                        </el-tooltip>
                        <el-tooltip placement="top" content="列设置">
                            <base-column-setting v-model:tableColumns="tableConfig!.columns" v-model:filterColumns="filterConfig!.columns" />
                        </el-tooltip>
                    </el-space>
                </div>
            </template>
            <slot name="table"></slot>
            <base-table v-bind="tableConfig" v-if="!$slots.table" :max-height="getHeight">
                <template #tableColumn="{ scope, column }">
                    <slot name="tableColumn" :scope="scope" :column="column"></slot>
                </template>
            </base-table>
        </base-box>
    </div>
</template>

<script lang="ts" setup>
import { isFunction } from "@/utils";

const props = defineProps({
    tableTitle: {
        type: String,
        default: ""
    },
    filterConfig: {
        type: Object
    },
    tableConfig: {
        type: Object
    }
});

const emit = defineEmits(["refresh"]);
const slots = useSlots();

const baseFilterRef = ref();

const getHeight = computed(() => {
    const filterHeight = unref(baseFilterRef)?.instance.offsetHeight || 0;
    const buttonHeight = slots.buttons ? 40 : 0;
    return `calc(100vh - ${filterHeight + buttonHeight + 197}px)`;
});

const handleRefresh = () => {
    if (isFunction(props.tableConfig?.onRefresh)) {
        props.tableConfig!.onRefresh?.();
    }
    emit("refresh");
};
</script>

<style lang="scss" scoped>
.base-page-table-container {
    .base-page-filter {
        :deep(.base-box-content) {
            padding-bottom: 0;
        }
    }
    .base-page-table-button {
        box-sizing: border-box;
        padding-left: 10px;
        margin-top: 15px;
        margin-bottom: 5px;
    }
    .base-page-table {
        :deep(.base-box-content) {
            padding: 0;
        }
    }
}
</style>
