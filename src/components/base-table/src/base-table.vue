<template>
    <div class="base-table">
        <base-pagination
            v-if="showPagination && topPos"
            v-model:current-page="pagination[currentKey]"
            v-model:page-size="pagination[pageSizeKey]"
            v-bind="pagination"
            @current-change="handleCurrentChange"
            @size-change="handleCurrentChange"
            :class="`base-table-pagination mb10 base-table-pagination-${position}`"
        />
        <el-table v-bind="getPropsValue" v-loading="loading" row-key="fieldName" header-cell-class-name="base-table-header-cell">
            <el-table-column fixed="left" type="expand" v-if="expandShow">
                <template #default="scope">
                    <slot name="expand" :scope="scope"></slot>
                </template>
            </el-table-column>
            <el-table-column :selectable="handleSelectable" fixed="left" type="selection" width="50" v-if="selectionShow" />
            <el-table-column label="序号" fixed="left" type="index" width="60" align="center" v-if="indexShow" />
            <template v-if="!$slots.default">
                <el-table-column
                    v-for="(item, index) in columnList"
                    :key="index"
                    :column-key="item.fieldName"
                    :prop="item.fieldName"
                    :label="item.fieldDesc"
                    :width="item.width"
                    :fixed="item.fixed"
                    :min-width="item.minWidth || 80"
                    :show-overflow-tooltip="item.showOverflowTooltip"
                >
                    <template #header="scope">
                        <template v-if="!$slots.header">
                            <span v-if="item.required" class="base-table-required"> * </span>
                            {{ scope.column.label }}
                        </template>
                        <slot name="header" :scope="scope" :column="item"></slot>
                    </template>
                    <template #default="scope">
                        <template v-if="item.formType === 'input'">
                            <base-input v-model="scope.row[item.fieldName]" />
                        </template>
                        <template v-else-if="item.formType === 'number'">
                            <base-input-number v-model="scope.row[item.fieldName]" class="w100" />
                        </template>
                        <template v-else-if="item.formType === 'slot'">
                            <slot name="default" :scope="scope" :column="item"></slot>
                        </template>
                        <template v-else>
                            {{ scope.row[item.fieldName] }}
                        </template>
                    </template>
                </el-table-column>
            </template>
            <slot name="default"></slot>

            <template #empty>
                <base-empty v-if="!$slots.empty" />
                <slot name="empty"></slot>
            </template>
        </el-table>
        <base-pagination
            v-if="showPagination && !topPos"
            v-model:current-page="pagination[currentKey]"
            v-model:page-size="pagination[pageSizeKey]"
            v-bind="getPaginationValue"
            @current-change="handleCurrentChange"
            @size-change="handleCurrentChange"
            :class="`base-table-pagination mt10 base-table-pagination-${position}`"
        />
    </div>
</template>

<script lang="ts" setup>
import tableProps, { extraProps } from "./props";
import { omit, isUndefined } from "@/utils";

const props = defineProps(tableProps);

const emit = defineEmits(["selectable", "pagination-change"]);

const attrs = useAttrs();

const getPropsValue = computed(() => {
    const newProps = { ...omit(props, Object.keys(extraProps)) } as any;
    return { ...newProps, ...attrs };
});

const getPaginationValue = computed(() => {
    const newProps = props.pagination;
    if (!newProps.total) {
        newProps.total = props.data?.length || 0;
    }
    return { ...newProps };
});

const topPos = computed(() => {
    return props.position.indexOf("top") !== -1;
});

const columnList = computed(() => {
    return props.columns.filter((item) => isUndefined(item.active) || item.active);
});

const handleSelectable = (row: any, index: Number) => {
    let flag = true;
    emit("selectable", { row, index }, (bool: boolean) => {
        flag = bool;
    });
    return flag;
};

const handleCurrentChange = () => {
    const { pageSizeKey, currentKey } = props.pagination;
    emit("pagination-change", {
        [pageSizeKey]: props.pagination[pageSizeKey],
        [currentKey]: props.pagination[currentKey]
    });
};
</script>

<style lang="scss" scoped>
@use "./index.scss";
</style>
