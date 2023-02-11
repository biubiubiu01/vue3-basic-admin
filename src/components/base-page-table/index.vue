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
            <base-table v-bind="tableConfig" v-if="!$slots.table" :max-height="tableMaxHeight">
                <template #tableColumn="{ scope, column }">
                    <slot name="tableColumn" :scope="scope" :column="column"></slot>
                </template>
            </base-table>
        </base-box>
    </div>
</template>

<script lang="ts" setup>
import { isFunction } from "@/utils";
import { useResizeObserver, useDebounceFn } from "@vueuse/core";
import { useTagViewSetting } from "@/layouts/hooks/useTagViewSetting";

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

const { getTagFullscreen } = useTagViewSetting();

const baseFilterRef = ref();

const tableMaxHeight = ref<string | number>(0);

const getHeight = () => {
    const headerHeight = unref(getTagFullscreen) ? 37 : 85;

    const mainPadding = 20;

    const filterMargin = 16;

    const filterHeight = unref(baseFilterRef)?.instance.offsetHeight || 0;

    const tableMargin = 20;

    const titleHeight = slots.buttons ? 101 : 54;

    const paginationHeight = props.tableConfig!.showPagination === false ? 0 : 40;

    const restHeight = headerHeight + filterHeight + titleHeight + tableMargin + paginationHeight + mainPadding + filterMargin;

    tableMaxHeight.value = `calc(100vh - ${restHeight}px)`;
};

const handleRefresh = () => {
    if (isFunction(props.tableConfig?.onRefresh)) {
        props.tableConfig!.onRefresh?.();
    }
    emit("refresh");
};

useResizeObserver(
    baseFilterRef,
    useDebounceFn(() => {
        getHeight();
    }, 100)
);
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
